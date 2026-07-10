# 🔢 Counter App

A simple and responsive **Counter App** built with **React**, **Vite**, and **Tailwind CSS**.  
This project demonstrates the use of **React Hooks (`useState`)** for state management and button event handling.

---

## ✨ Features

- ➕ Increment the counter
- ➖ Decrement the counter
- 🔒 Prevents the counter from going below **0**
- 🔄 Reset the counter to `0`
- 🎨 Clean and responsive UI using **Tailwind CSS**

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **Tailwind CSS**

---

## 📂 Project Structure

```bash
counter-app/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
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

The app uses React’s **`useState` Hook** to store and update the counter value.

```jsx
const [count, setCount] = useState(0);
```

- `count` stores the current counter value
- `setCount` updates the counter value

### Button Logic

#### ➕ Increment
```jsx
onClick={() => setCount(count + 1)}
```

#### ➖ Decrement
```jsx
onClick={() => {
  if (count > 0) setCount(count - 1);
}}
```

#### 🔄 Reset
```jsx
onClick={() => setCount(0)}
```

---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repository-link>
```

### 2. Move into the project folder
```bash
cd counter-app
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

The app will run locally at:

```bash
http://localhost:5173
```

---

## 🎯 Learning Outcomes

This project helps in understanding:

- React functional components
- React `useState` Hook
- Event handling in React
- Conditional logic in button actions
- Tailwind CSS styling and layout

---

## 📸 UI Overview

The app contains:

- 🏷️ A header section with the title **Counter App**
- 🔢 A counter display area
- ➕ Increment button
- ➖ Decrement button
- 🔄 Reset button

---

## 🌟 Future Improvements

You can improve this project by adding:

- 🌙 Dark/Light mode toggle
- 💾 Save counter value in local storage
- 📈 Counter history
- 🎚️ Custom increment/decrement step
- ✨ Better animations and transitions

---

## 👨‍💻 Author

**Priyanshu Singh**

---

## 📌 Conclusion

This is a beginner-friendly React project that demonstrates how to build a simple interactive UI using **state management** and **event handling** in React.