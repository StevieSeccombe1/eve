import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import img from "assets/img/kerrieprofile.jpeg";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutUsSection() {
    const classes = useStyles();
    return (
        <div id="aboutUs" className={classes.section}>
            <div>
            <h2 className={classes.title}>About Us</h2>
                <GridContainer justify="center" className={classes.alignItems}>
                    <GridItem xs={12} sm={12} md={8}>
                        <h5 className={classes.description}>
Located in the heart of Exeter in the South West, EVE offers air quality consultancy to a range of sectors.
                        </h5>
                        <h5 className={classes.description}>
Kerrie, the founder of Exe Valley Environmental, brings passion, skill and a friendly attitude to consultancy.
She has over seven years' experience in the industry working on a range of projects, from major infrastructure and large-scale mixed-use developments to early feasibility assessments for residential developments and indoor air quality surveys.
                        </h5>
                        <h5 className={classes.description}>
Kerrie is a member of the Institute of Air Quality Management, a member of the Institute of Environmental Sciences and a practitioner of the Institute of Environmental Management & Assessment.
                        </h5>
                    </GridItem>
                    <img className={classes.circleBox} width="200px" alt="Kerrie Baggs - Air Quality Consultant" src={img}/></GridContainer>
            </div>
        </div>
    );
}
