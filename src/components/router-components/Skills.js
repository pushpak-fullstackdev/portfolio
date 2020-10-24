import React from 'react';
import SkillsBar from '../SkillsBar';

const Skills = () => {
    return (
        (
            <div className="width100 flex-container-col">
                <div className="myintro height-5vh">Why Choose Me</div>
                <div className="aboutme height-10vh">My expertise area</div>
                <div className="skills-grid height-80vh">
                    <div>
                    <SkillsBar skill="JavaScript" percentage="90" />
                    <SkillsBar skill="Node" percentage="80" />
                    <SkillsBar skill="ReactJs" percentage="70" />
                    <SkillsBar skill="Vue Js" percentage="70" />
                    <SkillsBar skill="Angular" percentage="70" />
                    <SkillsBar skill="HTML" percentage="70" />
                    <SkillsBar skill="MySql" percentage="70" />
                    </div>
                    <div>
                    <SkillsBar skill="Docker" percentage="70" />
                    <SkillsBar skill="CSS" percentage="70" />
                    <SkillsBar skill="React Native" percentage="60" />
                    <SkillsBar skill="AWS" percentage="60" />
                    </div>
                </div>
            </div>
        )
    )
}

export default Skills;