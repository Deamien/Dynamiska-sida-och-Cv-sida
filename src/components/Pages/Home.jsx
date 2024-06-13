import React, { useState } from 'react';
import '../css/Home.css';
import '../eastereggs.js';
import Modal from '../Modal';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  window.openmodal = () => {
    setIsModalOpen(true);
  };

  return (
    <main>
      <header>
        <h1 className='h1Home'>Welcome to my page!</h1>
      </header>
      <body>
        <p>Development in progress</p>
        <div>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </body>
      <footer className='footerHome'>
        <p className='pHome'>Copyright © 2024 Christian Abdulnour. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
