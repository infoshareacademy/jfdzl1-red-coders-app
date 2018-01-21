import React, {Component} from 'react';
import Chart from './PieChart'
import Chart2 from "./ComposedChart";
import Grid from 'material-ui/Grid'

class Stats extends Component {
    state = {
        display: 'flex',
        direction: 'row',
        justify: 'center',
        alignItems: 'flex-end',
    };

    render() {
        const {classes} = this.props;
        const {alignItems, direction, justify} = this.state;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Grid container
                              alignItems={alignItems}
                              direction={direction}
                              justify={justify}>
                            <Grid item xs={4}>
                                <h1>Visitors</h1>
                                <Chart/>
                            </Grid>
                            <Grid item xs={4}>
                                <h2>List of Attractions</h2>
                                <Chart2/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default Stats;