import styles from '../styles/signUp.module.css'
import Link from "next/link"
 
const signUp: React.FC = () => {
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.logInForm}>
          <h2 className={styles.formTitle}>
            Welcome to BookMob!
          </h2>

          <div className={styles.formGroup} data-validate="Please enter email">
            <span className={styles.inputDescription}>Username</span>
            <input className={styles.input} type="email" name="email" placeholder="Enter your email"/>
          </div>

          <div className={styles.formGroup} data-validate="Please enter username">
            <span className={styles.inputDescription}>Username</span>
            <input className={styles.input} type="text" name="username" placeholder="Enter your username"/>
          </div>

          <div className={styles.formGroup} data-validate = "Please enter password">
            <span className={styles.inputDescription}>Password</span>
            <input className={styles.input} type="password" name="pass" placeholder="Enter your password"/>
          </div>

          <div className={styles.formGroup}>
            <button className={styles.formButton}>
              Sign up
            </button>
          </div>

          <div className={styles.formSpan}>
            <span className="txt1 p-b-9">
              Already have an account? Click here to <Link href="/log-in"><a className={styles.a}>log in</a></Link>.
            </span>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default signUp;
