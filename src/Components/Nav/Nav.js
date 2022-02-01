import {Component} from "react";
import Rate from "../Rate/Rate";
import Calc from "../Calc/Calc";


class Nav extends Component{
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <>

                <div className="container">
                    <main>

                        <Rate/>

                    </main>
                </div>

            </>
        );
    }
}


export default Nav;
