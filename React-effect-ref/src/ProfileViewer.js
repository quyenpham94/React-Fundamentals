import React, {useState, useEffect} from 'react';
import axios from "axios";


const ProfileViewer = ({name = "Elie", color="purple"}) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        console.log("FETCHING NEW DATA")
        async function loadProfile() {
            const res = await axios.get(`https://api.github.com/users/${name}`);
            setData(res.data.name);
        }
       loadProfile();
    }, [name]); // only run effect when name here change

    return (
        <h3 style={{color}}>{data ? data : "loading..."}</h3>
    )
};

export default ProfileViewer;