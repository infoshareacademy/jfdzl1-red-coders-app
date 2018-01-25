import React from 'react';
import logoSrc from '../../assets/logo_yawn_killer_white.png';

const styles = {
  logoWrapper: {
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  logoImg: {
    width: '150px'
  }
};

const Logo = (props) => (
  <div className="logo_wrapper" style={styles.logoWrapper}>
    <img style={styles.logoImg} src={logoSrc} alt="Logo"/>
  </div>
);

export default Logo;
