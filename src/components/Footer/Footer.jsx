import React from 'react';
import {
  Button, Container, Grid, Typography,
} from '@mui/material';
import { SOCIAL_LINKS } from '@/config/config';
import { footerTitleStyle, socialLinkStyle } from './footerStyle';

function Footer() {
  return (
    <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#ff8f49' }}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={footerTitleStyle.box} justifyContent="center" alignItems="center">
          <Typography variant="h6" noWrap color="white" sx={footerTitleStyle.text}>
            © 2023 - 阿美姐手工花生糖
          </Typography>
        </Grid>
        {SOCIAL_LINKS.map((social) => (
          <Grid
            item
            key={social.name}
            xs={4}
            sm={2}
            sx={{ ...socialLinkStyle.box, backgroundColor: social.color }}
            justifyContent="center"
            alignItems="center"
          >
            <Button fullWidth variant="h6" sx={socialLinkStyle.text}>
              {social.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Footer;
