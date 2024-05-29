import React, { useEffect } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Blockchain = () => {
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
            Istanbul Blockchain Week Etkinliğine Davet Edildik!
            </Typography>
            <animated.img
              src="https://media.licdn.com/dms/image/D4D22AQHA9wDc-mya4w/feedshare-shrink_2048_1536/0/1692866677354?e=1719446400&v=beta&t=TUL25tB1GxfKTNf6agsR1lmF-zT6-90P-fpD5E_wlpw"
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
            Harika haberlerim var! Geçtiğimiz günlerde Kerem Büker ve Kerim Yılmaz ile İstanbul Blockchain Week'e katıldık.
             🌍💎 Bu büyük etkinlik, blockchain dünyasındaki son gelişmeleri keşfetmemizi sağladı. Etkinlik boyunca ilham verici insanlarla tanıştım ve gelecekteki işbirlikleri için kapılar açtım. Katılımımı destekleyen herkese teşekkür ederim. Gelecekteki etkinliklerde de bir araya gelmek dileğiyle!🚀🤝 
            </Typography>

            <animated.img
              src="https://media.licdn.com/dms/image/D4D22AQHim-zBpK9Rbw/feedshare-shrink_1280/0/1692866676991?e=1719446400&v=beta&t=BJU3pQ0EgC0TTYVsRiOz89IO5Gc_JXfUxoNJqB4C6s4"
              alt="Haber Görseli"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
              }}
            />
          </Paper>
        </Container>
      </Box>
    </animated.div>
  );
};

export default Blockchain;
