const { REQUEST, SUCCESS, FAILURE } = require("./userTypes");

const initialState = {
    loading: true,
    error: '',
    data: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return{
                ...state,
                loading: true
            }
        case SUCCESS :
            return {
                ...state,
                loading : false,
                data : action.payload,
                error : ''
            }
        case FAILURE :
            return {
                ...state,
                loading: false,
                error: action.error,
                data: action.payload
            }
        default:
            return state;
    }
}

export default userReducer