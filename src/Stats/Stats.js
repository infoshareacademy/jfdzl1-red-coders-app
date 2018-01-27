import React, {Component} from 'react';
import ChartUsers from './PieChart';
import ChartAttr from './ComposedChart';
import StartupChart from './AreaChart';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {Paper} from 'material-ui'


const styles = {
        direction: 'row',
        justify: 'space-around',
        alignItems: 'center',
        marginLeft: 10
};

const Stats = (props) => (

    <Paper style={styles.margin}>
                    <Grid item xs={12}>
                    <Grid container
                          alignItems={styles.alignItems}
                          direction={styles.direction}
                          justify={styles.justify}>
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
                                <StartupChart/>
                            </Grid>
                        </Grid>
                    </Grid>
    </Paper>
);


Stats.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Stats