export function Login() {
  return (
    <>
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

      </form>
    </>
  );
}
