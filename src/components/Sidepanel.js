import React from 'react';
import { useHistory } from 'react-router-dom';

const SidePanel = () => {
    const history = useHistory();
    return (
        (
            <div>
                <div onClick={() => {
                    history.push('/')
                }}>
                    Home
                </div>
                <div onClick={() => {
                    history.push('/About')
                }}
                    >About
                </div>
                <div onClick={() => {
                    history.push('/Skills')
                }} >
                    Skills
                </div>
                <div onClick={() => {
                    history.push('/Experience')
                }}>
                    Experience
                </div>
                <div onClick={() => {
                    history.push('/Projects')
                }}>
                    Projects
                </div>
            </div>
        )
    )
};

export default SidePanel;