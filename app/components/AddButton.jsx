import React, { PropTypes } from 'react';
import ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {Input} from "react-bootstrap";

export default class AddButton extends React.Component{
    render(){
        var nav={
            textAlign:"center",
            width:"200px",
            height:"40px"
        };
        var inputDiv={
            float:"left"
        };
        return (
            <div style={nav}>
                <div style={inputDiv}>
                    <input type="text" ref="input"/>
                </div>
                <Button type="button" onClick={(e) => this.handleClick(e)}>增加</Button>
            </div>
        );
    }
    handleClick(e) {
        const node = ReactDOM.findDOMNode(this.refs.input);
        const text = node.value.trim();
        if (text !== ""){
            this.props.onAddClick(text);
            node.value = '';
        }
    }
}

AddButton.propTypes = {
    onAddClick: PropTypes.func.isRequired
};