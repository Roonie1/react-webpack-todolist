import React from "react";
import {Button} from "react-bootstrap";
import {Input} from "react-bootstrap";

export default class AddButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputContent:""
        }
    }

    _handleClick(){
        var listItem = this.state.inputContent;
        if (!listItem){
            return;
        }
        this.setState({inputContent:""});
        this.props.onAddList(listItem);
    }

    _handelChange(e){
        this.setState({inputContent:e.target.value});
    }
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
                    <Input type="text" value={this.state.inputContent} onChange={this._handelChange.bind(this)}/>
                </div>
                <Button type="button" onClick={this._handleClick.bind(this)}>增加</Button>

            </div>
        );
    }
}