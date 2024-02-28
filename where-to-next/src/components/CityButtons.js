// components/CityButtons.js
import React from 'react';

const CityButtons = ({ onCityButtonClick }) => {
    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-secondary" onClick={() => onCityButtonClick('City 1')}>City 1</button>
            </div>
            <div className="col">
                <button className="btn btn-secondary" onClick={() => onCityButtonClick('City 2')}>City 2</button>
            </div>
            <div className="col">
                <button className="btn btn-secondary" onClick={() => onCityButtonClick('City 3')}>City 3</button>
            </div>
            <div className="col">
                <button className="btn btn-secondary" onClick={() => onCityButtonClick('City 4')}>City 4</button>
            </div>
        </div>
    );
}

export default CityButtons;
