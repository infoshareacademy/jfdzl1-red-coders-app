import React, {Component} from 'react'
import {Pie, PieChart, Tooltip} from 'recharts';
import {Grid} from 'material-ui';



const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
    {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

class ChartUsers extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <PieChart width={800} height={400}>
                        <Pie startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                    </PieChart>
                    <Tooltip/>
                </Grid>
            </div>
        );
    }
}


export default ChartUsers