import { useNavigate } from 'react-router-dom'; 
import {useState} from 'react'

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar las credenciales
    if (username === 'soso' && password === 'karen') {
      navigate('./principal'); // Redirigir a la página de inicio si las credenciales son correctas
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#0a192f', // Fondo azul marino oscuro
      color: '#fff' // Texto blanco
    }}>
      <h2 style={{ marginBottom: '20px', color: '#66fcf1' }}>Iniciar sesión como administrador</h2>
      <form onSubmit={handleSubmit} style={{ 
        width: '300px', 
        padding: '20px', 
        backgroundColor: '#1f4068', // Fondo celeste verdoso
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px' 
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{ marginBottom: '10px', color: '#fff', display: 'block' }}>Usuario</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '14px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              color: '#333', 
              backgroundColor: '#f0f0f0' // Fondo gris claro para contraste
            }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ marginBottom: '10px', color: '#fff', display: 'block' }}>Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '14px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              color: '#333', 
              backgroundColor: '#f0f0f0' // Fondo gris claro para contraste
            }} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <button type="submit" style={{ 
          width: '100%', 
          padding: '12px', 
          backgroundColor: '#45a29e', // Botón celeste verdoso más oscuro
          color: '#fff', 
          fontSize: '16px', 
          borderRadius: '4px', 
          border: 'none', 
          cursor: 'pointer' 
        }}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
