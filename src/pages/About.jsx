import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import Child from "../components/Child";

const AboutPage = () => {
    const [count, setCount] = useState(0);

    console.log("Component Rendered");

  

    return (
    <>
    <UserContext.Provider value="Sridharan" >
      <button onClick={() => setCount(count + 1)}>
        Increase {count}
      </button>
      <Child  />
      </UserContext.Provider>
    </>
    )

}

export default AboutPage