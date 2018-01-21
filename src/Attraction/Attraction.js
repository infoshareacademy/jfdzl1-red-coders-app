import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { getAttraction } from './state'

const mapStateToProps = state => ({
    attraction: state.attraction.data
});

const mapDispatchToProps = dispatch => ({
    getAttraction: (id) => dispatch(getAttraction(id))

});

class Attraction extends Component {

    componentWillMount() {
        const id = this.props.match.params.attractionId;
        this.props.getAttraction(id)
    }

    render() {
        const {attraction} = this.props;

        return(
            <div>
                <h1>
                    {attraction.name}
                </h1>
                <p>
                    {attraction.description}
                </p>
                <a href={attraction.link}>Go to attraction home page</a>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Attraction);