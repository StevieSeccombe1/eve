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
Don’t take for granted the air we breathe.
                        </h5>
                        <h5 className={classes.description}>
Today is Clean Air Day. The UK’s largest air pollution campaign. The purpose is to encourage behavioural change to improve air quality.
                        </h5>
                        <h5 className={classes.description}>
This can vary dramatically, from developers opting for sustainable sources of energy supply to their prospective new developments, or individuals choosing not to purchase that luxury diesel 4x4 when living in a city next to a primary school. It all helps.
                        </h5>
                        <h5 className={classes.description}>
Not only will these types of behavioural changes make a difference to localised air quality, but air quality is also closely linked to the earth’s climate and ecosystems globally. With many drivers of air pollution (i.e. combustion of fossil fuels) also being sources of greenhouse gas emissions. Therefore, a difference can be made to both climate and health.
                        </h5>
                        <h5 className={classes.description}>
Poor air quality can occur in both ambient (outdoor) and indoor environments.
                        </h5>
                        <h5 className={classes.description}>
3.8 million deaths each year are attributable to poor indoor air quality. The biggest culprit of which is household fuel combustion. However, other culprits do exist. A lot can be said for ventilation, but if the ambient air quality is poor this can adversely affect the indoor air quality. Contact Exe Valley Environmental to enquire about an indoor air quality survey.
                        </h5>
                        <h5 className={classes.description}>
99% of the world’s population live in places where air pollution levels exceed WHO guideline limits. Exe Valley Environmental offers feasibility air quality reports for developers to understand the air quality risks associated with potential development sites, allowing early advice on the air quality mitigation measures to be considered for potential scheme designs.
                        </h5>
                        <h5 className={classes.description}>
Spread the word and inspire others to do their part in cleaning the air we breathe.
                        </h5>
                    </GridItem>
                    <img className={classes.circleBox} width="200px" src="https://media-exp1.licdn.com/dms/image/C4D03AQFzkL_au1UoSA/profile-displayphoto-shrink_400_400/0/1617888199178?e=1655942400&v=beta&t=H_g34iiL3x6c5Q2ODGNAUKcr9EC3GfYEZIWkQ9O_vyg"/></GridContainer>
            </div>
        </div>
    );
}
