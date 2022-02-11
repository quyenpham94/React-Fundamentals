import React from "react";

const Clicker = () => {
    const fireLasers = (e) => {
        
        console.log(e.currentTarget);
        console.log(e.nativeEvent);
        console.log(e);
        // console.log("THE LASER HAVE BEEN FIRED")
        // console.log("RAP! PEW PEW PEW!!!")
    }
    return (
        <>
        <button onMouseOver={fireLasers}> CLICK ME!</button>
        <textarea onScroll={fireLasers} rows="2"> 
            rugjiurhwdsjfew
            fhgrkgjrgjttlg
            rgkrhgrejge;
            rugjiurhwdsjfew
            fhgrkgjrgjttlg
            rgkrhgrejge;gkrg
            rugjiurhwdsjfew
            fhgrkgjrgjttlg
            rgkrhgrejge;gkrg
        </textarea>
        </>
    
    )
}

export default Clicker;