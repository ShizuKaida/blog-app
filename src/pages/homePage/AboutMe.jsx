import React from 'react';
import { Container, Box, Typography, Avatar, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSpring, animated } from '@react-spring/web';

const AboutMe = () => {
  const avatarAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
  });

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, delay: 500 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000, delay: 800 },
  });

  const subtitleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000, delay: 300 },
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64cfd57c347c14534e2dc618_%20-%201.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)',
        paddingTop: '1px',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <animated.div style={titleAnimation}>
            <Typography variant="h3" component="h1" gutterBottom>
              Hakkımda
            </Typography>
          </animated.div>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <animated.div style={avatarAnimation}>
                <Avatar
                  alt="Profil Resmi"
                  src="https://media.licdn.com/dms/image/D4D03AQGSS9c4XHc2lg/profile-displayphoto-shrink_800_800/0/1710296140278?e=1721865600&v=beta&t=ITnkNXi0V1ynFmL2-aYoQbf7l-XgwURTAskELK1tf-U"
                  sx={{ width: 250, height: 250, transition: 'transform 0.3s ease-in-out' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </animated.div>
              <animated.div style={subtitleAnimation}>
                <Typography variant="subtitle1" sx={{ mt: 2, textAlign: 'center' }}>
                  Junior Back-End Developer at Gamer Arena
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12} md={9}>
              <animated.div style={cardAnimation}>
                <Box
                  sx={{
                    marginLeft: { xs: 0, md: 5 },
                    marginTop: { xs: 2, md: 0 },
                    border: '2px solid #1976d2',
                    borderRadius: '10px',
                    padding: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <animated.div style={textAnimation}>
                    <Typography variant="h5" gutterBottom>
                      Berkay Albayrak
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Yazılım Geliştirici
                    </Typography>
                    <Typography variant="body1">
                      Merhaba, ben Berkay. Yazılım geliştirme konusunda deneyimli biriyim ve bu alanda birçok projede yer aldım.
                      Teknolojiye olan tutkum beni her zaman yeni şeyler öğrenmeye yönlendiriyor. Ayrıca açık kaynak projelere
                      katkıda bulunmaktan ve topluluk etkinliklerine katılmaktan keyif alıyorum.
                    </Typography>
                  </animated.div>
                  <Box sx={{ mt: 2 }}>
                    <animated.div style={textAnimation}>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        Benimle bağlantı kurmak için:
                      </Typography>
                    </animated.div>
                    <animated.div style={buttonAnimation}>
                      <Button 
                        href="https://www.linkedin.com/in/berkay-albayrak-8731a9278/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variant="contained" 
                        size="medium" 
                        style={{ marginRight: '10px', transition: '0.3s', borderRadius: '25px' }}
                      >
                        <LinkedInIcon sx={{ marginRight: 1 }} fontSize="large" /> LinkedIn
                      </Button>{" "}
                      <Button 
                        href="https://github.com/ShizuKaida" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variant="contained" 
                        size="medium" 
                        style={{ marginRight: '10px', transition: '0.3s', borderRadius: '25px' }}
                      >
                        <GitHubIcon sx={{ marginRight: 1 }} fontSize="large" /> GitHub
                      </Button>{" "}
                      <Button 
                        href="https://twitter.com/mongos12345" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variant="contained" 
                        size="medium" 
                        style={{ transition: '0.3s', borderRadius: '25px' }}
                      >
                        <TwitterIcon sx={{ marginRight: 1 }} fontSize="large" /> Twitter
                      </Button>
                    </animated.div>
                  </Box>
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
