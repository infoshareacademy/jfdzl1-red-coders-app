import React from 'react';
import logoSrc from '../../assets/logo_yawn_killer.png';

const styles = {
  logoWrapper: {
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  logoImg: {
    width: '200px'
  }
};

const Logo = (props) => (
  <div className="logo_wrapper" style={styles.logoWrapper}>
    <img style={styles.logoImg} src={logoSrc} alt="Logo"/>
  </div>
);

export default Logo;
