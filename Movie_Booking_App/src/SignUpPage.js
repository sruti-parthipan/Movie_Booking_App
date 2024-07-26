import React, { useState } from 'react';
import './Signup.css'; // Import the new CSS file
const SignupPage = ({ onPageChange }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signing up with:', name, dob, phone, email, username, password);
    onPageChange('movieList');
  };
  return (
    <div className="SignupPage-background"> {/* Apply the background class */}
      <div>
        <h2>Signup</h2>
        <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <br />
        <p>
          Already have an account?{' '}
          <span onClick={() => onPageChange('login')} style={{ cursor: 'pointer', color: 'blue' }}>
            Login
          </span>
        </p>
      </form>
    </div>
    </div>
    
      

  );
};

export default SignupPage;