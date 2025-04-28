import React, { useState } from 'react';

interface Socio {
  usuario: string;
  contrasena: string;
  nombreCompleto: string;
  numeroMembresia: string;
}

const sociosRegistrados: Socio[] = [
  { usuario: 'sandra.g', contrasena: 'latte123', nombreCompleto: 'Sandra García', numeroMembresia: '5001' },
  { usuario: 'roberto.m', contrasena: 'capuccino456', nombreCompleto: 'Roberto Martínez', numeroMembresia: '5002' },
  { usuario: 'esteban.l', contrasena: 'espresso789', nombreCompleto: 'Esteban López', numeroMembresia: '5003' },
];

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSocioAutenticado(null);

    const socioEncontrado = sociosRegistrados.find(
      (socio) => socio.usuario === usuario && socio.contrasena === contrasena
    );

    if (socioEncontrado) {
      setSocioAutenticado(socioEncontrado);
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  if (socioAutenticado) {
    return (
      <div>
        <h1>¡Hola, {socioAutenticado.nombreCompleto}!</h1>
        <p>Gracias por ser parte de Café Aurora.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Portal de Socios Café Aurora</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={handleInputChange}
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
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;