import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutUsSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h5 className={classes.description}>
Located in the heart of Exeter in the South West, EVE offers air quality consultancy to a range of sectors.
                        </h5>
                        <h5 className={classes.description}>
Founded in just 2021, EVE is a relatively new business but Kerrie, the founder, brings passion, skill and a friendly attitude to the consultancy.
                        </h5>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
