
import React, {useState} from 'react';
import styles from './login.module.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context';

 
function Login(props) {

    const dispatch = useAuthDispatch();
    const {loading, errorMessage} = useAuthState();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        let payload = {email, password}
        try {
            let response = await loginUser(dispatch, payload)
            if (!response.user) {
                return
            } else {
                props.history.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login Page</h1>
        {
            errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
        }
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor='email'>Username</label>
              <input type='text' id='email' value={email} onChange={ (e) => { setEmail(e.target.value) } }/>
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' value={password} onChange={ (e) => { setPassword(e.target.value)} }  />
            </div>
          </div>
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
    </div>
  );
}
 
export default Login;