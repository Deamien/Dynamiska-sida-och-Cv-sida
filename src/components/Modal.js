import React from 'react';
import './css/Home.css';
import SpoilerText from './SpoilerAlert';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className='modal-content'>
          <p>Why did the two Java methods get a divorce?</p>
          <SpoilerText>
            <p>Because they had constant arguments.</p>
          </SpoilerText>
        </div>
      <span className="close" onClick={onClose}>&times;</span>
    </div>
  );
};

export default Modal;