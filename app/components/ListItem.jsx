import React, { PropTypes } from 'react';
import {Button} from "react-bootstrap";

export default class ListItem extends React.Component{
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