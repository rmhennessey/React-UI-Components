import React from 'react';
import './Header.css';

function HeaderTitle() {
    return <div className = "header-text"> <p className="intro">Lambda School</p> 
        <p className="handle">@LambdaSchool</p> 
        <p className="handle">• 11 feb</p>
        <p className= "header-body">Let's learn React by building a simple interface with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>;
}

export default HeaderTitle;
