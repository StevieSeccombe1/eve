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
Choosing between a “brownfield” or “greenfield” site gives developers different barriers and
opportunities. Generally, greenfield sites are in more rural areas and brownfield sites are located in
urban settings. An urban environment often means more focus on air quality.</h5>
                        <h5 className={classes.subTitle}>Favourable planning policy for brownfield sites?</h5>
                        <h5 className={classes.description}>
                        The National Planning Policy Framework (NPPF) requires councils to encourage the effective use of
land within settlements by reusing land that has been previously developed (brownfield land).</h5><h5 className={classes.description}>Since December 2017, local authorities have been legally required to prepare, maintain and publish a
brownfield land register of sites. Registers will help developers to identify potentially suitable

brownfield sites for housing development.</h5><h5 className={classes.description}>Developers are claiming success in a campaign to build at least 110,000 new homes on small
brownfield sites in England’s cities after the government agreed to consult on the issue. The <a href="https://www.propertyweek.com/news/developers-celebrate-greenlight-for-consultation-on-brownfield-sites/5123341.article?adredir=1">Property
Week article</a> goes on to discuss how a small sites clause into the recent Levelling Up and
Regeneration Bill requires councils to “support opportunities to bring forward sites and apply a
presumption in favour of development”, provided at least 60% of homes proposed were affordable.</h5>

                        <h5 className={classes.subTitle}>Can more be done?</h5>
                        <h5 className={classes.description}>                      
                        The <a href="https://www.cpre.org.uk/wp-content/uploads/2022/12/State-of-Brownfield-2022-FINAL-FORMATTED-15-12-2022.pdf">2022 State of Brownfield report</a> from the countryside charity CPRE, stated that “Just 45% of
available housing units have been granted planning permission and 550,000 homes with planning
permission are still awaiting development”. The charity has identified brownfield sites that it says

could support the development of over 1.2 million homes.</h5><h5 className={classes.description}>The report states that “there is still a huge amount of land that can be recycled in our major cities.
London boroughs have two of the top three totals of highest brownfield land with housing capacity
and Birmingham is in second place. Using that land would take the pressure off the green belt around

those cities.”</h5>
<h5 className={classes.subTitle}>What does this mean for developers?</h5>
                        <h5 className={classes.description}>
                        If you are a developer, the key message about brownfield land is that these are sites where the
government wants you to build. So in theory, getting planning permission for housing on brownfield
land should be straightforward. However, with brownfield sites come different environmental impacts.</h5><h5 className={classes.description}>For air quality, developers need to consider that planning a development in an urban setting will mean
higher baseline concentrations of PM10, PM2.5 and NO2. Hence, new receptors will experience
poorer air quality compared to rural greenfield sites. To mitigate air quality impacts, developers need
efficient strategic planning and to adopt good design principles, that limit the exposure of these

harmful pollutants to future occupants. In addition, more receptors with a higher sensitivity, are likely
to be present around brownfield sites; and therefore, measures to minimise the impact on existing

receptors will need to be incorporated into the design of the development.</h5>
<h5 className={classes.subTitle}>How can an air quality consultant help?</h5>
                        <h5 className={classes.description}>
                        For pre-application stages, an air quality feasibility assessment can be carried out, to give an early
indication of the implications of choosing a specific site for development, inform the design and

understand what future assessments may be required.</h5><h5 className={classes.description}>CConstruction impacts will require mitigation for both greenfield and brownfield sites, although further
mitigation measures and dust and/or air quality monitoring will likely be required for those located in

urban areas due to the number and proximity of sensitive receptors.</h5><h5 className={classes.description}>Prior to the construction phase, the remediation of brownfield sites can lead to emissions of volatile
organic compounds (VOCs), due to digging up contaminated soil. Monitoring of VOCs can be carried
out to ensure the safety of the surrounding receptors. In addition, occupational monitoring can be

carried out to ensure the safety of the workers.</h5><h5 className={classes.description}>Exe Valley Environmental provide a range of air quality consultancy services to assist with the various
stages of a development, helping to inform the design, identify mitigation measures for construction
and operation, and to achieve high-quality development that delivers for air quality.</h5>
                    </GridItem>
                    </GridContainer>
            </div>
        </div>
    );
}
