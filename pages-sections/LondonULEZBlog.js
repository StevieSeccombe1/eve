import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import img from "assets/img/ulez.jpg";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function LondonULEZBlogBlog() {
    const classes = useStyles();
    return (
        <div id="londonulez" className={classes.section}>
            <div>
                        <h2 className={classes.title}>
                        London ULEZ Expansion
                        </h2>
                <GridContainer justify="center" className={classes.alignItems}>
                             <img  width="200px" src={img}/>
                              <GridItem xs={12} sm={12} md={8}>
                        <h5 className={classes.description}>
London’s Ultra Low Emission Zone (ULEZ) is due to encompass the whole of the city next year. This
means 5m more Londoners will be covered by the scheme. This increase in size will be effective from
Tuesday 29th August 2023.
</h5>
                   
<h5 className={classes.subTitle}>History of the ULEZ in London</h5>
<h5 className={classes.description}>  
On 8 April 2019 the Mayor of London launched the ULEZ in central London, dubbed the world’s first
24-hour ULEZ. On 25 October 2021 the zone was expanded up to, but not including, the North and
South Circular Roads. Now, the latest expansion plans, will include the whole of the city in August
2023.
</h5>
                        <h5 className={classes.description}>
The ULEZ does not operate in isolation. It operates in conjunction with the London-wide Low
Emission Zone (LEZ) which was originally launched in 2008.
</h5>
                        <h5 className={classes.subTitle}>How has the ULEZ affected pollution levels in London?</h5>
                        <h5 className={classes.description}>
The ULEZ is highly targeted at getting the most polluting vehicles off the streets in London.
Evidence around the effects of the existing ULEZ shows how much has been achieved since the
initiative first launched, with roadside pollution levels for some emissions falling by 44% in central
London and 20% for inner London.
</h5>

                        <h5 className={classes.subTitle}>What the ULEZ expansion plans means</h5>
                        <h5 className={classes.description}>                      
5m more Londoners will be covered by the scheme. As part of the latest expansion, a £110m
scrappage scheme will be established to help more people switch to compliant vehicles, which for
the first time will also cover costs of retrofitting for successful applicants. More support has been
made available for disabled people set to be impacted, with longer exemption periods for disabled
drivers (until October 2027) and community transport minibuses run by non-profit organisations
(until October 2025).
</h5>
                        <h5 className={classes.description}>
The ULEZ standards are not changing – this means that if you do not currently pay the charge for
your vehicle, it will remain compliant after these changes come into effect. 
The ULEZ will continue to apply 24 hours a day every day of the year except for Christmas Day (when
there is no public transport).
</h5>
                        <h5 className={classes.description}>
Developers will need to consider the impact of the introduction of the ULEZ when planning projects
in London.
</h5>
<h5 className={classes.subTitle}>Other ongoing changes that may affect developments in London</h5>
<h5 className={classes.description}>
The London wide construction machinery Low Emission Zone will affect the construction phase of
developments. Non-Road Mobile Machinery (NRMM), particularly from the construction sector, is a
significant contributor to London’s air pollution. Certain construction and delivery vehicles will be
required to conform to Euro VI emission standards, or pay a daily charge to enter the ULEZ, in
addition to any congestion and LEZ charges. 
</h5>
                        <h5 className={classes.description}>
The mayors air quality programme is overseeing a marked increase in electric vehicle charging
infrastructure. Therefore, an increase in electric vehicle infrastructure for new developments is
encouraged. In addition, many developments are now looking to include infrastructure to 100% of
parking spaces to allow for easy uptake of EV charging units across the development in the future.
</h5>
                        <h5 className={classes.description}>
Another action from the mayors air quality programme has been undertaking air quality audits in
schools and nurseries across London boroughs to assess air quality, and thus making a series of
recommendations to protect pupils. The results are likely to support the emerging drive to
understand and take into account sensitive receptors in regards to air quality when planning new
developments. Other sensitive receptors include, but are not limited to, hospitals, elderly housing
and convalescent facilities.
                        </h5>
                    </GridItem>
                    </GridContainer>
            </div>
        </div>
    );
}
