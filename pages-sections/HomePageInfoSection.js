import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import Cloud from "@material-ui/icons/Cloud";
import Build from "@material-ui/icons/Build";
import Toys from '@material-ui/icons/Toys';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Button from "../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function HomePageInfoSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>EXE VALLEY ENVIRONMENTAL CONSULTANCY</h2>
                    <h5 className={classes.description}>
                        The Exe Valley Environmental (EVE) consultancy team provide expert dust and air quality services
                        to a wide range of sectors including; planning and development (residential, commercial and
                        mixed-use), construction and refurbishment, industrial, roads and the public sector. We are
                        experienced in producing specialist, site-specific air quality consultancy reports for a wide
                        range of clients.
                    </h5>
                    <Button
                        color="info"
                        size="lg"
                        href="/enquiries"
                    >
                        Enquire Now
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}
