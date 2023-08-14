
import LoginPage from "../LoginPage/LoginPage";

const Protected = ({ isLoggedIn, children, logIn, setUserSession }) => {
  if (!isLoggedIn) {
    return <LoginPage logIn = {logIn} setUserSession={setUserSession}/>
  }
  return children;
};
export default Protected;