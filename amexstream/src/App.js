import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Logo from "./components/Atoms/logo";
/*
export function App() {
  return (
    <div className="App-header">
      <h1>Video Streaming</h1>
    </div>
  );
}
*/
//export default App;

export class App extends Component{

    render() {
        return (
            <div className="App-header">

                <Logo/>
                    <h1 className="multicolortext">Video Streaming</h1>
                <Logo/>
            </div>
        );

    }
}
