import React from 'react';

export default class AppHeader extends React.Component {
    
        render() {
            return (
                <nav  className="nav-extended teal lighten-1 col s12">
                    <div className = "nav-wrapper">
                        <a href="#" className="brand-logo">kaBoard</a>
                        
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a className="active" href="#test1">Доска</a></li>
                            <li className="tab"><a href="#test2">Стол</a></li>
                            <li className="disabled tab"><a href="#test3">На потом</a></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    };
 
