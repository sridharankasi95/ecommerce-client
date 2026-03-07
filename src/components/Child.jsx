import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Child = () => {
    const user = useContext(UserContext);

    return <h1>Hellow {user}</h1>
}
export default Child;