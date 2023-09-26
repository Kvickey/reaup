import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";
import RingLoader from "react-spinners/RingLoader";
import "./style.css"

const override = {
    display: "block",
    margin: "300px auto",
    borderColor: "red",
};

function Loader() {

    return (
        <div className='loaderStyle'>
            <div className='customAlign'>
                <RingLoader
                    color="#36d7b7"
                    cssOverride={{ override }}
                    size={100}
                    speedMultiplier={1}
                />
            </div>
        </div>
    )
}

export default Loader