import { ADD_USER, DELETE_USER, SELECTED_USER, UPDATE_USER } from './../Types/userType'

const addUserAction = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}

const selectedUserAction = (data) => {
    return {
        type: SELECTED_USER,
        payload: data
    }
}

const updateUserAction = (data) => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}

const deleteUserAction = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export { addUserAction, selectedUserAction, updateUserAction, deleteUserAction }