import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PiUserCircleThin } from "react-icons/pi";
import { userAction } from '../store/user-Slice';

const User = () => {
    const users = useSelector(state => state.user)
    console.log(users);
    const dispatch = useDispatch()
    const handledelete = (email)=>{
        console.log(email);
        console.log("jii");
    dispatch(userAction.deleteUser(email))
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
                                        <div className="card-body text-center">
                                            {
                                                user.image ?
                                                <img src={user.image} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                                                :
                                                <PiUserCircleThin  size={200}/>
                                            }
                                            <h5 className="card-title">{user.name}</h5>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">{user.email}</p>
                                        </div>
                                        <div className="card-footer  d-flex justify-content-around ">
                                            {/* <button className="btn btn-primary btn-sm px-4   btn-block" type="button">Edit</button> */}
                                         
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
