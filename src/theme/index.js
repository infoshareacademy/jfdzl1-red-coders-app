const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Roboto, sans-serif',
      justifyContent: 'center',
  },
  items: {
    direction: 'row',
    justify: 'center',
    alignItems: 'center'
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    background: '#E13239',
    color: '#fff',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

export default styles;
