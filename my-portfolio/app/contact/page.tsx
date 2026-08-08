import { CircleArrowRight} from "lucide-react"
export default function Contact(){
    return(
        <main>
            <div className="contact-page">
                <h1>Contact Me.</h1>
            </div>
            <div className="contact-expansion">
                <form action="https://formspree.io/f/mjybgygn" method="POST">
                <input type="Text" name="name" placeholder="Name:"/>
                <input type="Email" name="email" placeholder="Email:"/>
                <textarea name="Message" placeholder="Let me know of any website feedback or carrer oppurtunities, thank you"/>
                <button type="submit" className="send-button">Send Message <CircleArrowRight size={20}/></button>
                </form>
            </div>
            <br/>
            <span>By submitting this form, I agree to the <a href="/">privacy policy</a></span>
            <br/>
            <span>© 2026<a href="/"> bendev.com |</a><a href="/"> privacy policy</a></span>
        </main>
    )
}
