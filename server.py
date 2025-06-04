# server.py
import os
from pathlib import Path
from mcp.server.fastmcp import FastMCP


class NotesManager:
    """Single responsibility: Handle all notes file operations"""

    def __init__(self, filename: str = "notes.txt"):
        self.notes_file = Path(__file__).parent / filename
        self._ensure_file()

    def _ensure_file(self) -> None:
        """Ensure notes file exists"""
        self.notes_file.touch(exist_ok=True)

    def _read_content(self) -> str:
        """Read and return file content, DRY principle"""
        return self.notes_file.read_text().strip()

    def add_note(self, message: str) -> str:
        """Append note to file"""
        with self.notes_file.open("a") as f:
            f.write(f"{message}\n")
        return "Note Saved!"

    def get_all_notes(self) -> str:
        """Get all notes or default message"""
        content = self._read_content()
        return content or "No notes yet!"

    def get_latest_note(self) -> str:
        """Get the most recent note"""
        content = self._read_content()
        if not content:
            return "No notes yet!"
        return content.splitlines()[-1]


# Initialize components
mcp = FastMCP("AI Sticky Notes")
notes = NotesManager()


@mcp.tool()
def add_note(message: str) -> str:
    """Append a new note to the sticky note file."""
    return notes.add_note(message)


@mcp.tool()
def read_notes() -> str:
    """Get all notes from the sticky note file."""
    return notes.get_all_notes()


@mcp.resource("notes://latest")
def get_latest_note() -> str:
    """Get the most recently added note."""
    return notes.get_latest_note()


@mcp.prompt()
def note_summary_prompt() -> str:
    """Generate a prompt asking the AI to summarize all current notes."""
    content = notes.get_all_notes()
    return (
        "There are no notes yet."
        if content == "No notes yet!"
        else f"Summarize the current notes: {content}"
    )
