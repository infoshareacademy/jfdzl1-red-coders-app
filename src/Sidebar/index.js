import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class Sidebar extends Component {

    state = {
        name: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }


    render() {
        return (
            <Grid item xs={12}>
              Test sidebar
              <Divider />
              Write the name a new attraction...
              <TextField
                  id="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
              />
            </Grid>
        );
    }
}

export default Sidebar;
