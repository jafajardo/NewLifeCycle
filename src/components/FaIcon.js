import React from 'react';

class FaIcon extends React.Component {
    render() {
        return (<i className={ 'fa fa-' + this.props.type}></i>)
    }
}

export default FaIcon;
