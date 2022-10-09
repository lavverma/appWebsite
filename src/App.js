// import './App.css';

// import SearchIcon from './search.svg'
// import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { useState } from 'react';

// const API_URL = 'https://imdb-api.com/en/API/SearchMovie/k_5nw0kyxz/'

const App = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const newEntry = { email: email, password: password }
    setAllEntry([...allEntry, newEntry])
  }
  return (
    <section class="vh-100" style={{"background-color" : "#508bfc"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{"border-radius" : "1rem"}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

              <form action='' onSubmit={submitForm} >
            <div class="form-floating mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='name@example.com' onChange={(c) => { setEmail(c.target.value) }}/>
              <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" onChange={(c) => { setPassword(c.target.value) }}/>
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr class="my-4"/>

            <button class="btn btn-lg btn-block btn-primary" style={{"background-color" : "#dd4b39"}}
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style={{"background-color": "#3b5998"}}
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
       </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default App;
