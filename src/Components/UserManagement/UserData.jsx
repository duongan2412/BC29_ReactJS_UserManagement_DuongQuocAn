import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, selectedUserAction } from '../../Store/Action/userAction';

function UserData() {
    const dispatch = useDispatch();
    const hookState = useSelector((state) => state.UserManagementReducer);

    const [state, setState] = useState({
        keyword: '',
        selectedType: 'All'
    });

    let data = hookState.userList.filter(ele => {
        return ele.fullName.toLowerCase().trim().indexOf(state.keyword.toLowerCase().trim()) !== - 1
    });

    if (state.selectedType !== 'All') {
        data = data.filter((ele) => ele.type === state.selectedType);
    };

    const renderUserList = () => {
        return data.map((ele, idx) => {
            const { id, userName, fullName, email, phone, type } = ele;
            return (
                <tr key={id} className='bg-light'>
                    <td>{idx + 1}</td>
                    <td>{userName}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{type}</td>
                    <td>
                        <button
                            onClick={() => {
                                dispatch(selectedUserAction(ele));
                            }}
                            className="btn btn-info mr-2">EDIT</button>
                        <button
                            onClick={() => {
                                dispatch(deleteUserAction(ele.id))
                            }}
                            className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }
    return (
        <>
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">USER MANAGEMENT</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                                onChange={handleChange}
                                name='keyword'
                            />
                        </div>
                    </div>
                    <div className="col-3 ml-auto">
                        <div className="form-group mb-0">
                            <select
                                onChange={handleChange}
                                name='selectedType'
                                className="form-control">
                                <option>All</option>
                                <option>Client</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUserList()}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserData