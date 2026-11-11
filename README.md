# Task Manager

A simple, lightweight task manager built with vanilla HTML, CSS, and JavaScript. Add tasks, check them off when they're done, delete them when they're not needed anymore, and filter the list to focus on what matters — all without a backend, since your tasks are saved right in your browser.

---

## 1. Project Overview

Task Manager is a single-page web app for keeping track of everyday to-dos. It lets you:

- Type a task into the input field and add it to your list.
- Mark tasks as completed (or un-complete them) with a checkbox.
- Delete tasks you no longer need.
- Filter the list to show **All**, **Active**, or **Completed** tasks.
- Keep your tasks between page reloads using the browser's `localStorage`.

The app also shows a live count of how many tasks you currently have, and displays helpful messages when the list is empty or when no tasks match the selected filter. The layout is responsive, so it works on both desktop and mobile screens.

---

## 2. Features

### ➕ Adding tasks

- Type into the **New task** input and click **Add Task** (or press **Enter**).
- Empty or whitespace-only input is ignored, so you can't accidentally add a blank task.
- The input field clears automatically after a task is added.

### ✅ Completing tasks

- Each task has a checkbox. Checking it marks the task as completed.
- Completed tasks are shown with a strikethrough and reduced opacity.
- Unchecking the box restores the task to its active state.

### 🗑️ Deleting tasks

- Every task has a **Delete** button that removes it from the list and from storage.

### 🔍 Filtering tasks

- Use the dropdown to switch between:
  - **All** — show every task.
  - **Active** — show only tasks that aren't completed yet.
  - **Completed** — show only finished tasks.
- If the filter matches nothing, a friendly message is displayed instead of a blank list.

### 💾 Saving tasks

- Tasks are saved to `localStorage` after every add, complete, and delete action.
- When you reopen or refresh the page, your tasks are loaded back automatically.

### 🔢 Task counter

- The heading above the list displays the total number of tasks and updates in real time.

### 📱 Responsive design

- The layout adapts to smaller screens with a mobile-friendly media query.

---

## 3. Technologies

| Technology           | What it's used for                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **HTML5**            | Page structure — the input, add button, filter dropdown, and task list container.        |
| **CSS3**             | Styling, layout (Flexbox), hover/focus states, and responsive design with media queries. |
| **JavaScript (ES6)** | All app logic — rendering tasks, handling events, filtering, and updating the UI.        |
| **localStorage**     | Persisting tasks in the browser so they survive page reloads.                            |

No frameworks, no build tools, no dependencies — just open it and go.

---

## 4. How to Run

### Option A — Clone with Git

```bash
# 1. Clone the repository
git clone https://github.com/ddelportgit/interactive-task-manager.git

# 2. Move into the project folder
cd interactiv-task-manager
```

Then open `index.html` in your browser. You can double-click the file, or run:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option B — Download the ZIP

1. Click the green **Code** button on the repository page and choose **Download ZIP**.
2. Extract the folder.
3. Open `index.html` in your browser.

### Option C — Use a local dev server (optional)

If you prefer running a local server (recommended for editors like VS Code):

- Install the **Live Server** extension in VS Code, then right-click `index.html` → **Open with Live Server**.
- Or use Python:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## Project Structure

```
interactive-task-manager/
├── index.html    # Markup: input, buttons, filter, task list
├── style.css     # Styling, layout, and responsive rules
└── script.js     # Task logic, rendering, filtering, localStorage
```

---

## How It Works

- Tasks are stored in an array of objects, each with an `id`, `text`, and `completed` flag.
- The array is synced to `localStorage` on every change, so state is never lost.
- `renderTasks()` rebuilds the list from the current state, applying the active filter.
- Event listeners on the checkbox, delete button, add button, filter dropdown, and input field keep the UI in sync with the data.

---

## Resetting Your Tasks

To clear all saved tasks, open your browser's developer tools → **Application** → **Local Storage**, and delete the `tasks` key. Refreshing the page will start you with an empty list.

---

## License

This project is open source and available for personal and educational use. Feel free to fork it and build on it!
