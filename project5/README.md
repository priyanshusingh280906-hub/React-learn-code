# ⚛️ React Router Demo

A simple React application built using **React**, **Vite**, **React Router DOM**, and **Tailwind CSS**. This project demonstrates client-side routing, reusable components, API fetching, and responsive UI development.

---

## 🚀 Features

- 🏠 Home Page
- ℹ️ About Page
- 📞 Contact Page
- 🐙 GitHub Profile Page
- 🔄 Client-side Routing with React Router DOM
- 🎨 Responsive UI with Tailwind CSS
- ⚡ Built using Vite
- 🌐 Fetches live GitHub profile data using the GitHub API
- 🧩 Reusable Header and Footer components

---

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- GitHub REST API

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Github.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📸 Pages

### 🏠 Home
- Responsive landing page
- Hero section
- Call-to-action buttons
- Modern UI

### ℹ️ About
- Information about the project
- React learning content

### 📞 Contact
- Contact page layout

### 🐙 GitHub
- Fetches live GitHub user data using the GitHub API.
- Displays:
  - Profile Picture
  - Username
  - Name
  - Bio
  - Followers
  - Following
  - Public Repositories

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/priyanshusingh280906-hub/React-learn-code.git
```

### 2️⃣ Navigate to the project

```bash
cd project5
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🌐 GitHub REST API

This project uses the **GitHub REST API** to fetch live profile information dynamically.

### Endpoint Used

```http
GET https://api.github.com/users/{username}
```

For this project:

```http
GET https://api.github.com/users/priyanshusingh280906-hub
```

### Data Retrieved

The application displays the following information:

- 👤 Username
- 📝 Name
- 🖼️ Profile Avatar
- 📄 Bio
- 👥 Followers
- ➕ Following
- 📦 Public Repositories

### Example Fetch Request

```javascript
useEffect(() => {
  fetch("https://api.github.com/users/priyanshusingh280906-hub")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);
```

### Sample Response

```json
{
  "login": "priyanshusingh280906-hub",
  "name": "Priyanshu Singh",
  "followers": 3,
  "following": 2,
  "public_repos": 15,
  "avatar_url": "https://avatars.githubusercontent.com/u/234435660?v=4",
  "bio": "Solving problems, one <div> at a time😁. When I'm not debugging or tweaking code🧑‍💻, I'm likely exploring new things to learn😌."
}
```

### Official Documentation

GitHub provides a comprehensive REST API for accessing public repositories, users, issues, pull requests, and much more.

📖 https://docs.github.com/en/rest

---

## 📚 What I Learned

During this project, I learned:

- React Components
- JSX
- Props
- React Router DOM
- BrowserRouter
- Routes & Route
- Link & NavLink
- Dynamic Navigation
- React Hooks (`useState`, `useEffect`)
- Fetch API
- Tailwind CSS
- Responsive Design
- Project Structure
- API Integration

---

## 🔮 Future Improvements

- Authentication
- Dark Mode
- Better UI animations
- Loading Skeletons
- Error Handling
- Search functionality
- More API integrations

---

## 👨‍💻 Author

**Priyanshu Singh**

GitHub: https://github.com/priyanshusingh280906-hub

LinkedIn: https://linkedin.com/in/ogpriyanshu

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub and feel free to fork it for your own learning.

Happy Coding! 🚀