import React, { createRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DEFAULT_VALUES = {
    id: '',
    userName: '',
    fullName: '',
    password: '',
    phone: '',
    email: '',
    type: 'Client', 
}

function RegisterForm() {
    const [state, setState] = useState({
        values: DEFAULT_VALUES,
        errors: {
            id: '',
            userName: '',
            fullName: '',
            password: '',
            phone: '',
            email: '',
            type: '',
        }
    });
    const formRef = createRef();
    const dispatch = useDispatch();
    const {userList, userSelected} = useSelector((state) => state.UserManagementReducer);
    
    const handleChange = (event) => {   
        // console.log(event.target.value); 
        const {
            name,
            value,
            title,
            minLength,
            maxLength,
            validity: { valueMissing, patternMismatch, tooLong, tooShort },
          } = event.target;
          let message = '';
          if (patternMismatch) {
            message = `${title} is invalid pattern mismtach`;
          }
          if (tooLong || tooShort) { 
            message = `${title} is from ${minLength} to ${maxLength}`;
          }
          if (valueMissing) {
            message = `${title} is missing`;
          }
          setState({
            values: { ...state.values,[name]:value},
            errors: {...state.errors,[name]:message}
          })
    }

    const {userName, fullName, email, password, phone, type} = state.values;
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
                                    <input type="text" className="form-control"
                                    name='userName'
                                    required
                                    title='User Name'
                                    value={userName}
                                    onChange={handleChange}
                                    />
                                    {state.errors.userName && (
                                        <span className='text-danger'>{state.errors.userName} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"
                                    name='fullName'
                                    required
                                    title='Full Name'
                                    value={fullName}
                                    onChange={handleChange}
                                    />
                                    {state.errors.fullName && (
                                        <span className='text-danger'>{state.errors.fullName} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div noValidate  className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control"
                                    name='password'
                                    required
                                    title='Password'
                                    minLength={4}
                                    maxLength={12}
                                    value={password}
                                    onChange={handleChange}
                                    />
                                    {state.errors.password && (
                                        <span className='text-danger'>{state.errors.password} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" 
                                    name='phone'
                                    required
                                    title='Phone Number'
                                    value={phone}
                                    pattern="^[0-9]+$"
                                    onChange={handleChange}
                                    />
                                    {state.errors.phone && (
                                        <span className='text-danger'>{state.errors.phone} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control"
                                    name='email'
                                    required
                                    title='Email'
                                    value={email}
                                    onChange={handleChange}
                                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                                    />
                                    {state.errors.email && (
                                        <span className='text-danger'>{state.errors.email} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select className="form-control" 
                                    onChange={handleChange}
                                    name='type'
                                    value={type}
                                    >
                                        <option>Client</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            <button disabled={!formRef.current?.checkValidity()} type='submit' className="btn btn-warning mr-2">SAVE</button>
                            <button type='reset' className="btn btn-outline-dark">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm