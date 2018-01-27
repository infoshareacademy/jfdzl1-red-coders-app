import React from 'react';
import logoSrc from '../../assets/logo_redcoders.png';

const styles = {
  logoWrapper: {
    paddingBottom: '15px',
    opacity: '0.5'
  },
  logoImg: {
    width: '65px'
  },
  developedBy: {
    color: '#ffffff',
    fontFamily: 'Roboto, sans-serif',
    paddingLeft: '15px',
    paddingRight: '5px',
    lineHeight: '14px',
    fontSize: '10px',
    fontWeight: '300',
    verticalAlign: 'top'
  }
};

const Logo = (props) => (
  <div className="logo_wrapper" style={styles.logoWrapper}>
    <span style={styles.developedBy}>Application developed by</span>
    <img style={styles.logoImg} src={logoSrc} alt="Redcoders"/>
  </div>
);

export default Logo;
