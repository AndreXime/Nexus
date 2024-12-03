"use client";
import { useState } from "react";
import { TextField, Button, Box, Typography, Card, CardContent } from "@mui/material";
import Popup from "../../components/popup";

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const toggleForm = () => setIsRegistering(!isRegistering);

  const submitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      email: formData.get("email"),
      senha: formData.get("password"),
    };
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
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
    const formData = new FormData(event.target);
    const payload = {
      email: formData.get("email"),
      nome: formData.get("nome"),
      senha: formData.get("senha"),
    };
    try {
      const response = await fetch("http://localhost:3001/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const jsonData = await response.json();
      if (!response.ok) {
        throw new Error(jsonData.errors.join("\n"));
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
    <main style={{ background: "#303030" }}>
      <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
        <Card sx={{ width: "100%", maxWidth: 400, p: 3 }}>
          <CardContent>
            <Typography variant='h4' align='center' gutterBottom>
              {isRegistering ? "Criar Conta" : "Entrar"}
            </Typography>
            {isRegistering ? (
              <form onSubmit={submitRegister}>
                <TextField label='Nome' name='nome' type='text' fullWidth margin='normal' required />
                <TextField label='Email' name='email' type='email' fullWidth margin='normal' required />
                <TextField label='Senha' name='senha' type='password' fullWidth margin='normal' required />
                <TextField
                  label='Repita a Senha'
                  name='senhaConfirm'
                  type='password'
                  fullWidth
                  margin='normal'
                  required
                />
                <Button type='submit' variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>
                  Registrar
                </Button>
              </form>
            ) : (
              <form onSubmit={submitLogin}>
                <TextField label='Email' name='email' type='email' fullWidth margin='normal' required />
                <TextField label='Senha' name='password' type='password' fullWidth margin='normal' required />
                <Box display='flex' alignItems='center' justifyContent='space-between' mt={2}>
                  <label>
                    <input type='checkbox' /> Lembrar de mim
                  </label>
                </Box>
                <Button type='submit' variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>
                  Entrar
                </Button>
              </form>
            )}
            <Box mt={2} textAlign='center'>
              <Button onClick={toggleForm} variant='text' color='secondary'>
                {isRegistering ? "Já tem uma conta? Faça login" : "Ainda não tem uma conta? Registre-se"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Popup isOpen={popupOpen} message={popupMessage} onClose={handleClosePopup} />
    </main>
  );
};

export default LoginPage;
