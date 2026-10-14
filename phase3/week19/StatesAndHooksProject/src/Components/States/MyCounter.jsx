import { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';
class MyCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
allClicksCounter = () => {
    this.setState((previousState) =>({
        count: previousState.count + 1
    }));
};

    render() {
        return (
            <>
               <button onClick={this.allClicksCounter}> Click me</button>
               {/* <p> Clicks {this.state.count}</p> */}
               <CounterDisplayer count = {this.state.count} />
               <EvenCounterDisplayer count = {this.state.count} />
            </>
        );
    }
}

export default MyCounter;
