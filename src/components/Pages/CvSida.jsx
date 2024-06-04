import React from 'react';
import '../css/CvSida.css';
import data from '../../assets/CV.json';


const CV = () => {
    const fields = data.fields;

    return (
            <main className='CV'>
                <body>
                    <section className='CV1'>
                        <header>
                            <h1>{fields.name}</h1>
                            <h2>{fields.occupation}</h2>
                        </header>
                        <p>{fields.profile.description}</p>
                        <address>
                            <p>{fields.contact.address}</p>
                            <p>Phone: <a href={`tel:${fields.contact.phone}`}>{fields.contact.phone}</a></p>
                            <p>Email: <a href={`mailto:${fields.contact.email}`}>{fields.contact.email}</a></p>
                        </address>
                    </section>

                    <section className='CV2'>
                        <h3>Work Experience</h3>
                        {fields.work_experience.map((job, index) => (
                            <article key={index}>
                                <h4>{job.position} at {job.company}</h4>
                                <p>{job.location}</p>
                                <time>{job.start_date} - {job.end_date}</time>
                                <p>{job.description}</p>
                            </article>
                        ))}
                    </section>

                    <section className='CV3'>
                        <h3>Education</h3>
                        {fields.education.map((edu, index) => (
                            <article key={index}>
                                <h4>{edu.degree}</h4>
                                <p>{edu.institution}</p>
                                <p>{edu.location}</p>
                                <time>{edu.start_date} - {edu.end_date}</time>
                                <p>{edu.description}</p>
                            </article>
                        ))}
                    </section>

                    <section className='CV4'>
                        <h3>Skills</h3>
                        <ul>
                            {fields.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section className='CV5'>
                        <h3>Languages</h3>
                        <ul>
                            {fields.languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </section>

                    <section className='CV6'>
                        <h3>References</h3>
                        <p>{fields.references}</p>
                    </section>
                </body>
                <footer>
                    <p>Copyright © 2024 Christian Abdulnour. All Rights Reserved.</p>
                </footer>
            </main>
    );
};

export default CV;
