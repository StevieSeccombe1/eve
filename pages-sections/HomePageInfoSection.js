import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Button from "../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function HomePageInfoSection() {
    const classes = useStyles();
    return (
        <div id="info" className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h4 className={classes.title}>EXE VALLEY ENVIRONMENTAL</h4>
                    <h5 className={classes.description}>
                        Exe Valley Environmental (EVE) provides expert dust and air quality consultancy services to a wide range of sectors
                        including; planning and development (residential, commercial and
                        mixed-use), construction and refurbishment, industrial and indoor air quality.
                    </h5>
                    {/* <Button
                        color="gray"
                        size="lg"
                        href="/enquiries"
                    >
                        Enquire Now
                    </Button> */}
                </GridItem>
            </GridContainer>
        </div>
    );
}
