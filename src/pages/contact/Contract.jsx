import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Box, Typography, Paper, Grow, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
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
    tempErrors.name = formData.name ? '' : 'Adınız gereklidir';
    tempErrors.email = formData.email ? '' : 'Email adresiniz gereklidir';
    if (formData.email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(formData.email)) {
        tempErrors.email = 'Geçerli bir email adresi giriniz';
      }
    }
    tempErrors.message = formData.message ? '' : 'Mesajınız gereklidir';
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3000/users/contact', formData);
        setSnackbar({ open: true, message: 'Form başarıyla gönderildi.', severity: 'success' });
        setTimeout(() => {
          navigate('/');
        }, 2000); // 2 saniye bekleyip yönlendir
      } catch (error) {
        console.error('Form submission error:', error);
        setSnackbar({ open: true, message: 'Form gönderiminde bir hata oluştu.', severity: 'error' });
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Snackbar'ı sol alt köşeye taşır
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
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
            <Paper elevation={3} sx={{ padding: 4, marginTop: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5" gutterBottom>
                  Bize Ulaş
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Adınız"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name : ''}
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
                    name="message"
                    label="Mesajınız"
                    id="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message : ''}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: '#1976d2' }}
                  >
                    Gönder
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grow>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
