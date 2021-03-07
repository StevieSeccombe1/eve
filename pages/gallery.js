import React from "react";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionCarousel from "../pages-sections/Components-Sections/SectionCarousel";

const dashboardRoutes = [];

export default function Gallery(props) {
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                brand="Stonechat Meadow"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
                           <SectionCarousel/>
            <Footer />
        </div>
    );
}
