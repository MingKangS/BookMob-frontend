import styles from '../styles/signUp.module.css'
import Link from "next/link"
import AuthForm from '../components/AuthForm';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signUpResponse } from '../interfaces/auth'
import { checkAuthAndGetUser } from '../utils/utils';
 
const signUp: React.FC = () => {
  const [email, setEmail] = useState<String>("");
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [errorMessage, setErrorMessage] = useState<String>("");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      checkAuthAndGetUser().then((isAuthenticated) => {
        if (isAuthenticated) router.push('/home');
      })
    };
    checkAuth()
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("The credentials entered are:", username, password);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    };

    fetch("http://localhost:8000/api/sign-up", requestOptions)
      .then( async (response) => {
        if (response.status == 201) {
          const resJson = await response.json();
          console.log("Sign up response JSON: ", resJson);

          localStorage.setItem('jwt', resJson["token"]);
          router.push('/home');
        } else {
          const res: signUpResponse = await response.json();
          const err: string = Object.values(res).toString();
          setErrorMessage(err);
        }
      });
  }

  return ( 
    <AuthForm 
      formType="Sign up" 
      handleSubmit={handleSubmit}
      setEmail={setEmail} 
      setUsername={setUsername} 
      setPassword={setPassword} 
      errorMessage={errorMessage}
      styles={styles} 
    />
   );
}
 
export default signUp;
