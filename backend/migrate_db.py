"""
Database migration script to add cf_handle column to user_keys table
"""
import sys
sys.path.append('.')

from sqlalchemy import create_engine, text
from database import SQLALCHEMY_DATABASE_URL

engine = create_engine(SQLALCHEMY_DATABASE_URL)

def migrate():
    with engine.connect() as conn:
        # Check if column exists
        result = conn.execute(text("PRAGMA table_info(user_keys)"))
        columns = [row[1] for row in result]
        
        if 'cf_handle' not in columns:
            print("Adding cf_handle column to user_keys table...")
            conn.execute(text("ALTER TABLE user_keys ADD COLUMN cf_handle VARCHAR"))
            conn.commit()
            print("Migration completed successfully!")
        else:
            print("cf_handle column already exists, skipping migration.")

if __name__ == "__main__":
    migrate()
