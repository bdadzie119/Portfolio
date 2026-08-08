"use client"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
const [dark, setDark] = useState(true)

useEffect(() => {
    document.documentElement.classList.toggle("light", !dark)
}, [dark])

return (
    <button onClick={() => setDark(!dark)} className="theme-toggle">
    {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
)
}