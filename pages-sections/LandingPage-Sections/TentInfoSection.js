import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Link from "next/link";
// @material-ui/icons
import Eco from "@material-ui/icons/Eco";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import {Assignment, Home, PlaylistAddCheck} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TentInfoSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="OUR TENTS"
                            description={
                                <>
                                    <p>The campsite consists of only 4 prospector tents, with 2 in each field, this way
                                        you can enjoy your privacy and the peace and quiet without being crowded on a
                                        busy campsite.</p>
                                    <p>The tents are designed to have ample space, indoors and out, with a cosy
                                        interior. Each tent sleeps 2 persons.</p>
                                    <p>The tents come with the essentials, with some added extras to make your stay more
                                        comfortable.</p>
                                    <p>Check out our <Link href="gallery">Gallery</Link></p>
                                </>
                            }
                            icon={Home}
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="INCLUDED WITH THE TENT"
                            description={
                                <ul>
                                    <li>two single camp beds (can be pushed together)</li>
                                    <li>quilted sleeping bags designed to ensure a good nights sleep</li>
                                    <li>extra blankets and throws</li>
                                    <li>hot water bottles upon request during the colder months</li>
                                    <li>gas camping stove</li>
                                    <li>cooking utensils</li>
                                    <li>2 camping chairs</li>
                                </ul>
                            }
                            icon={Assignment}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="RECOMMENDED TO BRING"
                            description={<ul>
                                <li>your favourite pillow</li>
                                <li>toiletries</li>
                                <li>towel</li>
                                <li>walking boots/wellies</li>
                                <li>binoculars</li>
                            </ul>}
                            icon={PlaylistAddCheck}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
