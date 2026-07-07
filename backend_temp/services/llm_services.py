import os
from dotenv import load_dotenv

load_dotenv()


def _get_model():
    try:
        from langchain_google_genai import ChatGoogleGenerativeAI
    except ModuleNotFoundError as exc:
        raise RuntimeError("langchain-google-genai is not installed") from exc

    return ChatGoogleGenerativeAI(
        api_key=os.getenv("GEMINIAPIKEY"),
        model="gemini-2.5-flash",
        temperature=0.5,
    )


def llm_response(question: str):
    model = _get_model()
    response = model.invoke(question)
    return response.content