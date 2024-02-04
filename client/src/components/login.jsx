import { useNavigate, Navigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/register');

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="registration-box bg-white">
        <div className="text-center">
          <h1>Welcome to MLFitness!</h1>
          <br />
          <form action="submit" id="login-form" className="flex flex-col items-center">
            <div id="email">
              <label id="email-header">Email</label>
              <br />
              <input type="email" className="input-field" ></input>
              <br />
            </div>
            <div className="password">
              <label id="password-header">Password</label>
              <br />
              <input type="password" className="input-field"/>  
            </div>
            <br />
            <button type="submit" className="mx-auto block bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">Sign In</button>
            <div>
              <br />
              <a href="" onClick={handleClick}>Sign up if you haven't already</a>
            </div>
        </form>
        </div>
      </div>
    </div>
    </>
  );
}
