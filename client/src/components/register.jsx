import axios from 'axios';

export function Register(){
  return (
    <>
      <form target='_self' onSubmit={(e) => submitRegister(e)} action="submit">
        <div className="title">Registration</div>
        <div className="registration-box bg-white">
          <div className="fields">
            <div id="email">
              <label id="email-header">Email:</label>
              <br />
              <input type="email" className="input-field" name="email" />
              <br />
            </div>

            <div id="username">
              <label id="username-header">Username:</label>
              <br />
              <input type="text" className="input-field" name="username" />
              <br />
            </div>

            <div id="password">
              <label id="password-header">Password:</label>
              <br />
              <input type="password" className="input-field" name="password" />
              <br />
            </div>

            <div id="cpassword">
              <label id="cpassword-header">Confirm Password:</label>
              <br />
              <input type="password" className="input-field" name="cpassword" />
              <br />
            </div>

            <div id="dob">
              <label htmlFor="dob-header">Date of Birth:</label>
              <br />
              <input type="date" className="input-field" name="dob" />
              <br />
            </div>

            <div id="height">
              <label htmlFor="height-header">Height:</label>
              <br />
              <input type="number" className="input-field" name="height" />
              <br />
            </div>

            <div id="weight">
              <label htmlFor="weight-header">Weight:</label>
              <br />
              <input type="number" className="input-field" name="weight" />
            </div>
            
            <br />
            <input type="button" className="mx-auto block bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" value="Register"/>
          </div>
        </div>
        <br />
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
  console.log("all done!");
  //await axios.post('/user', user);
}