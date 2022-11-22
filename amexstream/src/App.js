import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from "react";
import {Routes} from "react-router";
import LandingPage from "./components/Organisms/landingPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {HomePage} from "./components/Organisms/homePage";
import {RegistrationForm} from "./components/Molecules/registrationForm";


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



    componentDidMount() {

        setInterval(this.tick,1000)
    }

    render() {

        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route path="/register" element={<RegistrationForm/>}/>

                    <Route path="/home" element={<HomePage/>}/>


                </Routes>
            </Router>
        );

    }
}


