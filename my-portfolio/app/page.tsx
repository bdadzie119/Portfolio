"use client"
import { Mail, FileText } from "lucide-react"
import {useState} from "react";
export default function Home() {
  const[activeTab, setActiveTab] = useState("work")
  return (
    <main>
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
          {/*<p>For Q&A, start a chat with Ben Support</p>*/}
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
        <div className="tab-buttons">
          <button 
            className={activeTab ==="work" ? "tab-active" : ""} 
            onClick={() =>setActiveTab("work")}>Work 
          </button>
          <button
          className={activeTab === "education" ? "tab-active" : ""}
          onClick={() => setActiveTab("education")}>Education</button>
        </div>
        {activeTab == "work" && (
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
        )}
        {activeTab == "education" && (
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
        )}
      </div>
       <div className="projects">
        <div className="project-header">
          <h2>Featured Projects</h2>
          <a href="/projects">view more →</a>
        </div>

        <div className="project-card">
              <h2>Ticketing Platform</h2>
              <p>A Ticketmaster-style ticketing application. Built the backend as part of a university group project, currently rebuilding the frontend independently.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>SQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/bdadzie119/TicketMaster_alike" target="_blank">Source ↗</a>
            </div>
        </div>
      </div>
      < div className="recent-posts">
        <div className="recent-post-header">
          <h2>Recent Posts</h2>
          <a href="/blog">view more →</a>
        </div>
      </div>
      <footer className="footer">
        <p>© Benjamin Dadzie</p>
      </footer>
    </main> 
  );
}


