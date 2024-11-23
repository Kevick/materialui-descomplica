import * as React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'Sobre', href: '#' },
      { name: 'Carreiras', href: '#' },
      { name: 'Contato', href: '#' }
    ],
    support: [
      { name: 'Ajuda', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Política de Privacidade', href: '#' }
    ]
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 8, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Nossa Empresa
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.company.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href={link.href}
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': { color: 'secondary.main' }
                    }}
                  >
                    {link.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Suporte
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.support.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Typography
                    component="a"
                    href={link.href}
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': { color: 'secondary.main' }
                    }}
                  >
                    {link.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Social Media & Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Conecte-se
            </Typography>
            <Box sx={{ mb: 3 }}>
              <IconButton color="inherit" href="#" aria-label="Facebook">
                <Facebook size={24} />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Twitter">
                <Twitter size={24} />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Instagram">
                <Instagram size={24} />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </IconButton>
            </Box>

            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Seu e-mail"
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ minWidth: 'auto', px: 2 }}
              >
                <Mail size={20} />
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {currentYear} Sua Empresa. Todos os direitos reservados.
          </Typography>
          <Box>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': { color: 'secondary.main' }
              }}
            >
              Termos de Uso
            </Typography>
            <Typography variant="body2" component="span" sx={{ mx: 2 }}>
              |
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': { color: 'secondary.main' }
              }}
            >
              Política de Privacidade
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;