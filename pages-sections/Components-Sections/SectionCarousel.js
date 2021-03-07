import React from "react";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";

import blueTit from "assets/img/gallery/DSC00003-min-1024x768.jpg";
import tits from "assets/img/gallery/DSC00044-min-1024x768.jpg";
import path from "assets/img/gallery/DSC00052-min-1024x768.jpg";
import grassTent from "assets/img/gallery/DSC00053-min-1024x768.jpg";
import archWay from "assets/img/gallery/DSC00064-min-1024x768.jpg";
import tomatoes from "assets/img/gallery/DSC00070-min-1024x768.jpg";
import budleia from "assets/img/gallery/DSC00074-min-1024x768.jpg";
import wildFlowers from "assets/img/gallery/DSC00075-min-1024x768.jpg";
import showerIn from "assets/img/gallery/DSC00077-min-1024x768.jpg";
import showerOut from "assets/img/gallery/DSC00083-1024x768.jpg";
import bed from "assets/img/gallery/DSC00097-1024x768.jpg";
import tentFlowers from "assets/img/gallery/DSC00109-1024x768.jpg";
import tentChairs from "assets/img/gallery/DSC00112-1024x768.jpg";
import chairs from "assets/img/gallery/DSC00115-1024x768.jpg";
import entranceToSecondField from "assets/img/gallery/DSC01031.jpg";
import wagTail from "assets/img/gallery/DSC01033.jpg";
import tree from "assets/img/gallery/DSC01042.jpg";
import secondField from "assets/img/gallery/DSC01043.jpg";
import blossom from "assets/img/gallery/DSC01048.jpg";
import flowers from "assets/img/gallery/DSC01049.jpg";
import tadPole from "assets/img/gallery/DSC01052.jpg";
import butterfly from "assets/img/gallery/DSC01055.jpg";
import robin from "assets/img/gallery/DSC01061.jpg";
import woodpecker from "assets/img/gallery/DSC01063.jpg";
import birdHouse from "assets/img/gallery/DSC01071.jpg";
import deer from "assets/img/gallery/DSC01131-min.jpg";

export default function SectionCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
            <Card carousel>
                <Carousel {...settings}>
                    <div>
                        <img src={woodpecker} alt="woodpecker" className="slick-image"/>
                    </div>
                    <div>
                        <img src={birdHouse} alt="birdHouse" className="slick-image"/>
                    </div>
                    <div>
                        <img src={deer} alt="deer" className="slick-image"/>
                    </div>
                    <div>
                        <img src={blueTit} alt="Blue Tit" className="slick-image"/>
                        <div className="slick-caption">
                            <h4>
                                Blue Tit enjoying some nuts
                            </h4>
                        </div>
                    </div>
                    <div>
                        <img src={tits} alt="Blue Tits" className="slick-image"/>
                    </div>
                    <div>
                        <img src={path} alt="Path" className="slick-image"/>
                        <div className="slick-caption">
                            <h4>
                                Explore the hidden paths
                            </h4>
                        </div>
                    </div>
                    <div>
                        <img src={grassTent} alt="grassTent" className="slick-image"/>
                    </div>
                    <div>
                        <img src={archWay} alt="archWay" className="slick-image"/>
                    </div>
                    <div>
                        <img src={tomatoes} alt="tomatoes" className="slick-image"/>
                    </div>
                    <div>
                        <img src={budleia} alt="budleia" className="slick-image"/>
                    </div>
                    <div>
                        <img src={showerIn} alt="showerIn" className="slick-image"/>
                    </div>
                    <div>
                        <img src={showerOut} alt="showerOut" className="slick-image"/>
                    </div>
                    <div>
                        <img src={wildFlowers} alt="wildFlowers" className="slick-image"/>
                    </div>
                    <div>
                        <img src={bed} alt="bed" className="slick-image"/>
                    </div>
                    <div>
                        <img src={tentFlowers} alt="tentFlowers" className="slick-image"/>
                    </div>
                    <div>
                        <img src={tentChairs} alt="tentChairs" className="slick-image"/>
                    </div>
                    <div>
                        <img src={chairs} alt="chairs" className="slick-image"/>
                    </div>
                    <div>
                        <img src={entranceToSecondField} alt="entranceToSecondField" className="slick-image"/>
                    </div>
                    <div>
                        <img src={wagTail} alt="wagTail" className="slick-image"/>
                    </div>
                    <div>
                        <img src={tree} alt="tree" className="slick-image"/>
                    </div>
                    <div>
                        <img src={secondField} alt="secondField" className="slick-image"/>
                    </div>
                    <div>
                        <img src={blossom} alt="blossom" className="slick-image"/>
                    </div>
                    <div>
                        <img src={flowers} alt="flowers" className="slick-image"/>
                    </div>
                    <div>
                        <img src={tadPole} alt="tadPole" className="slick-image"/>
                    </div>
                    <div>
                        <img src={butterfly} alt="butterfly" className="slick-image"/>
                    </div>
                    <div>
                        <img src={robin} alt="robin" className="slick-image"/>
                    </div>
                </Carousel>
            </Card>
    );
}
