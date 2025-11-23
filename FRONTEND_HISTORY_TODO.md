# Chat History Implementation - Frontend Update Needed

## Backend Complete ✅

The backend now has full chat history support:
- **Database models** for ChatSession and ChatMessage
- **API endpoints** for managing sessions
- **Automatic session creation** with title from first message
- **Message persistence** in database

## Frontend Updates Required

### 1. Add State Variables

In `Chat.tsx`, add these new state variables:

```typescript
const [currentSessionId, setCurrentSessionId] = useState<number | null>(null);
const [chatSessions, setChatSessions] = useState<any[]>([]);
```

### 2. Add API Integration

Add these functions:

```typescript
const loadChatSessions = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('http://localhost:8000/chat/sessions', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.ok) {
      const sessions = await res.json();
      setChatSessions(sessions);
    }
  } catch (e) {
    console.error('Failed to load chat sessions:', e);
  }
};

const loadSession = async (sessionId: number) => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`http://localhost:8000/chat/sessions/${sessionId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      setMessages(data.messages);
      setCurrentSessionId(sessionId);
    }
  } catch (e) {
    console.error('Failed to load session:', e);
  }
};
```

### 3. Update sendMessage Function

Change from sending history array to sending session_id:

```typescript
const sendMessage = async () => {
  if (!input.trim() || isThinking) return;
  
  const newMessage: Message = { role: 'user', content: input };
  setMessages(prev => [...prev, newMessage]);
  setInput('');
  setIsThinking(true);

  const token = localStorage.getItem('token');
  try {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        message: newMessage.content,
        session_id: currentSessionId || undefined  // Changed!
      })
    });
    
    const data = await res.json();
    if (res.ok) {
      setMessages(prev => [...prev, { role: 'model', content: data.response }]);
      setCurrentSessionId(data.session_id);  // Save session ID
      loadChatSessions();  // Refresh session list
    } else {
      toast.error(data.detail || 'Error getting response');
    }
  } catch (e) {
    console.error(e);
    toast.error('Network error');
  } finally {
    setIsThinking(false);
  }
};
```

### 4. Update startNewChat Function

```typescript
const startNewChat = () => {
  setMessages([]);
  setInput('');
  setCurrentSessionId(null);  // Reset session
  toast.success('Started a new chat session');
};
```

### 5. Update Sidebar to Show Real History

Replace the placeholder history with real sessions:

```typescript
<div className="mt-6">
  <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3 px-2">Recent</h3>
  {chatSessions.length > 0 ? (
    chatSessions.map((session) => (
      <div 
        key={session.id} 
        onClick={() => loadSession(session.id)}
        className={`p-3 rounded-lg hover:bg-white/5 cursor-pointer text-sm transition-colors mb-1 truncate ${
          currentSessionId === session.id ? 'bg-orange-600/10 text-orange-400' : 'text-stone-400'
        }`}
      >
        <div className="font-medium truncate">{session.title}</div>
        <div className="text-xs text-stone-500">
          {new Date(session.updated_at).toLocaleString()}
        </div>
      </div>
    ))
  ) : (
    <div className="text-xs text-stone-500 px-2">No chat history yet</div>
  )}
</div>
```

### 6. Load Sessions on Mount

Add to `useEffect`:

```typescript
useEffect(() => {
  checkKeys();
  loadChatSessions();  // Add this
}, []);
```

## How It Works Now:

1. **First Message**: Creates a new session with title from message
2. **Subsequent Messages**: Saved to same session
3. **New Chat Button**: Clears messages and resets session ID
4. **Click History Item**: Loads that session's messages
5. **Sidebar**: Shows real conversation history with timestamps

## Benefits:

✅ Persistent chat history across page refreshes  
✅ Can continue old conversations  
✅ Automatic title from first message  
✅ Timestamp shows when last used  
✅ Up to 20 most recent sessions displayed  

## Next Steps:

1. Update the frontend with the changes above
2. Restart both servers if needed
3. Test creating new chats and switching between them
