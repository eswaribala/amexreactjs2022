import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Logo from "./components/Atoms/logo";
import Banner from "./components/Atoms/banner";
import Header from "./components/Molecules/header";

//functional approach
/*
export function App() {
    return (
        <Header/>
    );
}
*/

//export default App;

//object oriented approach (oldest)

export class App extends Component{

    constructor(props, context) {
        console.log("Constructor.....")
        super(props, context);
        this.state={
            currentTime:new Date() //initial value
        }
    }

    tick=()=>{
        //updating the state
        this.setState({
            currentTime:new Date()
        })

    }


    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount")
        setInterval(this.tick,1000)
    }

    render() {
        console.log("Component will render")
        return (
            <div>
            <Header/>
                <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
            </div>
        );

    }
}

