import React, {useState} from 'react';
import dancingCatGif from "./assets/cat.gif";
import hmmCatGif from "./assets/yes.gif";
import reactLogo from "./assets/react.svg";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <img src={reactLogo} alt="react logo" />
            <div className='title-container'>
                <h1>Tommy's Color Picker</h1>
                <img src={dancingCatGif} alt="Cat gif missing :(" />
            </div>
            <div className="color-display" style={{backgroundColor: color}}>
                <img src={hmmCatGif} alt="Cat gif missing :(" />
            </div>
            <label>
                Select a Color:&nbsp;
                <input type='color' value={color} onChange={handleColorChange}/>
            </label>
            <p>Selected Color: {color}</p>
        </div>
    );
}

export default ColorPicker;