import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../../store/user-Slice';

const AddUser = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user)
  console.log(users);
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const adduser = () => {
    alert("User Added Successfully");
    dispatch(userAction.addUser({
      name: user.name,
      image: user.image,
      email: user.email,
      job: user.job

    }))
    navigate('/')
    // console.log(user);
  }


  return (
    <div className='p-5 m-5'>
      <form action="" className='px-5 mx-5 d-flex flex-column align-items-center'>
        <h2 className="text-uppercase text-center mb-5">Create User</h2>
        <label htmlFor="" className=''>Name</label>
        <input className=' mb-4 p-2 border-dark form-control' style={{ width: '300px' }} required id='form1' type='text' onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <label htmlFor="" className=''>Job</label>
        <input className=' mb-4 p-2 border-dark form-control' style={{ width: '300px' }}required id='form3' type='text' onChange={(e) => setUser({ ...user, job: e.target.value })} />
        <label htmlFor="" className=''>Email</label>
        <input className=' mb-4 p-2 border-dark form-control' style={{ width: '300px' }} required type='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <div className=" d-flex justify-content-start align-items-center gap-3 pb-2 ">
          <label htmlFor="image"> Image</label>
          <div className="btn btn-primary btn-rounded w-100">
            <label className="form-label text-white m-1" for="customFile2" >Choose file</label>
            <input onChange={(e) => setUser({ ...user, image: URL.createObjectURL(e.target.files[0]) })} required type="file" className="form-control d-none" id="customFile2" />
          </div>
        </div>

        <button type='submit' className='btn btn-primary w-50' onClick={adduser}>Add</button>

      </form>


    </div>
  )
}

export default AddUser
