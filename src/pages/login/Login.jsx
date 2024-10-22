import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Destructure values from the authentication store
  const { user, loginGoogleWithPopUp, observeAuthState, loading } = useAuthStore();
  const navigate = useNavigate();

  // Effect to observe the authentication state when the component mounts
  useEffect(() => {
    observeAuthState(); 
  }, [observeAuthState]);

  // Function to check if the user exists and handle registration
  async function checkUser(oneUser) {
    return await UserDAO.getUserById(oneUser.email)
      .then((result) => {
        if (result.success) {
          console.log("The user is already registered: ", oneUser.email);
        } else {
          UserDAO.createUser(oneUser);
          console.log("The user has been registered.");
        }
        navigate("/home"); // Redirect to /home after registration
      })
      .catch((error) => {
        console.error("Error in checkUser:", error);
      });
  }

  // Effect to check user state after authentication
  useEffect(() => {
    if (user) {  // If the user is authenticated, redirect to home
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      checkUser(newUser);
    }
  }, [user, navigate]);

  // Callback to handle Google login
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();  // Start login process with Google
  }, [loginGoogleWithPopUp]);

  // Display loading text while fetching authentication state
  if (loading) {
    return <p className="loading-text">Loading...</p>;  
  }

  // Render the login button
  return (
    <div className="container-login">
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
