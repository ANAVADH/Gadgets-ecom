
import styles from "./styles.module.css";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


import React, { useState } from 'react';
import {auth} from '../firebase'
import { Navigate } from "react-router-dom";


// import App from "../App";

const Login = () => {
	const [mynumber, setnumber] = useState("");

    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    // const [final, setfinal] = useState('');

const generateRecaptcha = ()=>{

	window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
		'size': 'invisible',
		'callback': (response) => {
		  // reCAPTCHA solved, allow signInWithPhoneNumber.
		  // ...
		}
	  }, auth);
}


	const requrestOtp = (e) => {
		e.preventDefault();
  
        if (mynumber.length >= 12  ){ 
        setshow(true)
		generateRecaptcha();
		let appVerifier = window.recaptchaVerifier;
		signInWithPhoneNumber(auth,mynumber,appVerifier)
		.then((confirmationResult) => {
			
			window.confirmationResult = confirmationResult;
			
		  }).catch((error) => {
			console.log(error)
		  });
		}
    }

	const verifyOtp = (e) =>{

		let Otp = e.target.value;
		setotp(Otp) ;
		if(Otp.length === 6){
			let confirmationResult = window.confirmationResult; 
			confirmationResult.confirm(Otp).then((result) => {
				<Navigate to='/'/>
				const user = result.user;

				console.log(user)
			  }).catch((error) => {
				console.log(error)
			  });
		}

	}





	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={requrestOtp} >
						

						
					
					{show ?
						<>
						<h1>Verify OTP</h1>
						<input
						
						onChange={verifyOtp}
							type="number"
							placeholder="enter otp"
							name="username"

							value={otp}
							
							required
							className={styles.input}
						/>
						
					
						
						
					
					
						
						</> : <>
						<h1>Enter Phone number</h1>
				
				<input
			onChange={(e) => setnumber(e.target.value)}
						type="tel"
						placeholder="ex : +91954587589"
						name="username"
						
						required
						className={styles.input}
					/>
					<button   type="submit" className={styles.green_btn} >
							Get otp
						</button>
						</>}
						<div id="recaptcha-container"></div>
						
					</form>
				</div>
				
			</div>
            
		</div>
        
	);
};


export default Login;