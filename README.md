LOOM VIDEO: https://drive.google.com/file/d/1KLzogBzn1dV2RoHaNZo-grbQDtpIH4fK/view?usp=sharing

# Notes Manager

## Overview
The **Notes Manager** is a simple React-based application that allows users to create, edit, and delete notes.The notes persist even after refreshing the page using **localStorage**. 
The application features a clean and minimalistic user interface for easy note management.

## Features
- Add new notes
- Edit existing notes
- Delete notes
- Persist notes using **localStorage**
- User-friendly UI with interactive buttons

## Technologies Used
- **React.js** (Functional Components & Hooks)
- **HTML & CSS** (For UI Styling)
- **localStorage** (For data persistence)

## Installation and Setup
To run this project locally, follow these steps:

### 1. Clone the Repository
```sh
 git clone https://github.com/your-username/notes-manager.git
 cd notes-manager
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Application
```sh
npm start
```
The app will be available at `http://localhost:3000/` in your browser.

## Code Explanation

### **1. Managing State**
- The `useState` hook is used to manage **notes** and **new note input**.
- The `useEffect` hook ensures that notes are saved to **localStorage** whenever changes occur.

### **2. CRUD Functionality**
- **Adding Notes**: When a user types a note and clicks **Add**, it gets stored in the notes list.
- **Editing Notes**: A double-click on a note enables editing mode, allowing users to update the text.
- **Deleting Notes**: Clicking the trash icon removes the note from the list.

### **3. Local Storage Integration**
- On the first render, saved notes are retrieved from `localStorage`.
- Every time notes are updated, the new list is stored in `localStorage`.

## User Interface (UI) Explanation
The UI is designed to be simple and intuitive:
- **Header**: Displays the title **Notes Manager**.
- **Input Field & Add Button**: Allows users to type and save new notes.
- **List of Notes**: Displays saved notes, each with an **edit** and **delete** button.
- **Interactive Icons**:
  - **📝 Pencil Icon**: Enables editing mode.
  - **🗑 Trash Icon**: Deletes the note.
- **Double-Click to Edit**: Clicking on a note text enables editing directly.

## Compilation Process
### **1. Code Execution Flow**
- The **React App** is compiled by Webpack and Babel.
- JSX is converted into JavaScript during the build process.
- `npm start` runs the app in **development mode**, and hot-reloading ensures live updates.

### **2. How the Code Works Step by Step**
1. **App Initialization**
   - React loads the `App` component.
   - It fetches existing notes from **localStorage**.
2. **User Interactions**
   - When a user adds, edits, or deletes a note, the state updates.
   - The `useEffect` hook ensures changes persist.
3. **Rendering**
   - The component updates dynamically based on state changes.
   - Notes are displayed as a list.

## Conclusion
The Notes Manager is a basic yet effective task management tool demonstrating fundamental React concepts like **state management**, **event handling**, and **localStorage**.
The UI is user-friendly, and the app efficiently performs CRUD operations on notes.

