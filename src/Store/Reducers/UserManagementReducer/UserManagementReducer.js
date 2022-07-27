import { ADD_USER, DELETE_USER, SELECTED_USER, UPDATE_USER } from "../../Types/userType"

const DEFAULT_STATE = {
    userList: [
        {
            id: 1,
            userName: 'man.nguyen',
            fullName: 'Man Ng',
            password: '123',
            phone: '085512123123',
            email: 'man.nguyen@gmail.com',
            type: 'Client',
        },
        {
            id: 2,
            userName: 'khai.tran',
            fullName: 'Khai Tran',
            password: '123',
            phone: '085512456456',
            email: 'khai.tran@gmail.com',
            type: 'Admin',
        },
    ],
    userSelected: null,
}

export const UserManagementReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {

        case ADD_USER: {
            const data = [...state.userList];
            data.push({ ...payload, id: Date.now() });
            state.userList = data;
            return { ...state }
        }

        case SELECTED_USER: {
            state.userSelected = payload
            return { ...state }
        }

        case UPDATE_USER: {
            state.userList = state.userList.map((ele) => ele.id === payload.id ? payload : ele)
            return { ...state }
        }

        case DELETE_USER: {
            state.userList = state.userList.filter(ele => ele.id !== payload)
            return { ...state }
        }
        default:
            return state
    }
}
