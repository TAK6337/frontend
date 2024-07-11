// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/Login">
                <button>Go to About Page</button>
            </Link>
        </div>
    );
}

export default Home;
