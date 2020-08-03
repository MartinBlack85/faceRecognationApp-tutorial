import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';


const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '20px'}} alt='https://icons8.com/icons/set/brain-3' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;