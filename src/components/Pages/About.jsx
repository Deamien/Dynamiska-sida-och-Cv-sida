import React from 'react';
import '../css/About.css';
import pic from '../../assets/1682003379230.jpg'

const About = () => {
    return (
            <main>
              <header  className="AboutImg">
                <img src={pic}/>
              </header>
                <body>
                  <h1>About Me</h1>
                  <p>...</p>
                </body>
                
                <footer>
                  <p>Copyright © 2024 Christian Abdulnour. All Rights Reserved.</p>
                </footer>
            </main>
    );
};

export default About;