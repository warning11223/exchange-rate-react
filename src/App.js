import {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0,
        };
    }




    render() {
        return (
            <div className="App">

                <Router>
                    <Header/>
                    <Routes>

                        <Route exact path="/" element={<Nav/>} />
                        <Route exact path="/about" element={<About/>} />

                    </Routes>
                </Router>


                <Footer/>
            </div>
        );
    }
}


export default App;
