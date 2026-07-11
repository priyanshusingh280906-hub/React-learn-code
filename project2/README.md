# 🎨 Background Color Alter

A simple React project built with **Vite** ⚡ and **Tailwind CSS** 💨 that changes the background color of the page when different color buttons are clicked.

---

## 🚀 Features

- Built using **React** ⚛️
- Styled with **Tailwind CSS** 🎨
- Uses **useState** hook for state management 🔄
- Dynamically changes the background color on button click 🖱️
- Beginner-friendly project for practicing React basics 🌱

---

## 🛠️ Tech Stack

- **React** ⚛️
- **Vite** ⚡
- **Tailwind CSS** 💨
- **JavaScript** 🟨

---

## 📝 Project Description

This project is a simple **Background Color Changer App** made using React.

It displays multiple color buttons such as:

- 🟡 Amber
- 🔵 Blue
- 🔴 Red
- ⚫ Black
- 🫒 Olive
- 🟣 Purple
- 🌹 Rose
- 🟢 Emerald

When the user clicks on any button, the background color of the page changes to that selected color.

This project is useful for understanding:

- 🧩 React components
- 🔄 `useState` hook
- ⚡ Event handling in React
- 🏷️ Dynamic `className` updates
- 🎨 Tailwind CSS utility classes

---

## 📂 Folder Structure

```text
background-color-changer/
│── node_modules/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
```

---

## ⚙️ How It Works

The app uses React’s `useState` hook to store the current background color.

Example:

```javascript
const [color, setColor] = useState("white");
```

Initially, the background color is set to **white** ⚪.

When a user clicks a button, the `setColor()` function updates the color state:

```javascript
<button onClick={() => setColor("bg-blue-500")}>Blue</button>
```

That selected Tailwind background color class is then applied to the main container using dynamic `className`.

---

## 🎯 Main Functionality

- 🖱️ Click on a color button
- 🔄 The state updates with the selected Tailwind background color class
- 🖼️ The background of the page changes instantly

---

## 💻 Installation and Setup

### 1. Clone the repository 💾

```bash
git clone  https://github.com/priyanshusingh280906-hub/React-learn-code.git
```

### 2. Navigate to the project folder 📂

```bash
cd project2
```

### 3. Install dependencies 📦

```bash
npm install
```

### 4. Start the development server 🚀

```bash
npm run dev
```

---

## 🧠 Concepts Practiced

This project helped in practicing the following concepts:

- 🧩 React functional components
- 🔄 `useState` hook
- 🖱️ Handling button click events
- 🖼️ Updating UI dynamically
- 🎨 Tailwind CSS styling
- 🏗️ Component structure in React

---

## 🔮 Future Improvements

Some improvements that can be added in the future:

- 🔄 Add a **Reset** button to restore the default background color
- 🌈 Add **more color options**
- 🏷️ Show the **currently selected color name**
- ✨ Add **smooth transition effects**
- 📱 Improve responsiveness for mobile screens
- 💾 Store the selected color in **localStorage** so it remains after refresh

---

## ✍️ Author

**Priyanshu Singh** 👨‍💻

---

## 📜 License

This project is made for **learning and practice purposes** 📚.