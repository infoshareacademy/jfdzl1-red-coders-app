import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import AccountForm from './AccountForm';
import { connect } from 'react-redux';
import { hideSignInModal } from '../UI/logic';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    width: 8 * 50,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

class SignInDialog extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.hideDialog}
        >
          <div style={getModalStyle()}>
            <AccountForm />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.ui.signInModal.open
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    hideDialog:  () => dispatch(hideSignInModal())
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInDialog);