
# 📝 ReviewX

A powerful **MERN stack** web application designed to help developers review, comment, and improve code collaboratively. Whether you want feedback on a snippet or a full project, CodeReviewHub makes code reviews seamless, insightful, and productive.

---

## 🚀 Features

- 🔍 **Submit Code Snippets** for review with syntax highlighting  
- 💬 **Comment & Discuss** code with inline threaded conversations  
- 👥 **User Profiles & Authentication** with JWT and secure sessions  
- ⚡ **Real-time Notifications** on new comments and reviews  
- 📂 **Organize Reviews** by projects or tags for easy navigation  
- 🔐 **Role-based Access**: Reviewers, Authors, and Admins  
- 📈 **Review History & Analytics** to track code improvement over time

---

## 🛠️ Tech Stack

| Layer         | Technology                 |
| ------------- | --------------------------|
| Frontend      | React.js, Redux, Tailwind CSS |
| Backend       | Node.js, Express.js        |
| Database      | MongoDB                   |
| Authentication| JWT, bcrypt                |
| Real-time     | Socket.IO                  |

---

## 📦 Installation

### Prerequisites

- Node.js (v14+) and npm/yarn  
- MongoDB (local or cloud instance)

### Steps

```bash
# Clone the repo
git clone https://github.com/yourusername/codereviewhub.git
cd codereviewhub

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Start backend server
npm run dev

# Start frontend app
npm start
````

---

## 🧩 Usage

1. Register or login to your account
2. Create or join projects
3. Submit code snippets for review
4. Comment, discuss, and suggest improvements inline
5. Track review progress and history

---

## 🔧 Folder Structure

```
/backend
  /controllers
  /models
  /routes
  server.js

/frontend
  /src
    /components
    /pages
    /redux
    App.js
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

