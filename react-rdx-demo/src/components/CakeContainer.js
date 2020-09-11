import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Cakes container</h2>
    <h1> Total Cakes - {props.numOfCakes}</h1>
            <button onClick={() => props.buyCake()}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps= state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
