/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from 'next/dynamic'
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import InfoArea from "../InfoArea/InfoArea";
import Pets from "@material-ui/icons/Pets";
import LocationOn from "@material-ui/icons/LocationOn";
import Eco from "@material-ui/icons/Eco";
const Map = dynamic(() => import("../Map/Map"), {
  ssr: false
});
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
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
            <GridItem xs={12} sm={12} md={6}>
              <Map/>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                  title="Winkleigh, Devon, EX19 8PR"
                  description="
From the M5, take the exit on to the A30, junction 31. Continue on the A30 for about 20 miles, scraping the northern edge of Dartmoor. Turn right, signposted Winkleigh and Torrington. Continue on the A3124 for 5 miles and turn left at the end of the road at the T-junction. Take the next sharp right, signposted Winkleigh. Continue on the road for about 7 miles which bypasses Winkleigh and then take a right turn to Stonechat Meadow (If you get to the cross roads with the garage on the corner then you have gone too far). Take the first left into the car park signposted Stonechat Meadow"
                  icon={LocationOn}
                  iconColor="info"
                  vertical
              />
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
