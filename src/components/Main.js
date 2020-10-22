import React from 'react';
import SidePanel from './Sidepanel';
import Body from './Body';

const Main = ({ child }) => {
    return (
        (
            <div className="grid">
                <SidePanel />
                <Body child={child} />
            </div>
        )
    )
}

export default Main;