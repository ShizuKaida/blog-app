import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const successMessage = localStorage.getItem('successMessage');
    const openSuccess = localStorage.getItem('openSuccess');
    if (successMessage && openSuccess === 'true') {
      setSnackbarMessage(successMessage);
      setOpenSnackbar(true);
      localStorage.removeItem('successMessage');
      localStorage.removeItem('openSuccess');
    }
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = () => {
    console.log('Kart tıklandı!');
    // İşlev içine buraya eklemek istediğiniz kodu ekleyebilirsiniz.
    // Örneğin, başka bir sayfaya yönlendirme.
    // window.location.href = '/detay'; // Örnek bir yönlendirme
  };

  const handleReadMoreClick = (title) => {
    switch (title) {
      case "Solana WEB.3 Game Jam":
        console.log(`"Solana WEB.3 Game Jam" makalesi için Devamını Oku butonuna tıklandı.`);
        navigate('/solana');
        break;
      case "BlockChain Week":
        console.log(`"BlockChain Week" makalesi için Devamını Oku butonuna tıklandı.`);
        navigate('/blockchain');
        break;
      case "Gamex":
        console.log(`"Gamex" makalesi için Devamını Oku butonuna tıklandı.`);
        navigate('/gameiks');
        break;
      // Diğer kart başlıklarına göre case'ler ekleyebilirsiniz.
      default:
        console.log(`Bilinmeyen makale için Devamını Oku butonuna tıklandı.`);
        break;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64cfd57c347c14534e2dc618_%20-%201.png')`, // Arkaplan resmi ve şeffaflık
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)', // İhtiyaca göre ayarlayın
        paddingTop: '1px', // İçeriğin üst çubuktan sonra başlamasını sağlayın
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 4,
            textAlign: 'center',
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Sizi Neler Bekliyor?
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Yolculuğa Hemen Başla
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Yolculuğa Hemen Başla
            </Button>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {[{
            title: "Solana WEB.3 Game Jam",
            description: "Solana WEB.3 Game Jam Etkinliğinde 3.'lük Derecesi",
            image: "https://media.licdn.com/dms/image/D4D22AQFgizOYG3yVqQ/feedshare-shrink_2048_1536/0/1690733226847?e=1719446400&v=beta&t=4unfFUDpS_4LSwxVCofkkNq2do0t7Q2O6jmfbUs50Qo"
          }, {
            title: "BlockChain Week",
            description: "Ekibimizle Beraber Istanbul Blockchain Week Etkinliğine Davet Edildik",
            image: "https://media.licdn.com/dms/image/D4D22AQHA9wDc-mya4w/feedshare-shrink_2048_1536/0/1692866677354?e=1719446400&v=beta&t=TUL25tB1GxfKTNf6agsR1lmF-zT6-90P-fpD5E_wlpw"
          }, {
            title: "Gamex",
            description: "Gamex Etkinliğinde Kullanıcılarımızla Bir Araya Geldik",
            image: "https://media.licdn.com/dms/image/D4D22AQFvfGsA0hmGEw/feedshare-shrink_1280/0/1693998968424?e=1719446400&v=beta&t=DrHrmciPofM8lZ0kK1E08QVCHHaxNQgw_4FZNe7s_4E"
          }].map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: index * 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: hoveredCard === index ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleCardClick}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{ height: 345 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleReadMoreClick(card.title)}>Devamını Oku</Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Home;
