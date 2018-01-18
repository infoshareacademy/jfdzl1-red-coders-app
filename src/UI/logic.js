const UI_SHOW_NOTIFICATION = 'ui/SHOW_NOTIFICATION';
const UI_HIDE_NOTIFICATION = 'ui/HIDE_NOTIFICATION';
const UI_TOGGLE_SIDEBAR = 'ui/UI_TOGGLE_SIDEBAR';

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

const INITIAL_STATE = {
  notifications: {
    open: false,
    message: ''
  },
  sidebar: {
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
      return INITIAL_STATE;
    case UI_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          open: !state.sidebar.open
        }
      }
    default:
      return state;
  }
}
