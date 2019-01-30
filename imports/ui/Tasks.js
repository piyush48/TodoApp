import React, { Componenet } from 'react';

export default class tasks extends component {
    render(){
        return (
            <li> { this.props.task.text}</li>
        );
    }
}