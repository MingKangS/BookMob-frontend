import styles from '../styles/logIn.module.css'
import Link from "next/link"
 
const logIn: React.FC = () => {
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.logInForm}>
          <h2 className={styles.formTitle}>
            Log in
          </h2>

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
              Log in
            </button>
          </div>

          <div className={styles.formSpan}>
            <span className="txt1 p-b-9">
              Don’t have an account? <Link href="/sign-up"><a className={styles.a}>Sign up now</a></Link>!
            </span>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default logIn;
