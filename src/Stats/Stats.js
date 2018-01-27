import React, {Component} from 'react';
import ChartUsers from './PieChart'
import ChartAttr from './ComposedChart'
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class Stats extends Component {
    state = {
        direction: 'row',
        justify: 'space-around',
        alignItems: 'center',
    };

    render() {
        const {classes} = this.props;
        const {alignItems, direction, justify} = this.state;

        return (
            <div>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                    <Grid container
                          alignItems={alignItems}
                          direction={direction}
                          justify={justify}>
                            <Grid item xs={4}>
                                <h1>Visitors</h1>
                                <ChartUsers/>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>List of Attractions</h1>
                                <ChartAttr/>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>Our Startups</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Stats.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stats)