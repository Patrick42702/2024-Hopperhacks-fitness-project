import axios from 'axios';

export function Register(){
  return (
    <>
      <form target='_self' onSubmit={(e) => submitRegister(e)}>
        <div id="email">
          <label id="email-header">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
        </div>

        <div id="username">
          <label id="username-header">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
        </div>

        <div id="password">
          <label id="password-header">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
        </div>

        <div id="cpassword">
          <label id="cpassword-header">Confirm Passsword:</label>
          <br />
          <input type="password" id="cpassword" name="cpassword" />
          <br />
        </div>

        <div id="dob">
          <label htmlFor="dob-header">Date of Birth:</label>
          <br />
          <input type="date" id="dob-header" name="dob" />
          <br />
        </div>

        <div id="height">
          <label htmlFor="height-header">Height:</label>
          <br />
          <input type="number" id="height-header" name="height" />
          <br />
        </div>

        <div id="weight">
          <label htmlFor="weight-header">Weight:</label>
          <br />
          <input type="number" id="weight-header" name="weight" />
          <br />
        </div>

        <input id="submit" type="submit" value="Register"/>

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