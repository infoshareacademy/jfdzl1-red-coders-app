import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import AddAttr from './AddAttr';
import { connect } from 'react-redux';
import { hideAddAttraction } from '../UI/logic';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    width: 6 * 50,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

class AddAttractionDialog extends Component {
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
            <AddAttr />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.ui.addAttraction.open
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    hideDialog:  () => dispatch(hideAddAttraction())
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAttractionDialog);