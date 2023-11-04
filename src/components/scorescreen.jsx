import React from "react";

export default function Scorescreen({ score, total }) {

return (
    <div style={{
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        color:'black',
            }}>
        <h2>Total Score is {score} out of {total}</h2>
    </div>
);
}
