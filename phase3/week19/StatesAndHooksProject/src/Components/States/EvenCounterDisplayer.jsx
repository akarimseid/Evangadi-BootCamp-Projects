import  { Component } from 'react';
//question number 2
class EvenCounterDisplayer extends Component {

    constructor(props){
        super(props);

        this.state = {
            evenCount: 0
        };
    }

    componentDidUpdate(previousProps){
        if(previousProps.count !== this.props.count && this.props.count % 2 === 0){
           this.setState({
            evenCount: this.props.count
           });
        }
    }
    render() {
        return (
            <>
                <p>Clicked {this.state.evenCount} times (Even clicks)</p>
            </>
        );
    }
}

export default EvenCounterDisplayer;
