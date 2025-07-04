import React from 'react';
import { Typography, Container, Button, Card, CardContent } from '@mui/material';

const Welcome = ({ username, onLogout }) => {
  return (
    <Container maxWidth="md" className="mt-8">
      <Card className="shadow-lg">
        <CardContent className="text-center p-8">
          <Typography variant="h3" gutterBottom className="text-green-600">
            ¡Bienvenido!
          </Typography>
          <Typography variant="h5" gutterBottom className="text-gray-700">
            Hola, {username}
          </Typography>
          <Typography variant="body1" className="text-gray-600 mb-6">
            Has iniciado sesión exitosamente en la aplicación.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={onLogout}
            className="mt-4"
          >
            Cerrar Sesión
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Welcome;
