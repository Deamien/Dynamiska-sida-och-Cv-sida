import React from 'react';
import './css/Home.css';
import SpoilerText from './SpoilerAlert';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className='modal-content'>
          <span className="close" onClick={onClose}>&times;</span>
          <p>Why did the two Java methods get a divorce?</p>
          <SpoilerText>
            <p>Because they had constant arguments.</p>
          </SpoilerText>
        </div>
    </div>
  );
};

export default Modal;