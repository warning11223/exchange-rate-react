import {Component} from "react";
import Calc from "../Calc/Calc";


class Rate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {},
        }
        this.currency = ['RUB', 'UAH', 'USD', 'KZT'];
        this.getRace();
    }

    getRace = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3c57dd5e1df40987cccd8213e3d9eff5')
            .then(res => res.json())
            .then(data => {
                this.setState({date: data.date})
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({
                    currencyRate: result,
                })
            })


    }



    render() {
        return (
            <>
                <h3>Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map((item, index) => (
                        <div key={index} className="block flex-item">
                        <div className="currency-name">{item}</div>
                        <div className="currency-in">{this.state.currencyRate[item].toFixed(2)}*</div>
                            <p>*Можно купить за 1 EUR</p>
                        </div>
                    ))}
                </div>

                <Calc rate={this.state.currencyRate}/>
            </>
        );
    }
}


export default Rate;
