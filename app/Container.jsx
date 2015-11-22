import React from "react";
import AddButton from "./AddButton.jsx";
import List from "./List.jsx";

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    _handleAddList(content){
        console.log(content);
        var item = {content:content};
        var data = this.state.data;
        data.push(item);
        this.setState(data);
    }
    render(){
        var container={
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop:"20px"
        };
        return (
            <div style={container}>
                <AddButton onAddList={this._handleAddList.bind(this)}></AddButton>
                <List data={this.state.data}></List>
            </div>
        );
    }
}