import React from 'react';

export default class ButtonBack extends React.Component {
    render (){
        return(
            <a className={`waves-effect waves-teal btn-flat ${ this.props.addclass }`} ><i className="material-icons left">{this.props.icon}</i></a>
        )
    }
}

