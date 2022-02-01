import {Component} from "react";
import {Link} from "react-router-dom";


class Header extends Component{
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <div className="App">
                <header>
                    <div className="top-bar animate-dropdown"></div>
                    <div className="main-header">
                        <div className="container">
                            <h1 className="site-title">React</h1>


                        </div>
                    </div>
                    <div className="header-nav">
                        <div className="container">
                            <nav>
                                <ul>
                                    <Link to="/"><li><a>Главная</a></li></Link>

                                   {/* <li><a href="#">Пункты обмена</a></li>*/}
                                    <Link to="/about"> <li><a>Контакты</a></li></Link>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>




            </div>
        );
    }
}


export default Header;
