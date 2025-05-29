
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function RegistrationD({ isOpen, onClose }) {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => { document.body.classList.remove('no-scroll'); }
  }, [isOpen]);

  if (!isOpen) return null;

  const hanlderRegisteration = async () => {
    if (password !== confirmPassword) {
      alert("Password Don't Match! Check Your Password");
      return;
    }
    try {
      console.log('Registering user:', { fullname, email, password });
      const response = await axios.post('https://fashiony-backend.vercel.app/api/register', {
        fullname,
        email,
        password
      });
      console.log('Response:', response);
      alert(response.data.message);
      onClose();
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Server error'}`);
        console.error('Backend error response:', error.response);
      } else if (error.request) {
        alert('No response from server. Please try again later.');
        console.error('No response:', error.request);
      } else {
        alert(`Error: ${error.message}`);
        console.error('Error:', error.message);
      }
    }
  };




  return (
    <div className={`DialogMain_container1  ${isOpen ? '' : 'hidden'}`}>
      <div className={`dialogs reg ${isOpen ? 'open' : ''}`}>
        <i className="fas fa-times close" onClick={onClose}></i>
        <span className="lab2">Fashiony</span>
        <span className="LogTit">Sign Up</span>
        <div className="input_con">
          <input type="text" placeholder=" " required onChange={(e) => setFullname(e.target.value)} />
          <span>Full Name</span>
        </div>
        <div className="input_con">
          <input type="email" placeholder=" " required onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
        </div>
        <div className="input_con">
          <input type="password" placeholder=" " required onChange={(e) => setPassword(e.target.value)} />
          <span>Password</span>
        </div>
        <div className="input_con">
          <input type="password" placeholder=" " required onChange={(e) => setConfirmPassword(e.target.value)} />
          <span>Confirm Password</span>
        </div>
        <button className="LoginBtns1" onClick={hanlderRegisteration}>Register</button>
        <span className="create_ac">
          Already have an account? <span onClick={onClose}>Login</span>
        </span>
      </div>
    </div>
  )
}
