# Simple To-Do List App

A beginner-friendly to-do list web app that runs fully in the browser.

## Technology choice

This project uses a **vanilla web stack**:

- **HTML** for page structure
- **CSS** for a clean, simple UI
- **JavaScript** for behavior (add, complete, delete tasks)
- **Local Storage** to persist tasks in the browser without login

Why this choice:
- Very easy to run on any computer
- No build tools or package installation required
- Great for learning and small personal projects

## Features

- Add a task
- Mark a task as completed
- Delete a task
- Persist tasks locally with browser Local Storage

## Project structure

```text
.
├── index.html   # App layout and template markup
├── style.css    # Styling for the to-do app
├── script.js    # App logic and Local Storage handling
└── README.md    # Setup and usage guide
```

## Step-by-step setup

### Option 1: Run directly (quickest)
1. Download or clone this repository.
2. Open `index.html` in your web browser.
3. Start adding tasks.

### Option 2: Run with a local server (recommended)
1. Open a terminal in the project folder.
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser at `http://localhost:8000`.
4. Use the app.

## How to use

1. Type a task in the input field.
2. Click **Add**.
3. Check the checkbox to mark a task completed.
4. Click **Delete** to remove a task.

## Notes

- Tasks are saved in your current browser only.
- Clearing browser storage or switching browsers/devices will not carry tasks over.
