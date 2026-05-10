import { Mail, FileText } from "lucide-react"
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
        <a href="/Benjamin_Dadzie_CV.pdf"><FileText size={30}></FileText></a>
        <a href="https://www.linkedin.com/in/benjamin-dadzie-b47b65279/" target="_blank">
          <img src="/linkedin.svg" alt="Linked In" />
        </a>
        <a href="https://github.com/bdadzie119" target="_blank">
          <img src="/Github_dark.svg" alt="Github"/>
        </a>
        <a href="https://www.instagram.com/bdadzie119/" target="_blank">
          <img src="/instagram-icon.svg" alt="Instagram"/>
        </a>
        <a href="mailto:dadziebenjamin995@gmail.com"><Mail size={30}/></a>
      </div>
      </div>
    </main>
  );
}

