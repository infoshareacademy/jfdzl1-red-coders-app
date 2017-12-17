import React, {Component} from 'react';
import {ResponsiveContainer, PieChart, Pie} from 'recharts';
import {database} from 'firebase';

class Stats extends Component {

    render() {
        return (
            <div>
                <ResponsiveContainer width={700} height="80%">
                <PieChart/>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Stats;