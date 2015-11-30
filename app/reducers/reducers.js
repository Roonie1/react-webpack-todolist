/**
 * Created by ronnie on 15/11/30.
 */
import { ADD_TODO, COMPLETE_TODO} from '../actions/actions';


function todoApp(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TODO:
            console.log(action.index);
            console.log(state);
            var object = {
                text:state[action.index].text,
                completed:true
            }
            return [
                ...state.slice(0, action.index),
                object,
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}


export default todoApp;