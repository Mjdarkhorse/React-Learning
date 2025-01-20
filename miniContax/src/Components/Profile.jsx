import { useContext } from "react"
import UserContext from "../Contax/UserContax"

const Profile = () => {
     const{user} = useContext(UserContext);
  if(!user) return<div>Please Log in </div>
  return <div>Welcome {user.userName}</div>
}

export default Profile
