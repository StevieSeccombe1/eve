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
                        <h2 className={classes.title}>
16/06/22 - Clean Air Day
                        </h2>
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
3.8 million deaths each year are attributable to poor indoor air quality. The biggest culprit of which is household fuel combustion. However, other culprits do exist. A lot can be said for ventilation, but if the ambient air quality is poor this can adversely affect the indoor air quality. <a href="/#enquiries">Contact Exe Valley Environmental to enquire about an indoor air quality survey.</a>
                        </h5>
                        <h5 className={classes.description}>
99% of the world’s population live in places where air pollution levels exceed WHO guideline limits. Exe Valley Environmental offers feasibility air quality reports for developers to understand the air quality risks associated with potential development sites, allowing early advice on the air quality mitigation measures to be considered for potential scheme designs. <a href="/#enquiries">Get in touch with Exe Valley Environmental to discuss your requirements for an air quality assessment.</a>
                        </h5>
                        <h5 className={classes.description}>
Spread the word and inspire others to do their part in cleaning the air we breathe.
                        </h5>
                    </GridItem>
                    <img className={classes.circleBox} width="200px" src="data:image/png;base64,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"/></GridContainer>
            </div>
        </div>
    );
}
