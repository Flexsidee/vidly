import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 
        let classes = 'fa fa-heart';
        classes += (this.props.liked) ? '' : '-o';
        return (  
            <i onClick={this.props.onClick} style={{cursor: 'pointer'}}  className={classes} aria-hidden='true'></i>
        );
    }
}
 
export default Like;