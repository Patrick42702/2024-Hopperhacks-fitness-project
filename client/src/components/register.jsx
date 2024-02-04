import axios from 'axios';

export function Register(){
  return (
    <>
      <form target='_self' onSubmit={(e) => submitRegister(e)} action="submit">
        <div className="title">Registration</div>
        <div className="registration-box">
          <div className="headers">
            <div id="email">
              <label id="email-header" className="text-cyan-200">Email:</label>
              <br />
            </div>
            <div id="username">
              <label id="username-header">Username:</label>
              <br />
            </div>
            <div id="password">
              <label id="password-header">Password:</label>
              <br />
            </div>
            <div id="cpassword">
              <label id="cpassword-header">Confirm Passsword:</label>
              <br />
            </div>
            <div id="dob">
              <label for="dob-header">Date of Birth:</label>
              <br />
            </div>
            <div id="height">
              <label htmlFor="height-header">Height:</label>
              <br />
            </div>
            <div id="weight">
              <label htmlFor="weight-header">Weight:</label>
              <br />
            </div>
          </div>
          <div className="inputs">
            <input type="email" id="email" name="email" />
            <br />
            <input type="text" id="username" name="username" />
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <input type="password" id="cpassword" name="cpassword" />
            <br />
            <input type="date" id="dob-header" name="dob" />
            <br />
            <input type="number" id="height-header" name="height" />
            <br />
            <input type="number" id="weight-header" name="weight" />
            <br />
          </div>
        </div>

        
        
      </form>
    </>
  );
}

async function submitRegister(e) {
  e.preventDefault();
  const form = e.target;
  //error if username is taken
  //error if email is taken
  if(!(form.password.value.trim() ===form.cpassword.value.trim())){
    alert("Password does not match password verification.");
    form.cpassword.focus();
    return;
  }
  const user = {
    email: form.email.value.trim(),
    username: form.username.value.trim(),
    password: form.password.value.trim(),
    height: form.height.value.trim(),
    weight: form.weight.value.trim()
  }
  console.log(user);
  await axios.post('http://localhost:3000/user/', user);
  //await axios.post('/user', user);
}