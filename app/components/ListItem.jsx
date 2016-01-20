import React, { PropTypes } from 'react';
import {Button} from "react-bootstrap";

export default class ListItem extends React.Component{
    componentDidMount(){
        console.log("item component did mount");
    };
    render(){
        return (
            <tr>
                <td>
                    <Button onClick={this.props.onClick} >完成</Button>
                </td>
                <td>{this.props.text}</td>
            </tr>
        )
    }
}
ListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};