export default function Projects(){
    return(
        <main>
            <div className="projects-page">
                <h1>My Projects</h1>
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
        </main>
    )
}