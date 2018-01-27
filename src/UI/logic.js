const UI_SHOW_NOTIFICATION = 'ui/SHOW_NOTIFICATION';
const UI_HIDE_NOTIFICATION = 'ui/HIDE_NOTIFICATION';
const UI_TOGGLE_SIDEBAR = 'ui/UI_TOGGLE_SIDEBAR';
const UI_SHOW_SIGNIN_MODAL = 'ui/UI_SHOW_SIGNIN_MODAL';
const UI_HIDE_SIGNIN_MODAL = 'ui/UI_HIDE_SIGNIN_MODAL';
const UI_SHOW_ADD_ATTRACTION = 'ui/UI_SHOW_ADD_ATTRACTION';
const UI_HIDE_ADD_ATTRACTION = 'ui/UI_HIDE_ADD_ATTRACTION';

export const showNotification = (message) => ({
  type: UI_SHOW_NOTIFICATION,
  message
});

export const hideNotification = () => ({
  type: UI_HIDE_NOTIFICATION
});

export const toggleSidebar = () => ({
  type: UI_TOGGLE_SIDEBAR
});

export const showSignInModal = () => ({
  type: UI_SHOW_SIGNIN_MODAL
});

export const hideSignInModal = () => ({
  type: UI_HIDE_SIGNIN_MODAL
});

export const showAddAttraction = () => ({
  type: UI_SHOW_ADD_ATTRACTION
})

export const hideAddAttraction = () => ({
  type: UI_HIDE_ADD_ATTRACTION
})

const INITIAL_STATE = {
  notifications: {
    open: false,
    message: ''
  },
  sidebar: {
    open: false
  },
  signInModal: {
    open: false
  },
  addAttraction: {
    open: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UI_SHOW_NOTIFICATION:
      return {
        ...state,
        notifications: {
          open: true,
          message: action.message
        }
      };
    case UI_HIDE_NOTIFICATION:
      return {
        ...state,
        notifications: {
          open: false,
          message: ''
        }
      }
    case UI_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          open: !state.sidebar.open
        }
      }
      case UI_SHOW_SIGNIN_MODAL:
      return {
        ...state,
        signInModal: {
          open: true
        }
        
      }
      case UI_HIDE_SIGNIN_MODAL:
      return {
        ...state,
        signInModal: {
          open: false
        }
      }
      case UI_SHOW_ADD_ATTRACTION:
      return {
        ...state,
        addAttraction: {
          open: true
        }
      }
      case UI_HIDE_ADD_ATTRACTION:
      return {
        ...state,
        addAttraction: {
          open: false
        }
      }
    default:
      return state;
  }
}
