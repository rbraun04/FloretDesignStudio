import React from 'react';
import {useSpring, animated} from 'react-spring'
import logo from './logo.png'
import {Link} from "react-router-dom";
import Img from "./IMG_8265.jpg"
import Flower from "./rename.jpg"
import Image from 'react-bootstrap/Image'
import Brenna1 from './brenna1.jpg'

function App() {
    const props = useSpring({
        opacity: 5,
        from: {opacity:0},
        config:{mass:10, tension:1, friction: 1}
        
    })
    
    return  ( 
        <div>
            
        <animated.div style={props} className=" viewport-header-about">
                <Image className="floret1" src={logo} fluid></Image>
                 </animated.div>
                <animated.div style={props}>
                    <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 about">
                        <h1 className="brenna">MEET BRENNA</h1>
                        <p><strong>Brenna Cavanaugh </strong>was born and raised in the mountains of <strong>Sun Valley, Idaho</strong>.  The natural flora + fauna of the area have brought great inspiration into her unique style.  She has worked in the art and garden field for over 10 years from jewelry design, to large scale <strong>set design, sustainable farming,</strong> to being Ketchum Flower Company’s <strong>lead designer</strong> for 5 years.
                        <p className="quotes">When she is not making flowers you will find her foraging, soaking in hot springs, backpacking in the Sawtooth Mountains, gardening, or costume designing for her annual trip to Burning Man! </p>
                        </p>
                        <div className = "row">
                            <div className="col-md-5">
                                <Image src={Flower} fluid></Image>
                                <p>“Flower’s have their own language, my intention is to let their natural beauty and movement bring to life in helping tell your story. My commitment is to create every floral arrangement as unique and special as you.”
                                    -Brenna
                                </p>
                            </div>
                            <div className="col-md-7">
                                <Image src={Img} fluid ></Image>
                            </div>
                        </div>
                        <div className = "row">
                            <div className="col-md-7">
                                <Image src={Brenna1} fluid></Image>
                                
                            </div>
                            <div className="col-md-5" fluid>
                                <h1 className="sustain">Sustainability + Sourcing
                                </h1>
                                <p>We believe deeply in the importance of high end, ethical sourcing and sustainability. 
We work directly with local family farms here in Idaho as well as Washington, Oregon and California. 
We compost all green waste, repurpose and recycle all packaging and do not use floral foam.
You will also find us sustainably foraging wild areas through out the year. 
</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </animated.div>
        </div>
    )
        
}

export default App;