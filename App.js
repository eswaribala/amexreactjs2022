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
        super(props, context);
        this.state={
            currentTime:new Date() //initial value
        }
    }

    render() {
        return (
            <div>
            <Header/>
                <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
            </div>
        );

    }
}

