import React from 'react';
import '../css/About.css';
import pic from '../../assets/1682003379230.jpg'
import '../eastereggs.js';

const About = () => {
    return (
            <main>
              <header  className="AboutImg">
                <img src={pic} alt=""/>
              </header>
                <body>
                  <h1>About Me</h1>
                  <p>...</p>
                </body>
                
                <footer className='Aboutfooter'>
                  <p>Copyright © 2024 Christian Abdulnour. All Rights Reserved.</p>
                </footer>
            </main>
    );
};

export default About;