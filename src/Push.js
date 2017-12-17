import React, { Component } from 'react';
import { database } from "./firebase";

class Push extends Component {
    state = {
        pushList: null,
        categoryList: null
    }

    clickHandle = () => {
        database.ref('/category')
            .push({
                name: 'Widowisko',
                active: true
            });


    };

    componentDidMount() {
        database.ref('/attractions')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        pushList: snapshot.val()
                    })
                }
            );
        database.ref('/category')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        categoryList: snapshot.val()
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <h3>
                    Push
                </h3>
                <button onClick={this.clickHandle}>Dodaj atrakcję</button>
                <ul>
                    {
                        this.state.pushList
                        &&
                        Object.entries(this.state.pushList)
                            .map(([key, value]) => {
                                return (
                                    <li key={key}>
                                        {value.name + ' ' + value.description}
                                    </li>
                                )})

                    }
                </ul>
            </div>
        )
    }
}

export default Push;