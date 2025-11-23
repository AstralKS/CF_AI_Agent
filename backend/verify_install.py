
try:
    import sentence_transformers
    print("sentence_transformers imported successfully")
    from langchain_huggingface import HuggingFaceEmbeddings
    print("HuggingFaceEmbeddings imported successfully")
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    print("Embeddings initialized successfully")
except Exception as e:
    print(f"Error: {e}")
