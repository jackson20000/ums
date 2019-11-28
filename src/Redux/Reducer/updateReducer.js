import { UPDATE } from "../type";

const initialState = {
    id: '',
    username: '',
    type: '',
    fname: '',
    lname: '',
    dob: ''
}

const updateUserhandler = (state, data) => {
    let newState = { ...state };
    newState.id = data.id;
    newState.username = data.username;
    newState.type = data.fname;
    newState.fname = data.lname;
    newState.dob = data.dob;
    return newState;
}

function updateReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
            return updateUserhandler(state, action.payload);
        default:
            return state;
    }
}

export default updateReducer;
