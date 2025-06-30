import os
from dotenv import load_dotenv
from pydantic import BaseSettings

# Load environment variables from the .env file (if present)
load_dotenv()

# Access environment variables as if they came from the actual environment
API_KEY = os.getenv("OPENAI_API_KEY")


class ChatConfig(BaseSettings):
    MODEL_NAME: str = "openai/gpt-4.1"
    BASE_URL: str = "https://models.github.ai/inference"
    API_KEY:str = API_KEY
    MAX_TOKENS: int = 4096
    TEMPERATURE: float = 0.5
    TOP_P: float = 1.0
    FREQUENCY_PENALTY: float = 0.0
    PRESENCE_PENALTY: float = 0.0
    MAX_TOKENS_PER_MESSAGE: int = 2000
    MAX_TOKENS_PER_RESPONSE: int = 2000
    MAX_TOKENS_PER_CONVERSATION: int = 4096



matching_config = ChatConfig()