import { useNavigate, Navigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/register');

  return (
    <>
    <h1>Welcome to ML Fitness!</h1>
      <form action="submit" id="login-form">
        <div id="email">
          <label id="email-header">Email</label>
          <br />
          <input type="text" id="email-input" ></input>
        </div>
        <div className="password">
          <label id="password-header">Password</label>
          <br />
          <input type="text" id="password-input"/>  
        </div>
        <div>
          <a href="" onClick={handleClick}>Sign up if you haven't already</a>
        </div>

      </form>
    </>
  );
}
