import React, {useEffect , useState} from 'react'
import { View, Text,ScrollView } from "react-native";
import Logout from "../components/Account/Logout";
import Profile from "../components/Account/Profile";
import Help from "../components/Account/Help";
import UserOptions from "../components/Account/UserOptions";

function Account() {
  const [isLogged, setIsLogged] = useState(true)
  return (
    <>
    <ScrollView>  
        <Profile isLogged={isLogged} setIsLogged={setIsLogged}/>
        <UserOptions isLogged={isLogged} setIsLogged={setIsLogged}/>
        <Help/>
        <Logout isLogged={isLogged} setIsLogged={setIsLogged}/>
    </ScrollView>
    </>
  );
}

export default Account;
