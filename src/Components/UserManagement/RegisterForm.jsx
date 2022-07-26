import React from 'react'

function RegisterForm() {
    return (
        <>
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    REGISTER FORM
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select className="form-control">
                                        <option>Client</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-warning mr-2">SAVE</button>
                    <button className="btn btn-outline-dark">RESET</button>
                </div>
            </div>
        </>
    )
}

export default RegisterForm