"use client"

import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    
    return (
        <main>
        <h1>Next.js 13.4</h1>
        <h2>Client Component</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </main>
    );
    }