import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Tu lógica de autenticación existente
      const response = await fetch('http://localhost:8082/obtenerUsuarios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const userMatch = data.usuarios.find((user) => user.user === username && user.pass === password);

      if (userMatch) {
        navigate('/TablaM');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/010/810/331/non_2x/medicine-pharmacy-hospital-set-of-medicines-with-labels-the-concept-of-medical-subjects-illustration-in-cartoon-style-vector.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const transparentCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '15px', // Ajusta según sea necesario
    padding: '20px',
    width: '100%',
  };

  return (
    <div style={backgroundImageStyle}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={transparentCardStyle}>
            <Card.Header as="h5" className="text-center">
                Login
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <center>
                   <Button variant="primary" type="submit" style={{ marginRight: '10px', backgroundColor: '#007BFF', borderColor: '#007BFF' }} block>
                     Iniciar Sesión
                     </Button>
                    <Link to="/registro" className="btn btn-secondary">
                     Regístrate
                        </Link>
                    </center>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
