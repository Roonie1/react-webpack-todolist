/**
 * Created by ronnie on 15/11/30.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo} from '../actions/actions';
import AddButton from '../components/AddButton.jsx';
import List from '../components/List.jsx';

class App extends React.Component {
    render() {

        const { dispatch, visibleTodos} = this.props;
        return (
            <div>
                <AddButton
                    onAddClick={text =>
            dispatch(addTodo(text))
          } />
                <List
                    todos={this.props.visibleTodos}
                    onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};

function select(state) {
    return {
        visibleTodos: state
    };
}

export default connect(select)(App);