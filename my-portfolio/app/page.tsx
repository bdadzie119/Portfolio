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
          <p>Currently focused on full-stack developments, learning software engineering principles and building real-world projects</p>
        </div>

        <div className="hero-footer">
          <b>For Q&A, start a chat with Ben Support</b>
          <p>For any further contact, please refer to my social media platforms below.</p>
        </div>

        <div className="hero-links">
          <a href="/Benjamin_Dadzie_CV.pdf"><FileText size={30} /></a>
          <a href="https://www.linkedin.com/in/benjamin-dadzie-b47b65279/" target="_blank">
            <img src="/linkedin.svg" alt="Linked In" />
          </a>
          <a href="https://github.com/bdadzie119" target="_blank">
            <img src="/Github_dark.svg" alt="Github" />
          </a>
          <a href="https://www.instagram.com/bdadzie119/" target="_blank">
            <img src="/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="mailto:dadziebenjamin995@gmail.com"><Mail size={30} /></a>
        </div>
      </div>

      <div className="experience">
        <div className="experience-education">
          <div className="entry">
            <div className="entry-header">
              <a href="https://www.hud.ac.uk/" target="_blank">University of Huddersfield</a>
              <span>2023 - Present</span>
            </div>
            <p className="entry-role">BSc Computer Science</p>
            <ul>
              <li>Foundation with Mechanical Engineering</li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <a href="https://www.elliotthudsoncollege.ac.uk/" target="_blank">Elliott Hudson Academy</a>
              <span>2021 - 2023</span>
            </div>
          </div>

          <div className="entry">
            <div className="entry-header">
              <a href="https://www.ruthgorse.leeds.sch.uk/" target="_blank">Ruth Gorse Academy</a>
              <span>2016 - 2021</span>
            </div>
          </div>
        </div>

        <div className="experience-work">
          <div className="entry">
            <div className="entry-header">
              <a href="https://www.donershack.com/" target="_blank">Doner Shack, Leeds</a>
              <span>July 2023 - May 2024</span>
            </div>
            <p className="entry-role">Kitchen Staff</p>
            <ul>
              <li>Prepared food items such as kebabs, fries, and fried chicken while maintaining hygiene standards.</li>
              <li>Took responsibility for closing duties, ensuring a clean and organised kitchen.</li>
              <li>Gained skills in time management, teamwork, and maintaining quality under pressure.</li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <a href="https://www.sainsburys.co.uk/" target="_blank">Sainsbury's</a>
              <span>Sep 2024 - Present</span>
            </div>
            <p className="entry-role">Night Shift Online Assistant</p>
            <ul>
              <li>Ensured stock quality and organisation, and maintained store standards overnight.</li>
              <li>Met strict deadlines while working independently and efficiently under pressure.</li>
              <li>Pick, pack, and prepare customer orders using handheld devices.</li>
            </ul>
          </div>
        </div>
      </div>
    </main> 
  );
}

