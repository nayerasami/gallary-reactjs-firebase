import Router from "./pages/routing/routes";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
function App() {
  // let [userData, setUserData] = useState(null);
  // const cookie = new Cookies();

  // useEffect(() => {
  //   const userToken = cookie.get("authToken");
  //   console.log("userToken", userToken);
  //   const decodedUserData = jwtDecode(userToken);
  //   console.log("decodedUserData", decodedUserData);
  // }, []);

  return (
    <>
      <CssBaseline></CssBaseline>
      <Navbar />
      <div>
        <Router></Router>
      </div>
    </>
  );
}

export default App;
