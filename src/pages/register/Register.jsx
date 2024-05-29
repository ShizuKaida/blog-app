import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography, Paper, Grow, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false); // State for error Snackbar
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const navigate = useNavigate();

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'Adınız gereklidir';
    tempErrors.lastName = formData.lastName ? '' : 'Soyadınız gereklidir';
    tempErrors.email = formData.email ? '' : 'Email adresiniz gereklidir';
    if (formData.email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(formData.email)) {
        tempErrors.email = 'Geçerli bir email adresi giriniz';
      }
    }
    tempErrors.password = formData.password ? '' : 'Şifreniz gereklidir';
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3000/users/register', {
          name: formData.firstName,
          surname: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        setSuccessMessage('Kayıt başarılı! Lütfen giriş yapın.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        });
        setErrors({});
        setOpenSuccess(true);
        localStorage.setItem('successMessage', 'Kayıt başarılı! Lütfen giriş yapın.');
        localStorage.setItem('openSuccess', 'true');
        setTimeout(() => {
          navigate('/login');
        }, 0);
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ general: error.response.data.error || 'Kayıt sırasında bir hata oluştu' });
          setOpenError(true); // Open error Snackbar
          setErrorMessage(error.response.data.error || 'Kayıt sırasında bir hata oluştu'); // Set error message
        } else {
          setErrors({ general: 'Kayıt sırasında bir hata oluştu' });
          setOpenError(true); // Open error Snackbar
          setErrorMessage('Kayıt sırasında bir hata oluştu'); // Set default error message
        }
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false); // Close error Snackbar
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64cfd57c347c14534e2dc618_%20-%201.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)',
        paddingTop: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="sm">
        <Grow in={showForm}>
          <Paper elevation={3} sx={{ padding: 4, marginTop: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" gutterBottom>
                Kayıt Ol
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="Adınız"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName : ''}
                  sx={{ mb: 2 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Soyadınız"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName : ''}
                  sx={{ mb: 2 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Adresiniz"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email : ''}
                  sx={{ mb: 2 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Şifreniz"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password : ''}
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: '#1976d2' }}
                >
                  Kayıt Ol
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grow>
      </Container>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
