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
import { useDispatch } from 'react-redux';
import { userAction } from '../../store/user-Slice';

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const adduser = () => {
    alert("User Added Successfully");
    dispatch(userAction.addUser({
      name:user.name,
      image:user.image,
      email:user.email,
      job:user.job
      
    }))
    navigate('/')
    // console.log(user);
  }


  return (
    <div>



      <MDBContainer fluid className='d-flex align-items-center justify-content-center ' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create User</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <MDBInput wrapperClass='mb-4' label='Job' size='lg' id='form3' type='text' onChange={(e) => setUser({ ...user, job: e.target.value })} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
            {/* <MDBInput wrapperClass='mb-4' label='Image' size='lg' id='form4' /> */}
            <div className=" d-flex justify-content-start align-items-center gap-3 pb-2 ">
              <label htmlFor="image"> Image</label>
              <div className="btn btn-primary btn-rounded">
                <label className="form-label text-white m-1" for="customFile2" >Choose file</label>
                <input onChange={(e) => setUser({ ...user, image: e.target.files[0] })} type="file" className="form-control d-none" id="customFile2" />
              </div>
            </div>

            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' onClick={adduser}>Add</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default AddUser
