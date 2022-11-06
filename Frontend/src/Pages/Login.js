import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";
// import App from "../App";

const Login = () => {
	const { loginWithRedirect , isAuthenticated } = useAuth0();

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						{ isAuthenticated ?

						<h1>Alredy logged in</h1>:
						<h1>Login to Your Account</h1>
					}
						
					{
						isAuthenticated ?<button onClick={() => loginWithRedirect()} type="submit" className={styles.green_btn} >
						Continue
					</button>:
						
						<button onClick={() => loginWithRedirect()} type="submit" className={styles.green_btn} >
							Login
						</button>
						}
					</form>
				</div>
				
			</div>
            
		</div>
        
	);
};


export default Login;