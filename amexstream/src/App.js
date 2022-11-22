import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from "react";
import Logo from "./components/Atoms/logo";
import Banner from "./components/Atoms/banner";
import LandingPage from "./components/Organisms/landingPage";


//functional approach
/*
var tick=()=>{
    //updating the state
    this.setState({
        currentTime:new Date()
    })}

export function App() {

    // For storing the intervalID when we create it
    const [currentTime, setCurrentTime] = useState(new Date());

// For starting the interval ->
    useEffect(() => {
        let interval = setInterval(tick, 1000);
        setCurrentTime(interval);
        setCurrentTime(props);

    }, [props]);

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
            <LandingPage pick={this.state.currentTime}/>
            </div>
        );

    }
}


