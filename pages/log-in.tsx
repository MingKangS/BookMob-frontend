import React, { useState } from 'react';
import styles from '../styles/logIn.module.css';
import Link from "next/link";
import { useRouter } from 'next/router';
import AuthForm from '../components/AuthForm';
 
const logIn: React.FC = () => {
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
        username: username,
        password: password,
      }),
    };

    fetch("http://localhost:8000/api/log-in", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          router.push('/home');
        } else {
          response.json().then((data) => {
            setErrorMessage(data["Bad Request"]);
          })
        }
      });
      
  }

  return ( 
    <AuthForm 
      formType="Log in" 
      handleSubmit={handleSubmit}
      setEmail={null} 
      setUsername={setUsername} 
      setPassword={setPassword} 
      errorMessage={errorMessage}
      styles={styles} 
    />
   );
}
 
export default logIn;
