import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Enviando solicitud de login...');
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      
      console.log('Respuesta recibida:', response);
      console.log('Status:', response.status);
      console.log('Data:', response.data);
      
      if (response.status === 200) {
        // Llamar a la función de éxito con el nombre de usuario
        onLoginSuccess(username);
      }
    } catch (error) {
      console.error('Error en login:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Error en el inicio de sesión.');
      }
    }
  };

  return (
    <Container maxWidth="sm" className="pt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Typography variant="h4" gutterBottom className="text-center text-gray-800">
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: '1rem' }}
        >
          Entrar
        </Button>
        
        {message && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <Typography variant="body1">
              {message}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setMessage('')}
              style={{ marginTop: '0.5rem' }}
            >
              Cerrar
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
