import React from 'react';

const SkillsBar = ({skill, percentage}) => {
    return (
        <div className="padding">
            <div className="width100 flex-spacebtw">
            <div>{skill}</div>
            <div>{percentage}%</div>
            </div>
            <hr style={{width: `${percentage}%`}}></hr>
        </div>
    )
}
export default SkillsBar;