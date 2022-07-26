const DEFAULT_STATE = {
    userList: [
        {
            id: 1,
            userName: 'man.nguyen',
            fullName: 'Man Ng',
            email: 'man.nguyen@gmail.com',
            phone: '085512123123',
            type: 'Client',
        },
        {
            id: 1,
            userName: 'khai.tran',
            fullName: 'Khai Tran',
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
