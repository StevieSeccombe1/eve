import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function BrownfieldBlog() {
    const classes = useStyles();
    return (
        <div id="brownfield" className={classes.section}>
            <div>
                <GridContainer justify="center" className={classes.alignItems}>
                              <GridItem xs={12} sm={12} md={8}>
                                  <h2 className={classes.title}>
                        Brownfield Sites
                        </h2>
<h5 className={classes.subTitle}>Looking to develop on a Brownfield site? Why is air quality an important consideration?</h5>
<h5 className={classes.description}>  
Developers must choose between a “brownfield” or “greenfield” site when deciding on the location for a new development. Generally, greenfield sites are set in more rural areas, whereas brownfield sites are often located in urban settings.
</h5>
                        <h5 className={classes.subTitle}>Favourable planning policy for brownfield sites?</h5>
                        <h5 className={classes.description}>
The National Planning Policy Framework (NPPF) requires councils to encourage the effective use of land within settlements by reusing land that has been previously developed (brownfield land).
</h5><h5 className={classes.description}>Since December 2017, local authorities have been legally required to prepare, maintain and publish a brownfield land register of sites. Registers will help developers to identify potentially suitable brownfield sites for housing development.
</h5><h5 className={classes.description}>Developers are claiming success in a campaign to build at least 110,000 new homes on small brownfield sites in England’s cities after the government agreed to consult on the issue. The Property Week article goes on to discuss how a small sites clause into the recent Levelling Up and Regeneration Bill requires councils to “support opportunities to bring forward sites and apply a presumption in favour of development”, provided at least 60% of homes proposed were affordable.
</h5>

                        <h5 className={classes.subTitle}>Can more be done?</h5>
                        <h5 className={classes.description}>                      
The 2022 State of Brownfield report from the countryside charity CPRE, stated that “Just 45% of available housing units have been granted planning permission and 550,000 homes with planning permission are still awaiting development”. The charity has identified brownfield sites that it says could support the development of over 1.2 million homes.
</h5><h5 className={classes.description}>The report states that “there is still a huge amount of land that can be recycled in our major cities. London boroughs have two of the top three totals of highest brownfield land with housing capacity and Birmingham is in second place. Using that land would take the pressure off the green-belt around those cities.”
</h5>
<h5 className={classes.subTitle}>What does this mean for developers?</h5>
                        <h5 className={classes.description}>
If you are a developer, the key message about brownfield land is that these are sites where the government wants you to build. So in theory, getting planning permission for housing on brownfield land should be straightforward. However, with brownfield sites, come associated environmental impacts that require consideration.
</h5><h5 className={classes.description}>In terms of air quality, developers need to consider that planning a development in an urban setting will mean higher baseline concentrations of PM10, PM2.5 and NO2. Hence, receptors will be introduced into an area of poorer air quality compared to rural greenfield sites. Efficient strategic planning and the adoption of good design principles, that limit the exposure of these harmful pollutants to future occupants of the development, will be required to mitigate poor air quality impacts. In addition, more receptors with a  higher sensitivity, are likely to be present in proximity to brownfield sites; and therefore, measures to minimise the impact on existing receptors will need to be incorporated into the design of the development. 
</h5>
<h5 className={classes.subTitle}>How can an air quality consultant help?</h5>
                        <h5 className={classes.description}>
For pre-application stages, an air quality feasibility assessment can be carried out, to provide an early indication of the implications of choosing a specific site for development, and understand what future assessments may be required.
</h5><h5 className={classes.description}>Construction impacts will require mitigation for both greenfield and brownfield sites, although further mitigation measures and dust and/or air quality monitoring will likely be required for those located in urban areas due to the number and proximity of sensitive receptors.
</h5><h5 className={classes.description}>Prior to the construction phase, the remediation of brownfield sites can lead to emissions of volatile organic compounds (VOCs), due to digging up contaminated soil. Monitoring of VOCs can be carried out to ensure the safety of the surrounding receptors. In addition, occupational monitoring can be carried out to ensure the safety of the workers.
</h5><h5 className={classes.description}>Exe Valley Environmental provide a range of air quality consultancy services to assist with the planning stages of a development, helping to identify mitigation measures that may need incorporating into the design and construction phases of the development.
</h5>
                    </GridItem>
                    </GridContainer>
            </div>
        </div>
    );
}
