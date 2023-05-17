
import LoginPage from "../LoginPage/LoginPage";

const Protected = ({ isLoggedIn, children, logIn }) => {
  if (!isLoggedIn) {
    return <LoginPage logIn = {logIn}/>
  }
  return children;
};
export default Protected;