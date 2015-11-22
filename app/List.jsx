import React from "react";

import ListItem from "./ListItem.jsx";

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data
        }
    }
    _handleFinish(contents){
        var data = this.state.data;
        for(var i=0; i < data.length;i++){
            if (data[i].content  === contents){
                data.splice(i,1);
                this.setState(data);
                return;
            }
        }
    }
    render(){
        var item={
            padding:"6px"
        }
        var Items = [];
        for (var i = 0; i < this.state.data.length;i++){
            Items.push(<ListItem style={item} contents={this.state.data[i].content} onItemFinish={this._handleFinish.bind(this)}></ListItem>);
        }
        return(
            <table width="100%" border="1">
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