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
        <div className={classes.section}>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Planning"
                            description={
                                <ul>
                                    <li>Air Quality Assessments to support planning applications</li>
                                    <li>Residential Feasibility/Screening Assessments</li>
                                    <li>Air Quality Neutral Assessments</li>
                                    <li>Emissions Mitigation Assessments</li>
                                </ul>
                            }
                            icon={EmojiTransportationIcon}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Construction"
                            description={
                                <ul>
                                    <li>Construction Dust Risk Asessments and Management Plans</li>
                                    <li>Management of construction dust and air quality monitoring</li>
                                </ul>
                            }
                            icon={BuildIcon}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Indoor Air Quality"
                            description={
                                <ul>
                                    <li>Occupational Air Quality Services</li>
                                    <li>Indoor Dust and Air Quality Surveys</li>
                                </ul>
                            }
                            icon={HomeIcon}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
                <Button
                        color="info"
                        size="lg"
                        href="/enquiries"
                    >
                        Enquire Now
                    </Button>
            </div>
        </div>
    );
}
