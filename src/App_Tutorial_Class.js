import React from 'react';

class AppTutorialClass extends React.Component {
    state = {
        count: 0,
    };

    add = () => {
        // this.setState({ count: this.state.count + 1 });
        this.setState(current => ({
            count: current.count + 1,
        }));
    }

    minus = () => {
        this.setState(current => ({
            count: current.count - 1,
        }));
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>number : {this.state.count}</h3>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('component rendered (componentDidMount)');
    }

    componentDidUpdate() {
        console.log('just updated (componentDidUpdate)');
    }

    componentWillUnmount() {
        console.log('will unmonut');
    }
}

export default AppTutorialClass;