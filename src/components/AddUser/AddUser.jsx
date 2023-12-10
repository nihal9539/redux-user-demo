import React from 'react'

const AddUser = () => {
  return (
    <div>
      <div>
    <div className="d-flex justify-content-center mb-4">
        <img id="selectedAvatar" src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
        className="rounded-circle" style="width: 200px; height: 200px; object-fit: cover;" alt="example placeholder" />
    </div>
    <div className=" d-flex justify-content-center">
        <div className="btn btn-primary btn-rounded">
            <label className="form-label text-white m-1" for="customFile2">Choose file</label>
            <input type="file" className="form-control d-none" id="customFile2"  />
        </div>
    </div>
</div>
    </div>
  )
}

export default AddUser
