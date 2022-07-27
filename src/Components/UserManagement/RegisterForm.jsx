import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction, updateUserAction } from '../../Store/Action/userAction';

const DEFAULT_VALUES = {
    id: '',
    userName: '',
    fullName: '',
    password: '',
    phone: '',
    email: '',
    type: 'Client',
}

const DEFAULT_ERRORS = {
    id: '',
    userName: '',
    fullName: '',
    password: '',
    phone: '',
    email: '',
    type: '',
}

function RegisterForm() {
    const [state, setState] = useState({
        values: DEFAULT_VALUES,
        errors: DEFAULT_ERRORS
    });
    const formRef = useRef();
    const dispatch = useDispatch();
    const { userList, userSelected } = useSelector((state) => state.UserManagementReducer);

    useEffect(() => {
        if (userSelected)
            setState((preState) => ({
                ...preState,
                values: userSelected,
            }));
    }, [userSelected]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            values: { ...state.values, [name]: value },
            errors: { ...state.errors }
        })
    }

    const handleBlur = (event) => {
        const {
            name,
            // value,
            title,
            minLength,
            maxLength,
            validity: { valueMissing, patternMismatch, tooLong, tooShort },
        } = event.target;
        let message = '';

        if (patternMismatch) {
            message = `${title} is invalid pattern`;
        }

        if (tooLong || tooShort) {
            message = `${title} is from ${minLength} to ${maxLength} character`;
        }

        if (valueMissing) {
            message = `${title} is missing`;
        }

        setState({
            values: { ...state.values },
            errors: { ...state.errors, [name]: message }
        })
    }

    // const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        };

        userSelected ? dispatch(updateUserAction(state.values)) : dispatch(addUserAction(state.values));

        setState({
            values: DEFAULT_VALUES,
            errors: DEFAULT_ERRORS
        });
        // forceUpdate();
    }

    const { userName, fullName, email, password, phone, type } = state.values;
    return (
        <>
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    REGISTER FORM
                </div>
                <div className="card-body">
                    <form ref={formRef} noValidate onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control"
                                        name='userName'
                                        required
                                        title='User name'
                                        value={userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        title='Full name'
                                        value={fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {state.errors.fullName && (
                                        <span className='text-danger'>{state.errors.fullName} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div noValidate className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"
                                        name='password'
                                        required
                                        title='Password'
                                        minLength={4}
                                        maxLength={12}
                                        value={password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        title='Phone mumber'
                                        value={phone}
                                        pattern="^[0-9]+$"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        onBlur={handleBlur}
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
                            <button
                                // onClick={() => { forceUpdate() }}
                                disabled={!formRef.current?.checkValidity()}
                                type='submit'
                                className="btn btn-warning mr-2">SAVE</button>
                            <button type='reset' className="btn btn-outline-dark">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm