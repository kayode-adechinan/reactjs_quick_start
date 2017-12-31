import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import axios from 'axios';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}


class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
                <JavascriptMixingComponent/>
                <Styled/>
                <PropDemo name="Bob"/>
                <StateDemo/>
                <EventDemo/>
                <ConditionalRenderingDemo content="Oregon"/>
                <DomDemo/>
                <ListDemo1/>
                <ApiDemo />
                <FormDemo/>
            </div>
        );
    }

}

class Header extends Component {

    render() {
        return (
            "Header"
        );
    }

}

class Body extends Component {
    render() {

        return (
            "body"
        );
    }
}

class JavascriptMixingComponent extends Component {

    render() {

        var i = 1;

        return (
            <h1>{i + 1}</h1>
        );
    }

}


class Styled extends Component {

    render() {

        var myStyle = {
            color: '#FF0000'
        }

        return (
            <div style={myStyle}> Some styled component </div>
        );
    }

}


class PropDemo extends Component {

    render() {
        return (<div>hello {this.props.name}</div>);
    }
}

class StateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }

    alterState() {
        this.setState({
            seconds: 1
        });
    }

    render() {
        return (<div onClick={this.alterState.bind(this)}> {this.state.seconds} </div>);
    }

}


class EventDemo extends Component {

    constructor(props) {
        super(props)
    }

    hello() {
        alert("boom");
    }

    say_something(name) {
        alert(name);
    }

    render() {
        return (<div>
            <button onClick={this.hello.bind(this)}> Call event</button>
            <button onClick={this.say_something.bind(this, "joe")}>Call event with param</button>
        </div>);
    }

}


class ConditionalRenderingDemo extends Component {


    render() {

        if (this.props.content == "Oregon") {
            return (<div>oregon component</div>);
        }
        return (<div>foo</div>);


    }

}


class Footer extends Component {

    render() {
        return (
            "Footer"
        );
    }

}


class DomDemo extends Component {

    dom_handler() {
        var my_dom = document.getElementById("love");
        ReactDOM.findDOMNode(my_dom).style.color = "green";
    }

    render() {
        return (<div>

            <div id="love"> my name is love</div>

            <button onClick={this.dom_handler.bind(this)}>Handle dom</button>

        </div>);
    }

}


class ListDemo1 extends Component {

    render() {

        var numbers = [1, 2, 3]

        var data_list = numbers.map((number) => <li key={number}>
            {number}
        </li>);

        return (<ul> {data_list} </ul>);
    }
}


class FormDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {

            name: ''

        }
    }


    handleNameInputChange(event) {

        this.setState({
            name: event.target.value.toUpperCase()
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.name);
    }

    render() {

        return (<form onSubmit={this.handleSubmit.bind(this)}>

                <p>Name</p>
                <input type="text" value={this.state.name} onChange={this.handleNameInputChange.bind(this)}/>
                <input type="submit" value="submit"/>


            </form>
        );

    }

}


class ApiDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount(){

      /*  fetch("https://jsonplaceholder.typicode.com/todos")
            .then(results => {return results.json(); console.log(results.json())})
            .then(data => {
                let todos = data.results.map((todo)=> {return (<div key={todo.id}> {todo.title} </div>)})
                this.setState({
                    todos: todos
                })
        })*/

      axios.get("https://jsonplaceholder.typicode.com/todos")
             .then(function(response){
                    console.log(response.data); // ex.: { user: 'Your User'}
                    console.log(response.status); // ex.: 200
        });


    }

    render(){
        return (<div>
            ola
            {this.state.todos}
        </div>);
    }
}


export default Main;

/*export default App;*/
