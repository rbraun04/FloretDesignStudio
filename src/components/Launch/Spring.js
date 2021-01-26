import React from 'react';
import {useSpring, animated} from 'react-spring'
import logo from './logo.png'
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'

function App() {
    const props = useSpring({
        opacity: 5,
        from: {opacity:0},
        config:{mass:30, tension:1, friction: 100}
        
    })
    
    return  ( 
        <div>
             <animated.div style={props}>
                 <Image className="btn viewpoint-header"src={logo} />
        </animated.div>
        <animated.div style={props} className="viewpoint-header3">
                    <Link className="row launchTitle" to="./about">|    Flowers     |</Link>
                    <Link className="row launchTitle" to="./portfolio">|    Styling     |</Link>
                    <Link className="row launchTitle" to="./products">|   Installation  |</Link>
                </animated.div>
        </div>
    )
        
}

export default App;