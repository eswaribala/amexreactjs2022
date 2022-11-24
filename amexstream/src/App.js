import logo from './logo.svg';
import './App.css';
import React, {Component, useEffect, useState} from "react";
import {Routes} from "react-router";
import LandingPage from "./components/Organisms/landingPage";
import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import {UserHomePage} from "./components/Organisms/userHomePage";
import RegistrationPage from "./components/Organisms/registrationPage";
import {AdminHomePage} from "./components/Organisms/adminHomePage";
import {VideoUpload} from "./components/Molecules/videoupload";
import {VideoDownload} from "./components/Molecules/videodownload";
import {UserMenu} from "./components/Molecules/userMenu";
import Header from "./components/Molecules/header";
import ProtectedRoute from "./components/Organisms/ProtectedRoute";
import {AdminMenu} from "./components/Molecules/adminMenu";
import ChannelCreate from "./components/Molecules/channelcreate";
import store from "./redux/store";
import {Provider} from "react-redux";
import {ChannelsContainer} from "./components/Molecules/channelContainer";



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
        const LoggedIn=window.localStorage.getItem("loggedIn");
        const userLoggedIn=window.localStorage.getItem("userLoggedIn");
        const adminLoggedIn=window.localStorage.getItem("adminLoggedIn")
        return (
            <Provider store={store}>
            <Router>

                <div>
                    {

                        LoggedIn==="true" && userLoggedIn === "true"? (
                            <div>
                                <Header pick={this.state.currentTime}/>
                                <div className="videoStyle">
                                <UserMenu />
                                </div>
                            </div>

                        ):""}
                </div>
                <div>
                    {

                        LoggedIn==="true" && adminLoggedIn==="true"? (
                            <div>
                                <Header pick={this.state.currentTime}/>
                                <div className="videoStyle">
                                    <AdminMenu />
                                </div>
                            </div>

                        ):""}
                </div>
                {

                    <Routes>
                    <Route exact path="/" element={<LandingPage pick={this.state.currentTime}/>}/>
                    <Route exact path="/register" element={<RegistrationPage pick={this.state.currentTime}/>}/>
                    <Route exact path="/adminhome" element= {<ProtectedRoute><AdminHomePage  pick={this.state.currentTime}/></ProtectedRoute>}/>
                        <Route exact path="/userhome" element={<ProtectedRoute><UserHomePage pick={this.state.currentTime}/></ProtectedRoute>}/>
                        <Route exact path="/videoupload" element={<ProtectedRoute><VideoUpload/></ProtectedRoute>}/>
                       <Route exact path="/videodownload" element={<ProtectedRoute><VideoDownload/></ProtectedRoute>}/>
                        <Route exact path="/channelcreate" element={<ProtectedRoute><ChannelCreate/></ProtectedRoute>}/>
                        <Route exact path="/channelview" element={<ProtectedRoute><ChannelsContainer/></ProtectedRoute>}/>
                </Routes>

                }
            </Router>
            </Provider>
        );

    }
}


