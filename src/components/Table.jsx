class App extends React.Component {
    
        render() {
            return (
            <main>
                <nav  className="nav-extended teal lighten-1">
                    <div className = "nav-wrapper">
                        <a href="#" className="brand-logo">Рапорта диспетчера - отчёты</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a className="active" href="#test1">Производство</a></li>
                            <li className="tab"><a href="#test2">Движение продукции</a></li>
                            <li className="tab"><a href="#test3">Сырьё и тара</a></li>
                            <li className="tab"><a href="#test4">Excel в Москву</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="row"></div>
                <div className="row col s12">
                    <button className="waves-effect waves-light btn col s1">
                        <i className="material-icons left">arrow_back</i>
                            <span>{ (this.props.data).toLocaleDateString() }</span>
                    </button>
                    <button className="waves-effect waves-light btn col s1 offset-s10">
                        <i className="material-icons right">arrow_forward</i>
                        <span>{ (this.props.data).toLocaleDateString() }</span>
                    </button>
                </div>
                <div id="test1" className="col s12">
                    <table className="bordered centered highlight">
                        <thead className="brown lighten-3">
                            <tr>
                                <th rowSpan="3">Наименование</th>
                                <th colSpan="9">Производство</th>
                            </tr>
                            <tr>
                                <th colSpan="3">План</th>
                                <th colSpan="2">Факт</th>
                                <th colSpan="2">Отклонение</th>
                                <th colSpan="2">Склад</th>
                            </tr>
                            <tr>
                                <th>На месяц</th>
                                <th>С нач. месяца</th>
                                <th>На сутки</th>
                                <th>За сутки</th>
                                <th>С нач. месяца</th>
                                <th>За сутки</th>
                                <th>С нач. месяца</th>
                                <th>На вчера</th>
                                <th>На сегодня</th>
                            </tr>
                        </thead>
                        <tbody className="centered teal lighten-5">
                            <tr>
                                <td>Продукт 1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
    
                </div>
            </main>
            )
        }
    };
    
    export default App;