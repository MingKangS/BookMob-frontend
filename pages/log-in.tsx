import React, { useState, useEffect } from 'react';
import styles from '../styles/logIn.module.css';
import Link from "next/link";
import { useRouter } from 'next/router';
import AuthForm from '../components/AuthForm';
import { checkAuthAndGetUser } from '../utils/utils';

const logIn: React.FC = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [errorMessage, setErrorMessage] = useState<String>("");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
			if (!localStorage.getItem("jwt")) return;
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
        username: username,
        password: password,
      }),
    };

    fetch("http://localhost:8000/api/log-in", requestOptions)
      .then(async (response) => {
        if (response.status == 200) {
          const resJson = await response.json();
          console.log("Log in response JSON: ", resJson);

          localStorage.setItem('jwt', resJson["token"]);
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
