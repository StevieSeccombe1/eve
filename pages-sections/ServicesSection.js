import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import Button from "../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function ServicesSection() {
    const classes = useStyles();
    return (
        <div id="services" className={classes.section}>
            <div>
            <h2 className={classes.title}>Our Services</h2>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Planning"
                            description={
                                <ul>
                                    <li>Air quality assessments to support planning applications</li>
                                    <li>Air Quality Assessments for EIA</li>
                                    <li>Support discharging air quality conditions</li>
                                    <li>Residential feasibility/screening assessments</li>
                                    <li>Odour assessments</li>
                                    <li>Air quality neutral assessments</li>
                                    <li>Emissions Mitigation Assessments</li>
                                </ul>
                            }
                            icon={EmojiTransportationIcon}
                            iconColor="gray"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Construction"
                            description={
                                <ul>
                                    <li>Construction dust risk assessments and management plans</li>
                                    <li>Management of construction dust and air quality monitoring</li>
                                </ul>
                            }
                            icon={BuildIcon}
                            iconColor="gray"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Indoor Air Quality"
                            description={
                                <ul>
                                    <li>Occupational air quality services</li>
                                    <li>Indoor dust and air quality surveys</li>
                                </ul>
                            }
                            icon={HomeIcon}
                            iconColor="gray"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
                {/* <Button
                        color="gray"
                        size="lg"
                        href="/enquiries"
                    >
                        Enquire Now
                    </Button> */}
            </div>
        </div>
    );
}
