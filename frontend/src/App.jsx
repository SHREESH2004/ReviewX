import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css"; // Code editor theme
import Editor from "react-simple-code-editor"; // Code editor component
import prism from "prismjs"; // Code syntax highlighting
import Markdown from "react-markdown"; // Render Markdown
import rehypeHighlight from "rehype-highlight"; // Syntax highlighting for Markdown
import axios from "axios"; // HTTP requests
import "./App.css"; // Custom styles

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`); // Default code snippet
  const [review, setReview] = useState(""); // Code review output
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state
  const [notification, setNotification] = useState(""); // Push notification message

  // Function to call the backend API for code review
  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/AI/get-review", {
        prompt: code,
      });
      setReview(response.data.data || "No review received.");
      setNotification("Code reviewed successfully!"); // Show success notification
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to fetch code review. Please try again later."
      );
      setReview(""); // Clear the review output
      setNotification("Error in reviewing code.");
    } finally {
      setLoading(false); // Reset loading state
      setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    }
  }

  return (
    <main className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Review with AI</h2>
        </div>
        <ul className="sidebar-menu">
          <li>Settings</li>
          <li>Notifications</li>
          <li>Password</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Left section: Code editor */}
        <div className="editor-section">
          <h3>Code Editor</h3>
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)} // Update code state
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #3a3a3c",
              borderRadius: "5px",
              backgroundColor: "#272729",
              color: "#ffffff",
              height: "300px",
              width: "100%",
            }}
          />
          <button
            onClick={reviewCode}
            className="review-button"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        {/* Right section: Review output */}
        <div className="review-section">
          <h3>Code Review</h3>
          {error && <div className="error">{error}</div>} {/* Show error if any */}
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>

      {/* Push Notification */}
      {notification && <div className="push-notification">{notification}</div>}
    </main>
  );
}

export default App;
