import React from 'react';

import ButtonBack from './Button.jsx';

export default class AppCard extends React.Component {
    
    render (){
        return(
            <div className="row col s12 valign-wrapper center-align brown lighten-4">
                {this.props.container > 0 ? <ButtonBack icon="arrow_back" addclass="" /> :  <ButtonBack icon="" addclass="disabled" />}
                <a className="waves-effect waves-teal btn-flat"><i className="material-icons left">menuk</i></a>
                <span className="col s12">{this.props.todo}</span>
                {this.props.container !==2 ? <ButtonBack icon="arrow_forward"  addclass="" /> : <ButtonBack icon=""  addclass="disabled" /> }
            </div>
        )
    }
}