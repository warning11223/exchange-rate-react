import {Component} from "react";


class Calc extends Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            rate: props.rate,
        }
    }

    calcRate = (event) => {
        event.preventDefault();
        let elements = event.target.elements;
        const countCurrency = elements['count-currency'].value;
        const typeCurrency = elements['type-currency'].value;
        this.setState({
            result: (countCurrency / this.state.rate[typeCurrency].toFixed(2))
        })
    }






    render() {
        return (
            <div className="calculator">
                <h3>Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу</div>
                    <div><label><input type="radio" name="radio" defaultValue="0"/>купить</label></div>
                    <div><label><input type="radio" name="radio" defaultValue="1"/>продать</label></div>
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="0" name="count-currency"/>
                            <select name="" id="" name="type-currency">
                                {Object.keys(this.props.rate).map(item => {
                                    return <option key={item} value={item}>{item}</option>
                                })}
                            </select>
                            <input type="submit" defaultValue="calc" />
                        </form>
                    </div>
                    <div>
                        <h4>Результат:</h4>
                        <ul className="calc-res">
                            <li>EUR {this.state.result.toFixed(2)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default Calc;
