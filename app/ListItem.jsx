import React from "react";
import {Button} from "react-bootstrap";

export default class ListItem extends React.Component{
    constructor(props){
        super(props);
    }
    _handleClick(e){
        this.props.onItemFinish(this.props.contents);
    }
    render(){
        return (
            <tr>
                <td>
                    <Button onClick={this._handleClick.bind(this)} >完成</Button>
                </td>
                <td>{this.props.contents}</td>
            </tr>
        )
    }
}