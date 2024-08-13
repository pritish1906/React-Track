import React, { useEffect, useState, useSyncExternalStore } from 'react'
import Axios from 'axios'


const FetchData = () => {
    const [catFact, setCatFact] = useState("");

    const genFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        })
    }

    useEffect(() => {
        genFact();
    }, [])
  return (
    <div>
        <button onClick={genFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
  )
}

export default FetchData