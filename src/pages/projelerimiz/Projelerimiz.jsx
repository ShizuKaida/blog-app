import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system'; // Yeni eklenen import
import { motion } from 'framer-motion'; // Framer Motion importu eklenmiş

const StyledLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
});

// Framer Motion ile stil uygulanan kart bileşeni
const StyledCard = styled(motion.div)({
  height: '100%',
  transform: 'scale(1)', // İlk başta normal boyutta
  transition: 'transform 0.3s ease-in-out', // Geçiş efekti
});

const Projects = () => {
  const projects = [
    {
      title: 'Gamer Arena Uygulaması',
      description:
        "Yenilikçi bir oyun deneyimi seni bekliyor! Gamer Arena'da en sevdiğin oyunları oyna, turnuvalarda yarış, oyun oynayarak kazandığın GAU'larla para kazan!.",
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b1/68/70/b1687070-0de9-28be-0658-0be541826c06/AppIcon-0-0-1x_U007emarketing-0-5-0-0-85-220.png/1200x630wa.png',
      link: 'https://apps.apple.com/tr/app/gamer-arena-play-compete-earn/id1641530825',
    },
    {
      title: 'GAU Arena. WEB3 Uygulaması',
      description:
        "GAU Tokenlarını Kazanın ve Kullanın: GAU Arena'da GAU TOKEN kazabilirsiniz. Daha fazla oyun seçeneği ve ayrıcalıklı özellikler için uygulamayı deneyin.",
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/08/13/f6/0813f6ca-2778-279b-744e-88993c7c3a15/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png',
      link: 'https://apps.apple.com/tr/app/gau-arena/id6476374027',
    },
    // Diğer projeler buraya eklenebilir
  ];

  return (
    <Box
      sx={{
        py: 4,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64cfd57c347c14534e2dc618_%20-%201.png')`, // Arka plan resmi ve geçirgenlik
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)', // İhtiyaca göre ayarlanabilir
        paddingTop: '1px', // İçerik üst barın altından başlamasını sağlar
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: -50, opacity: 0 }} // Başlangıç animasyonu
          animate={{ y: 0, opacity: 1 }} // Görünür hale gelme animasyonu
          transition={{ duration: 0.5, delay: 0.2 }} // Gecikme ve süre ayarı
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Projelerimiz
          </Typography>
        </motion.div>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <StyledLink href={project.link} target="_blank" rel="noopener noreferrer">
                <StyledCard
                  initial={{ opacity: 0, y: 50 }} // Başlangıç animasyonu
                  animate={{ opacity: 1, y: 0 }} // Görünür hale gelme animasyonu
                  whileHover={{ scale: 1.05 }} // Hover animasyonu
                  transition={{ duration: 0.05 }} // Geçiş süresi
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      style={{ height: 300, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="justify">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </StyledCard>
              </StyledLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
