import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Deamien/repos');
                setProjects(response.data);
            } catch (error) {
                setError('Error fetching data: ' + error.message); 
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    if (loading) {
        return <p>Loading projects...</p>;
    }

    if (error) {
        console.error(error);
        return <p>{error}</p>;
    }

    return (
            <main className="portfolio">
                <header><h1>Portfolio</h1></header>
                <body>
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id}>
                                <h2>{project.name}</h2>
                                <p>{project.description || 'No description available'}</p>
                                <a href={project.html_url}>
                                View Repository
                                </a>
                            </li>
                        ))}
                    </ul>
                </body>

                <footer>
                    <p>Copyright © 2024 Christian Abdulnour. All Rights Reserved.</p>
                </footer>
            </main>
    );
};

export default Portfolio;
