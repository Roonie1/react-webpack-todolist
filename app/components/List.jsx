import React, { PropTypes } from 'react';

import ListItem from "./ListItem.jsx";

export default class List extends React.Component{
    shouldComponentUpdate(nextProps){
        console.log("list next props:"+JSON.stringify(nextProps));
        console.log("list component should update");
        return true;
    };
    componentDidUpdate(){
        console.log("list component did update");
    };
    componentDidMount(){
        console.log("list component did mount");
    };
    componentWillReceiveProps(){
        console.log("list component will receive props");
    };
    render(){
        var item={
            padding:"6px"
        };
        var Items = [];
        for (let i = 0; i < this.props.todos.length;i++){
            if (!this.props.todos[i].completed) {
                Items.push(<ListItem style={item} key={i} text={this.props.todos[i].text}
                                     onClick={() => this.props.onTodoClick(i)}></ListItem>);
            }
        }
        return(
            <table width="250px" border="1">
                <thead>
                    <tr>
                        <td>操作</td>
                        <td>任务列表</td>
                    </tr>
                </thead>
                <tbody>
                    {Items}
                </tbody>
            </table>
        )
    }
}
List.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};