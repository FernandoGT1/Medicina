import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(username, email, password);

    fetch('http://localhost:8082/crearUsuario', {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        gmail: email,
        pass: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Redirige al usuario al componente de inicio de sesión después de un registro exitoso
    navigate('/');
  };

  const backgroundStyle = {
    backgroundImage: `url("https://www.engenerico.com/wp-content/uploads/2021/11/en-generico-medicamentos-con-valor-anadido.jpg")`, // Ruta de tu imagen de fondo
    backgroundSize: '100% 100%',
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
    <div style={backgroundStyle}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={transparentCardStyle}>
              <Card.Header as="h5" className="text-center">
                Registro
              </Card.Header>
              <Card.Body>
                <Link to="/">
                  <Button variant="danger" className="mb-3">
                    Regresar a Login
                  </Button>
                </Link>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" name="username" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" required />
                  </Form.Group>
                  <center>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        backgroundColor: '#007BFF',
                        borderColor: '#007BFF',
                        marginRight: '10px',
                      }}
                    >
                      Registrarse
                    </Button>
                  </center>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registro;
