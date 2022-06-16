import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CleanAirDayBlog() {
    const classes = useStyles();
    return (
        <div id="cleanairday" className={classes.section}>
            <div>
            <h2 className={classes.title}>16/06/22 - Clean Air Day</h2>
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
                    <img className={classes.circleBox} width="200px" src="https://media-exp1.licdn.com/dms/image/C4D03AQFzkL_au1UoSA/profile-displayphoto-shrink_400_400/0/1617888199178?e=1655942400&v=beta&t=H_g34iiL3x6c5Q2ODGNAUKcr9EC3GfYEZIWkQ9O_vyg"/></GridContainer>
            </div>
        </div>
    );
}
