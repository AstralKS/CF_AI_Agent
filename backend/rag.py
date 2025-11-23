from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
import os

class RAGSystem:
    def __init__(self):
        # Initialize embeddings (using a local model similar to Chroma's default)
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.persist_directory = "./faiss_db"
        self.vector_store = None
        
        # Load existing index if it exists
        if os.path.exists(self.persist_directory) and os.path.exists(os.path.join(self.persist_directory, "index.faiss")):
            try:
                self.vector_store = FAISS.load_local(
                    self.persist_directory, 
                    self.embeddings, 
                    allow_dangerous_deserialization=True
                )
            except Exception as e:
                print(f"Error loading FAISS index: {e}")
                self.vector_store = None

    def add_documents(self, documents: list[str], metadatas: list[dict] = None):
        """
        Add documents to the vector store.
        """
        if not documents:
            return
            
        if metadatas is None:
            metadatas = [{"source": "user_chat"} for _ in documents]
            
        if self.vector_store is None:
            self.vector_store = FAISS.from_texts(documents, self.embeddings, metadatas=metadatas)
        else:
            self.vector_store.add_texts(documents, metadatas=metadatas)
            
        # Save to disk
        self.vector_store.save_local(self.persist_directory)

    def query(self, query_text: str, n_results: int = 3):
        """
        Query the vector store for relevant documents.
        """
        if self.vector_store is None:
            return []
            
        results = self.vector_store.similarity_search(query_text, k=n_results)
        # Return list of document contents to match previous interface
        return [doc.page_content for doc in results]

rag_system = RAGSystem()
