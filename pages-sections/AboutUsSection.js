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
                            Established in 2021, we are an Exeter based firm that covers the whole of the south and London.
                        </h5>
                        <h5 className={classes.description}>
                            We work on air quality consultancy projects ranging from large scale and national infrastructure
                            developments that require Environmental Impact Assessment (EIA), to standalone air quality and
                            dust assessments for small scale local developments. The firm has extensive experience of
                            working within multi-disciplinary project teams to prepare the air quality, dust,
                            carbon/greenhouse gas, and odour sections of EIAs.
                        </h5>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
