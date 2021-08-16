import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import HomePageInfoSection from "pages-sections/HomePageInfoSection.js";
import Link from "next/link";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Exe Valley Environmental Consultancy"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter responsive image={require("assets/img/timothy-eberly-o849qj6t2qo-unsplash.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Exe Valley Environmental Consultancy</h1>
                            <h4>
                                We are established experts in Dust and Air Quality, providing services to the Planning, Design and Construction sectors.
                            </h4>
                            <br/>
                            <Link href="enquiries">
                            <Button
                                color="white"
                                size="lg"
                            >
                                Make an Enquiry
                            </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div id="infoSection" className={classes.container}>
                    <HomePageInfoSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
