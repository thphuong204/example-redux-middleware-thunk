export const ADD_TODO = "TODO.ADD";
export const TOGGLE_TODO = "TODO.TOGGLE";
export const SET_FILTER = "TODO.SET_FILTER";

const initialState={
    todos: [],
    filter:"SHOW_ALL",
}

const todoReducer = (state=initialState,action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state, 
                todos:[
                    ...state.todos,
                    {
                        id: payload.id, 
                        text: payload.text,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                // lưu ý chỗ todos ngay bên dưới, không dùng dấu ngoặc array bao quanh state.todos.map
            todos: state.todos.map((todo)=> {
                    if (todo.id !== payload.id) return todo 
                    return {...todo, completed: !todo.completed};
                }),
        };
        case SET_FILTER:
            return {...state, filter:payload};
        default:
            return state;
    }
}

export default todoReducer;