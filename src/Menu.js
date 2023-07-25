import React, { useState } from "react";

function Menu(props){

    const [sizeM, setSizeM] = useState(3); // 3-6-10
    const [speedM, setSpeedM] = useState(1); // .5-1-4
    const [quantityM, setQuantityM] = useState(100); // 50-100-300
    const [colorM, setColorM] = useState("#ffffff"); // "#ffffff"-
    const [shapeM, setShapeM] = useState("circle"); // "circle"-"star"
    const [modeM, setModeM] = useState('repulse'); // "repulse"-"attract"

    const handleSubmit = (e) => {
        
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label className="form-check-label" for="sizeOptions">Particle Size</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input"
                        type="radio" 
                        name="sizeOptions" 
                        id="sizeSmall"
                        value="3"
                        onChange={(e) => setSizeM(e.target.value)}
                    />
                    <label className="form-check-label" for="sizeSmall">Small</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sizeOptions" id="sizeMedium" value="6"/>
                    <label className="form-check-label" for="sizeMedium">Medium</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sizeOptions" id="sizeLarge" value="10"/>
                    <label className="form-check-label" for="sizeLarge">Large</label>
                </div>
            </div>
            <label className="form-check-label" for="speedOptions">Particle Speed</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="speedOptions" id="speedSlow" value=".5"/>
                    <label className="form-check-label" for="speedSlow">Slow</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="speedOptions" id="speedNormal" value="1"/>
                    <label className="form-check-label" for="speedNormal">Normal</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="speedOptions" id="speedZoomies" value="4"/>
                    <label className="form-check-label" for="speedZoomies">Zoomies</label>
                </div>
            </div>
            <label className="form-check-label" for="quanitityOptions">Particle Quanitity</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="quanitityOptions" id="quanitityFew" value="50"/>
                    <label className="form-check-label" for="quanitityFew">Few</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="quanitityOptions" id="quanitityRegular" value="100"/>
                    <label className="form-check-label" for="quanitityRegular">Regular</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="quanitityOptions" id="quanitityLots" value="300"/>
                    <label className="form-check-label" for="quanitityLots">Lots</label>
                </div>
            </div>
            <label className="form-check-label" for="shapeOptions">Particle Shape</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="shapeOptions" id="shapeCircle" value="circle"/>
                    <label className="form-check-label" for="shapeCircle">Circle</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="shapeOptions" id="shapeStar" value="star"/>
                    <label className="form-check-label" for="shapeStar">Star</label>
                </div>
            </div>
            <label className="form-check-label" for="cursorOptions">Cursor Effect</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="cursorOptions" id="cursorRepulse" value="repulse"/>
                    <label className="form-check-label" for="cursorRepulse">Repulse</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="cursorOptions" id="cursorAttract" value="attract"/>
                    <label className="form-check-label" for="cursorAttract">Attract</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
    )
}

export default Menu;