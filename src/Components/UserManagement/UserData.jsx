import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserData() {
    const dispatch = useDispatch();
    const hookState = useSelector((state) => state.UserManagementReducer);
    // console.log(hookState.userList);
    const renderUserList = () => {
        hookState.userList.map((ele) => {
            const { id, userName, fullName, email, phone, type } = ele;
            return (
                <tr className='bg-light'>
                    <td>{id}</td>
                    <td>{userName}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{type}</td>
                    <td>
                        <button className="btn btn-info mr-2">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
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
                            />
                        </div>
                    </div>
                    <div className="col-3 ml-auto">
                        <div className="form-group mb-0">
                            <select className="form-control">
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