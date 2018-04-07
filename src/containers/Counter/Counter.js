import React, {Component} from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css'
import * as actionCreators from '../../store/actions/index'

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.pushedCounter}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.pushedCounter)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        pushedCounter: state.ctr.counter,
        storedResults: state.res.results,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment(1)),
        onDecrementCounter: () => dispatch(actionCreators.decrement(1)),
        onAddCounter: () => dispatch(actionCreators.add(15)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);