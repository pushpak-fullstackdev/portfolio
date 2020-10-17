import React from 'react';
import Card from './Card';

const Body = () => (
    <div className="grid">
        <div className="sidepanel">
            <div  className="btn">
            Projects
            </div>
            <div  className="btn">
            Skills
            </div>
        </div>
        <div className="flex-container-row">
        {[1, 2, 3 , 4].map(project => <Card />)}
    </div>
    </div>
);

export default Body;