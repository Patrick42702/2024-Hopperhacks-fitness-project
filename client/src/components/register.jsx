export function Register(){
  return (
    <>
      <form action="submit">
        <div className="title">Registration</div>
        <div className="registration-box">
          <div className="fields">
            <div id="email">
              <label id="email-header" className="text-cyan-200">Email:</label>
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
              <label for="dob-header">Date of Birth:</label>
              <br />
              <input type="date" id="dob-header" name="dob" />
              <br />
            </div>

            <div id="height">
              <label for="height-header">Height:</label>
              <br />
              <input type="number" id="height-header" name="height" />
              <br />
            </div>

            <div id="weight">
              <label for="weight-header">Weight:</label>
              <br />
              <input type="number" id="weight-header" name="weight" />
              <br />
            </div>

            <div id="submit">
              <label for="submit-header">Register</label>
              <br />
              <button id="submit-header" name="submit" />
              <br />
            </div>
          </div>
        </div>

      </form>
    </>
  );
}