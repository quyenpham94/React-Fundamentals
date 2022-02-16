import React from "react";
import Box from './Box';

const BoxList = () => {
    return (
        <div>
            <NewBoxForm />
            <Box 
                backgroundColor={backgroundColor} 
                width={width}
                height={height}
                />
        </div>
    )

}

export default BoxList;