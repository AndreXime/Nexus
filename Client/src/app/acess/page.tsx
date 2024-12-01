'use client';
import { useState } from 'react';
import Popup from '../../components/popup';
import '../../styles/font-awesome/css/all.min.css';

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const toggleForm = () => setIsRegistering(!isRegistering);

  const submitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      email: formData.get('email'),
      senha: formData.get('password'),
    };
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      const jsonData = await response.json();
      if (!response.ok) {
        throw new Error(jsonData.errors);
      }
      setPopupMessage(`API Response: ${jsonData.response}`);
    } catch (err) {
      setPopupMessage(`API Response: ${err.message}`);
    } finally {
      setPopupOpen(true);
    }
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      email: formData.get('email'),
      nome: formData.get('nome'),
      senha: formData.get('senha'),
    };
    try {
      const response = await fetch('http://localhost:3001/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      const jsonData = await response.json();
      if (!response.ok) {
        throw new Error(jsonData.errors.join('\n'));
      }
      setPopupMessage(`Sucesso: ${jsonData.response}`);
    } catch (err) {
      setPopupMessage(`Ocorreu um erro:\n ${err.message}`);
    } finally {
      setPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <main className='container d-flex justify-content-center align-items-center'>
      <div className='card p-5' style={{ width: '70vh' }}>
        <h1 className='text-center mb-4'>
          {isRegistering ? 'Criar Conta' : 'Entrar'}
        </h1>
        {isRegistering ? (
          <>
            <form onSubmit={submitRegister}>
              <div className='mb-4'>
                <label htmlFor='name' className='form-label'>
                  Nome
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='nome'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>
                  Senha
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='senha'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>
                  Repita a senha
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='senhaConfirm'
                  required
                />
              </div>
              <button type='submit' className='btn btn-warning w-100'>
                Registrar
              </button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={submitLogin}>
              <div className='mb-4'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label'>
                  Senha
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  required
                />
              </div>
              <div className='mb-4 form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='rememberMe'
                />
                <label className='form-check-label' htmlFor='rememberMe'>
                  Lembrar de mim
                </label>
              </div>
              <button type='submit' className='btn btn-warning w-100'>
                Entrar
              </button>
            </form>
          </>
        )}
        <div className='mt-3 text-center'>
          <button className='btn btn-link' onClick={toggleForm}>
            {isRegistering
              ? 'Já tem uma conta? Faça login'
              : 'Ainda não tem uma conta? Registre-se'}
          </button>
        </div>
      </div>
      <Popup
        isOpen={popupOpen}
        message={popupMessage}
        onClose={handleClosePopup}
      />
    </main>
  );
};
export default LoginPage;