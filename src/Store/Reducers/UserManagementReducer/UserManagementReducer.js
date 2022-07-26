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
            email: 'khai.tran@gmail.com',
            phone: '085512456456',
            type: 'Admin',
        },
    ],
    userSelected: null,
}

export const UserManagementReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {

        //   case first:
        //     return { ...state, ...payload }

        default:
            return state
    }
}
