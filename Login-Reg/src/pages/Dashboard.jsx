import {useContext} from "react"
import {UserContext} from "../../context/userContext";

export default function Dahsboard(){
  const {user} = useContext(UserContext);
  return (
    
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Welcome to Your Dashboard</h1>
          </div>
          <div>
            <p>
              Hello, User! This is your personalized dashboard. Feel free to explore and manage your account.
            </p>
          </div>
        </main>
  );
}