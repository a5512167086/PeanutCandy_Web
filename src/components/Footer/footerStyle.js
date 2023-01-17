const titleLinkStyle = {
  box: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    mr: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'white',
    textDecoration: 'none',
  },
};

const navLinkStyle = {
  box: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    fontSize: {
      lg: '20px',
      md: '15px',
    },
    fontFamily: 'monospace',
    marginX: '15px',
    color: 'white',
    textDecoration: 'none',
  },
};

const mobileNavLinkStyle = {
  box: { justifyContent: 'center', marginY: '10px' },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
};

export { titleLinkStyle, navLinkStyle, mobileNavLinkStyle };
