import styles from '../styles/signUp.module.css'
import Link from "next/link"
import AuthForm from '../components/AuthForm';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import signUpResponse from '../interfaces/auth'
 
const signUp: React.FC = () => {
  const [email, setEmail] = React.useState<String>("");
  const [username, setUsername] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [errorMessage, setErrorMessage] = React.useState<String>("");

  const router = useRouter();
  
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
          router.push('/home');
        } else {
          const res: signUpResponse = await response.json();
          const err: string = Object.values(res)[0];
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
