import { useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';

export function Login() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/register');

  return (
    <>
    <h1>Welcome to ML Fitness!</h1>
      <form action="submit" id="login-form" onSubmit={(e) => submitLogin(e)}>
        <div id="email">
          <label id="email-header">Email</label>
          <br />
          <input type="text" id="email-input" name="email"></input>
        </div>
        <div className="password">
          <label id="password-header">Password</label>
          <br />
          <input type="text" id="password-input" name="password" />  
        </div>
        <div className = "submit">
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" value="Login"/>
        </div>
        <div>
          <a href="" onClick={handleClick}>Sign up if you haven't already</a>
        </div>

      </form>
    </>
  );
}

async function submitLogin(e) {
  e.preventDefault();
  const form = e.target;
  const user = {
    email: form.email.value.trim(),
    password: form.password.value.trim(),
  }
  console.log(user);
  await axios.post('http://localhost:3000/user/login/', user);
  console.log("all done!");
}