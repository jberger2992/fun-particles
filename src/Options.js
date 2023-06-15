import React, { useState } from "react";

export default Options = (props)=>{

    const [sizeO, setSizeO] = useState(props.size); // 3-6-10
    const [speedO, setSpeedO] = useState(props.speed); // .5-1-4
    const [quantityO, setQuantityO] = useState(props.quantity); // 50-100-300
    const [colorO, setColorO] = useState(props.color); // "#ffffff"-
    const [shapeO, setShapeO] = useState(props.shape); // "circle"-"star"
    const [modeO, setModeO] = useState(props.mode); // "repulse"-"attract"

    return(
    <>
        <div className="container">
            <div className="row">
                <button className="btn"></button>
            </div>
        </div>
    </>
    )
}