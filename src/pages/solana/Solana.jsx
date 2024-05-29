import React, { useEffect } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Solana = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Optional: Add a delay for staggered animations
  const delay = 200; // milliseconds

  useEffect(() => {
    // Optionally trigger animations on mount
  }, []);

  return (
    <animated.div style={fadeIn}>
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
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '10px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
              Solana WEB3.0 Game Jam'de Derece!
            </Typography>
            <animated.img
              src="https://media.licdn.com/dms/image/D4D22AQFgizOYG3yVqQ/feedshare-shrink_2048_1536/0/1690733226847?e=1719446400&v=beta&t=4unfFUDpS_4LSwxVCofkkNq2do0t7Q2O6jmfbUs50Qo"
              alt="Haber Görseli"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
              }}
            />
            <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 2 }}>
              Haber Açıklaması
            </Typography>
            <Typography variant="body1" paragraph align="justify">
              Solana Speedrun Game Jam'de harika bir deneyim yaşadık! Ekibimiz, 'Chase to Cheese' adlı oyunlarıyla Türkiye'de #1 sırayı elde etmekle kalmadı, aynı zamanda küresel sahnede de #3'e kadar yükseldi. Ekibimizin performansı gerçekten olağanüstüydü. Bu başarıda emeği geçen herkese teşekkür ederim. Mentorluklarıyla bize rehberlik eden Barış Saban'a, Kerem Büker'e ve Beyazıt Karınca'ya müteşekkirim. Topluluğumuzun desteğiyle daha nice oyunlar, inovasyonlar ve zaferler yaşamak dileğiyle!
            </Typography>
          </Paper>
        </Container>
      </Box>
    </animated.div>
  );
};

export default Solana;
