import { useEffect, useState } from "react"
import Post from "./post";
export default function Posts() {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1 className="">Posts:{posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

// 6.Data load 
/**
 * 1.Create a state to store the data 
 * 2.Create use effect with no dependencies
 * 3.Use fetch to load data 
 */