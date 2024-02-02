import React, { useState } from 'react';
import { InputComponent } from '../Components/InputComponent';
import { Button, Paper } from '@mui/material';
import { data } from '../utils/data';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: '', password: '' });

  const onChange = (e) => {
    const { value, id } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    if (username === data.username && password === data.password) {
      alert('Correct credentials');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <center>
    <div className='container'>
      <Paper component="form" onSubmit={submitHandle} elevation={10} sx={{ px: 2, py: 3 }} style={{background:'bisque'}}>
        <h3><b><i><u>Login Page</u></i></b></h3>
        <br />
        <InputComponent type="text" id="username" placeholder="Enter Username..." required={true} onChange={onChange} />
        <br />
        <br />
        <InputComponent
          type="password"
          id="password"
          placeholder="Enter Password..."
          required={true}
          onChange={onChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
      </Paper>
    </div>
    </center>
  );
};

export { Login };
