from config import settings
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.chat.router import router as chat_router


# Create a FastAPI app instance with the specified title from settings
app = FastAPI(title=settings.APP_NAME)

# Configure Cross-Origin Resource Sharing (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def healthcheck() -> bool:
    return True


app.include_router(chat_router, prefix="/service", tags=["Chat"])