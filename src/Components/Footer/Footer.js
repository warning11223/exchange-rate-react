import {Component} from "react";


class Footer extends Component{
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <>
                <div className="container" id="cookie-info">
                    <div className="site-content">
                        <div className="well">На нашем сайте...</div>
                    </div>
                </div>
                <footer id="footer" className="footer">
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="flex-container">
                                <div className="flex-item">
                                    <h1 className="footer-title"><a href="#">React</a></h1>
                                    <p>All Rights Reserved</p>
                                </div>

                                <div className="flex-item">
                                    <div className="module-body">
                                        <ul className="list-unstyled">
                                            <li><a href="/sitemap/" tooltip="Map">Карта сайта</a></li>
                                            <li><a href="/sitemap/" tooltip="Map">Google map</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="flex-item">
                                    <div className="module-body">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Контакты</a></li>
                                            <li><a href="#">Гарантии</a></li>
                                            <li><a href="#">О сервисе</a></li>
                                            <li><a href="#">Условия</a></li>
                                            <li><a href="#">Соглашение</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="copyright-bar">
                        <div className="flex-container">
                            <div className="flex-item">
                                <ul className="link">

                                </ul>
                            </div>
                            <div className="flex-item">
                                <div className="clearfix payment-methods">
                                    <ul>
                                        <img src="" alt="" data-toggle="tooltip" data-placement="top" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </>

        );
    }
}


export default Footer;