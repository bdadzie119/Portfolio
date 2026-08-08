"use client"
import {useState} from "react"
import { ArrowUpDown } from "lucide-react"
export default function Blog(){
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("newest")
    const posts: {id:number; title: string; description: string; date: string; tags: string[]}[] = []
    const filtered = posts
    .filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => {
        if (sort === "newest") return b.id- a.id
        if (sort === "oldest") return a.id - b.id
        if (sort === "a-z") return a.title.localeCompare(b.title)
        return 0
    })
    return(
        <main>
            <div className="blog-page">
                <h1>My Blog</h1>
                <div className="search-bar">
                    <input 
                    type="text"
                    placeholder="Search a topic..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setSearch("")}>Clear</button>
                </div>
                <div className="blog-timeline">
                    <ArrowUpDown size={16}/>
                    <span>Sort:</span>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value = "newest">Newest</option>
                        <option value = "oldest">Oldest</option>
                        <option value = "a-z">A-Z</option>
                        <option value = "most-views">Most Views</option>
                    </select>
                    <div>
                        {filtered.map(post => (
                            <div key={post.id} className="post-card">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <span>{post.date}</span>
                            </div>    
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}