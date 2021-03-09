/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import dynamic from 'next/dynamic'

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import InfoArea from "../InfoArea/InfoArea";
import {Email, Phone} from "@material-ui/icons";

const Map = dynamic(() => import("../Map/Map"), {
    ssr: false
});
const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const {whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h4 className={classes.title}>Contact Us</h4>
                            <p><Phone/> 07379864880</p>
                            <p><Email/> info@stonechatmeadow.co.uk</p>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h4 className={classes.title}>Find Us</h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Map/>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <h4>Winkleigh, Devon, EX19 8PR</h4>
                            <p>From the M5, take the exit on to the A30, junction 31. Continue on
                                the A30 for about 20 miles, scraping the northern edge of Dartmoor.
                                Turn right, signposted Winkleigh and Torrington. Continue on the
                                A3124 for 5 miles and turn left at the end of the road at the
                                T-junction. Take the next sharp right, signposted Winkleigh.
                                Continue on the road for about 7 miles which bypasses Winkleigh and
                                then take a right turn to Stonechat Meadow (If you get to the cross
                                roads with the garage on the corner then you have gone too far).
                                Take the first left into the car park signposted Stonechat Meadow"
                            </p>
                        </GridItem>
                    </GridContainer>
                </div>
                <div>
                    &copy; {1900 + new Date().getYear()} Stonechat Meadow
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
