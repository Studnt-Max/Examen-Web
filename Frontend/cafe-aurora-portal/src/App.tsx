import React, { useState } from 'react';
import axios from 'axios';

interface Socio {
  usuario: string;
  nombreCompleto: string;
  numeroMembresia: string;
}

function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [socioAutenticado, setSocioAutenticado] = useState<Socio | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'usuario') {
      setUsuario(value);
    } else if (name === 'contrasena') {
      setContrasena(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSocioAutenticado(null);

    try {
      const response = await axios.post('http://localhost:3000/api/members/login', {
        username: usuario,
        password: contrasena
      });

      setSocioAutenticado({
        usuario,
        nombreCompleto: response.data.fullName,
        numeroMembresia: response.data.membershipNumber.toString()
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.error || 'Error al autenticar');
      } else {
        setError('Ocurrió un error inesperado');
      }
    }
  };

  if (socioAutenticado) {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>¡Hola, {socioAutenticado.nombreCompleto}!</h1>
        <p>Gracias por ser parte de Café Aurora.</p>
        <p>Tu número de membresía es: {socioAutenticado.numeroMembresia}</p>
        <button onClick={() => {
          setSocioAutenticado(null);
          setUsuario('');
          setContrasena('');
        }}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Portal de Socios Café Aurora</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button 
          type="submit"
          style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        >
          Iniciar Sesión
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

export default App;