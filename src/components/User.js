import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const users = useSelector((state) => state.user)
    console.log(users);

    return (
        <div>
            <div class="container pt-5">
            <button class='p-10'>User</button>
                <div class="main-body">


                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
           
     
                       {users.map((user,index)=>{
                        return(
                            <div class="col mb-3">
                            <div class="card">
                                <img src="https://www.bootdey.com/image/340x120/20B2AA/000000" alt="Cover" class="card-img-top" />
                                <div class="card-body text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"  alt="User" class="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                                    <h5 class="card-title">{user.name}</h5>
                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                    <p class="text-muted font-size-sm">{user.email}</p>
                                </div>
                                <div class="card-footer">
                                    {/* <button class="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i class="material-icons">add</i>Follow</button> */}
                                    <button class="btn btn-light btn-sm bg-white has-icon ml-2" type="button">Delete</button>
                                </div>
                            </div>
                        </div>
                        )                      })}







                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
