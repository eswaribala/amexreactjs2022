import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from "react";
import {Routes} from "react-router";
import LandingPage from "./components/Organisms/landingPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {UserHomePage} from "./components/Organisms/userHomePage";
import RegistrationPage from "./components/Organisms/registrationPage";
import {AdminHomePage} from "./components/Organisms/adminHomePage";



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
       const loggedIn=window.sessionStorage.getItem("loggedIn");

        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage pick={this.state.currentTime}/>}/>
                    <Route path="/register" element={<RegistrationPage pick={this.state.currentTime}/>}/>
                    <Route path="/adminhome" element={<AdminHomePage pick={this.state.currentTime}/>}/>
                    <Route path="/userhome" element={<UserHomePage pick={this.state.currentTime}/>}/>
{/*
                    {loggedIn=="true"? (
                        <>
                            <Route path="/adminhome" element={<AdminHomePage pick={this.state.currentTime}/>}/>
                            <Route path="/userhome" element={<UserHomePage pick={this.state.currentTime}/>}/>
                        </>
                    ) : (
                        <Route exact path="/" element={<LandingPage pick={this.state.currentTime}/>}/>
                    )}*/}

                </Routes>
            </Router>
        );

    }
}


