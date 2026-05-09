import { Mail} from "lucide-react"
export default function Home() {
  return (
    <main>
      <div className="navbar">
      <a href="/">Home</a>
      <a href="/">Projects</a>
      <a href="/">Journal</a>
      <a href="/">Contact</a>
      </div>
      <div className="hero">
      <h1>Hi Ben Here. 👋</h1>
      <div className="hero-intro">
      <p>21 year old computer science student at the University of Huddersfield</p>
      <p>Full-stack developer in progress.</p>
      </div>
      <div className="hero-body">
      <p>Building projects, learning by shipping and turning ideas into real products.</p>
      <p>Currently focused on full-stack developments, learning software engineering principles and building real-world project</p>
      </div>
      <div className="hero-footer">
      <b>For Q&A, start a chat with Ben Support</b>
      <p>For any further contact, please refer to my social media platforms below.</p>
      </div>
      <div className="hero-links">
        <a href="/Benjamin_Dadzie_CV.pdf"> Resume</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank"> LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank"> GitHub</a>
        <a href="https://instagram.com/yourusername" target="_blank"> Instagram</a>
        <a href="mailto:youremail@gmail.com"><Mail size={16} /> Email</a>
      </div>
      </div>
    </main>
  );
}