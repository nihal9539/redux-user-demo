import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {userAction} from "../store/user-Slice"

const User = () => {
    const users = useSelector(state => state.user)
    console.log(users);
    const dispatch = useDispatch()
    const deleteUser = ()=>{
     dispatch({
        // userAction.
     })
    }

    return (
        <div>
            <div className="container pt-5">
                <div className='button d-flex justify-content-center p-2'>
                    <Link to={'/add-user'} className='p-2 btn btn-outline-dark btn-dark text-white'>Add User</Link>
                </div>
                <div className="main-body">


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">


                        {users.userList.map((user, index) => {
                            return ( 
                                <div className="col mb-3">
                                    <div className="card">
                                        <img src="https://www.bootdey.com/image/340x120/20B2AA/000000" alt="Cover" className="card-img-top" />
                                        <div className="card-body text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                                            <h5 className="card-title">{user.name}</h5>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">{user.email}</p>
                                        </div>
                                        <div className="card-footer m
                                        ">
                                            <button className="btn btn-primary btn-sm   btn-block" type="button">Edit</button>
                                            <button className="btn btn-danger btn-sm   ml-2" type="button" onClick={deleteUser}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}







                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
