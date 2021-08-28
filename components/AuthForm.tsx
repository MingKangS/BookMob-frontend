import Link from "next/link";
import { AuthFormProps } from "../interfaces/auth";
 
const AuthForm: React.FC<AuthFormProps> = ({formType, handleSubmit, setEmail, setUsername, setPassword, errorMessage, styles}) => {
  return ( 
    <div className="wrapper">
      <div className={styles.container + " authContainer"}>
        <form className="logInForm" autoComplete="off">
          <h2 className="formTitle">
            {formType == "Log in" ? "Log in" : "Welcome to BookMob!"}
          </h2>

          {
            formType == "Sign up" &&
          
            <div className="formGroup" data-validate="Please enter email">
            <span className="inputDescription">Email</span>
            <input 
              className="input"
              type="email" 
              name="email" 
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          }

            <div className="formGroup" data-validate="Please enter username">
              <span className="inputDescription">Username</span>
              <input 
                className="input"
                type="text" 
                name="username" 
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

          <div className="formGroup" data-validate = "Please enter password">
            <span className="inputDescription">Password</span>
            <input 
              className="input"
              type="password" 
              name="pass" 
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="formButton" onClick={(e) => handleSubmit(e)}>
              {formType == "Log in" ? "Log in" : "Sign up"}
            </button>
          </div>

          { errorMessage && <span className="errMessage"> { errorMessage } </span> }

          <div className="formSpan">
            
              {formType == "Log in" ? 
                <span className="txt1 p-b-9">
                  Don’t have an account? <b><Link href="/sign-up"><a className="a">Sign up now</a></Link></b>!
                </span>
              : 
                <span className="txt1 p-b-9">
                  Already have an account? Click here to <b><Link href="/log-in"><a className="a">log in</a></Link></b>.
                </span>
              }
              
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default AuthForm;