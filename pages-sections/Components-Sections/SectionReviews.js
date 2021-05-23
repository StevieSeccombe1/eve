import React from "react";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import {reviews} from "./reviews";
import Quote from "../../components/Typography/Quote";

export default function SectionReviews() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Card carousel>
            <Carousel {...settings}>
                {reviews.map(review => (
                    <Quote author={review.author} text={review.text} date={review.date} />
                ))}
            </Carousel>
        </Card>
    );
}
