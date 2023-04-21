import React from 'react'
import Navbar from './Navbar'
const EmployeeForm = () => {
  return (
    <div>

      <div className="box41">
      <div className="box4">
      <h3>Registration</h3>

      <form action="">
        <div className="details personal">
          <span className='title'><i class="fa-solid fa-user"></i> Personal Info: </span>

          <div className="fields">
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" required/>
              <label for="floatingInput">First Name</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name" required />
              <label for="floatingInput">Last Name</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
              <label for="floatingInput">Email address</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="tel" class="form-control" id="floatingInput" placeholder="Phone number" />
              <label for="floatingInput">Phone Number</label> 
            </div>
            
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">City</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">State or Province</label> 
            </div>
            
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Address" />
              <label for="floatingInput">Country</label> 
            </div>
          </div>
        </div>


        <div className="details ID">
          <span className='title'><i class="fa-solid fa-school"></i> Education: </span>

          <div className="fields">
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" required/>
              <label for="floatingInput">Highest Degree</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name" multiple required />
              <label for="floatingInput">Institution Name</label> 
            </div>
            <div className="input-fields form-floating mb-3"> 
              <input type="number" class="form-control" min="1960" max="2099" step="1" id="floatingInput" multiple placeholder="Email" />
              <label for="floatingInput">Year of Pass out</label> 
            </div>
          </div>
        </div>
        <div className="details company">
          <span className='title'><i class="fa-sharp fa-solid fa-business-time"></i> Availability: </span>

          <div className="fields">
              <ul class="list-group ">
                  <li className='list-group-item'>
                    <label htmlFor="">
                      <input type="checkbox" name="" id="" className='check'/>
                      Part-time
                    </label>
                  </li>
                  <li className='list-group-item'>
                    <label htmlFor="">
                      <input type="checkbox" name="" id="" className='check'/>
                      Full-time
                    </label>
                  </li>

              </ul>
          </div>
          <div className="details ID">
            <span className='title'><i class="fa-solid fa-suitcase"></i> Specification: </span>

            <div className="fields">
              <div className="input-fields form-floating mb-3"> 
                <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name" multiple required/>
                <label for="floatingInput">Desired Jobs</label> 
              </div>
            </div>
        </div>
        <button className='btn save-btn'>Submit <i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default EmployeeForm
