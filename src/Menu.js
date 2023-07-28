import React from "react";
import "./Menu.css";

function Menu(props){

    // const [sizeM, setSizeM] = useState(3); // 3-6-10
    // const [speedM, setSpeedM] = useState(1); // .5-1-4
    // const [quantityM, setQuantityM] = useState(100); // 50-100-300
    // const [colorM, setColorM] = useState("#ffffff"); // "#ffffff"-
    // const [shapeM, setShapeM] = useState("circle"); // "circle"-"star"
    // const [modeM, setModeM] = useState('repulse'); // "repulse"-"attract"

    return(
    <>
        <form>
            <label className="form-check-label title-css" for="sizeOptions">Size</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input"
                        type="radio" 
                        name="sizeOptions" 
                        id="sizeSmall"
                        value="3"
                        onChange={(e) => props.setSize(3)}
                    />
                    <label className="form-check-label label-css" for="sizeSmall">Small</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sizeOptions" 
                        id="sizeMedium" 
                        value="6"
                        onChange={(e) => props.setSize(6)}
                    />
                    <label className="form-check-label label-css" for="sizeMedium">Medium</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sizeOptions" 
                        id="sizeLarge" 
                        value="10"
                        onChange={(e) => props.setSize(10)}
                    />
                    <label className="form-check-label label-css" for="sizeLarge">Large</label>
                </div>
            </div>
            <label className="form-check-label title-css" for="speedOptions">Speed</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="speedOptions" 
                        id="speedSlow" 
                        value=".5"
                        onChange={(e) => props.setSpeed(.5)}
                    />
                    <label className="form-check-label label-css" for="speedSlow">Slow</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="speedOptions" 
                        id="speedNormal" 
                        value="1"
                        onChange={(e) => props.setSpeed(1)}
                    />
                    <label className="form-check-label label-css" for="speedNormal">Normal</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="speedOptions" 
                        id="speedZoomies" 
                        value="4"
                        onChange={(e) => props.setSpeed(4)}
                        />
                    <label className="form-check-label label-css" for="speedZoomies">Zoomies</label>
                </div>
            </div>
            <label className="form-check-label title-css" for="quanitityOptions">Quanitity</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="quanitityOptions" 
                        id="quanitityFew" 
                        value="50"
                        onChange={(e) => props.setQuantity(50)}
                    />
                    <label className="form-check-label label-css" for="quanitityFew">Few</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="quanitityOptions" 
                        id="quanitityRegular" 
                        value="100"
                        onChange={(e) => props.setQuantity(100)}
                    />
                    <label className="form-check-label label-css" for="quanitityRegular">Regular</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="quanitityOptions" 
                        id="quanitityLots" 
                        value="300"
                        onChange={(e) => props.setQuantity(300)}
                    />
                    <label className="form-check-label label-css" for="quanitityLots">Lots</label>
                </div>
            </div>
            <label className="form-check-label title-css" for="shapeOptions">Shape</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="shapeOptions" 
                        id="shapeCircle" 
                        value="circle"
                        onChange={(e) => props.setShape("circle")}
                    />
                    <label className="form-check-label label-css" for="shapeCircle">Circle</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="shapeOptions" 
                        id="shapeStar" 
                        value="star"
                        onChange={(e) => props.setShape("star")}
                    />
                    <label className="form-check-label label-css" for="shapeStar">Star</label>
                </div>
            </div>
            <label className="form-check-label title-css" for="cursorOptions">Cursor Effect</label>
            <div classname="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="cursorOptions" 
                        id="cursorRepulse" 
                        value="repulse"
                        onChange={(e) => props.setMode("repulse")}
                    />
                    <label className="form-check-label label-css" for="cursorRepulse">Repulse</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="cursorOptions" 
                        id="cursorAttract" 
                        value="attract"
                        onChange={(e) => props.setMode("attract")}
                    />
                    <label className="form-check-label label-css" for="cursorAttract">Attract</label>
                </div>
            </div>
        </form>
    </>
    )
}

export default Menu;