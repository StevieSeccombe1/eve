import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Toys from "@material-ui/icons/Toys";
import Cloud from "@material-ui/icons/Cloud";
import Build from "@material-ui/icons/Build";

const useStyles = makeStyles(styles);

export default function ServicesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Air Quality"
                            description={
                                <ul>
                                    <li>Air quality assessments ranging from screening to detailed specification</li>
                                    <li>air quality management and action plans</li>
                                    <li>Appraisal of air quality reports for local authorities</li>
                                    <li>Air quality neutral assessment for applications in London</li>
                                    <li>Diffusion tube monitoring</li>
                                    <li>Odour assessment and management plans</li>
                                    <li>Air quality and meteorological monitoring</li>
                                </ul>
                            }
                            icon={Toys}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Dust"
                            description={
                                <ul>
                                    <li>Site specific dust assessments</li>
                                    <li>Dust management and action plans</li>
                                </ul>
                            }
                            icon={Cloud}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Other Services"
                            description={
                                <ul>
                                    <li>Local Authority review and assessment</li>
                                    <li>Residential suitability assessment</li>
                                    <li>Assessment of traffic-related emissions</li>
                                    <li>Detailed dispersion modelling with ADMS-Roads, ADMS 5, AERMOD, and CALPUFF</li>
                                    <li>DMRB screening assessment</li>
                                    <li>Greenhouse gas, carbon assessment, and carbon management</li>
                                </ul>
                            }
                            icon={Build}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
