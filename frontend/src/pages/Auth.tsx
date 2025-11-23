import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const endpoint = isLogin ? '/token' : '/register';
    const body = isLogin 
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        if (isLogin) {
            localStorage.setItem('token', data.access_token);
            toast.success('Welcome back!');
            navigate('/chat');
        } else {
            toast.success('Account created! Please log in.');
            setIsLogin(true);
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.detail || 'Authentication failed');
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast.error('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse" />
       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card variant="glass" className="w-full space-y-8 backdrop-blur-3xl border-white/10">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
              {isLogin ? 'Welcome Back' : 'Join CFanatic'}
            </h2>
            <p className="text-stone-400">
              {isLogin ? 'Sign in to continue your progress' : 'Create an account to get started'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input 
                label="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Codeforces Handle"
                disabled={isLoading}
                className="bg-stone-900/50 border-white/5 focus:border-orange-500/50"
              />
              <AnimatePresence mode="popLayout">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Input 
                      label="Email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      disabled={isLoading}
                      className="bg-stone-900/50 border-white/5 focus:border-orange-500/50"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <Input 
                label="Password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
                className="bg-stone-900/50 border-white/5 focus:border-orange-500/50"
              />
            </div>

            <Button type="submit" className="w-full flex justify-center items-center shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40" disabled={isLoading}>
              {isLoading ? <LoadingSpinner size="sm" /> : (isLogin ? 'Sign In' : 'Create Account')}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-white/5">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-stone-400 hover:text-orange-500 text-sm transition-colors font-medium"
              disabled={isLoading}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
