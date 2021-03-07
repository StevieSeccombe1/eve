import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Eco from "@material-ui/icons/Eco";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import {EmojiFoodBeverage, Kitchen, LocalParking, Wc, WeekendTwoTone} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function FacilitiesInfoSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>FACILITIES</h2>
                        <h5 className={classes.description}>Stonechat Meadow offers essential facilities and some
                            personal touches we hope
                            makes your stay as enjoyable and relaxing as possible.</h5>
                        <h5 className={classes.description}>Homemade Devon cream tea or evening snacks can be provided
                            during your stay.
                            Please let us know in advance of your booking.</h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="HONESTY SHOP"
                            description={
                                <p>The honesty shop stocks the essentials for your stay as well as local produce.
                                    The local produce includes eggs, bacon and pork and other meats from a local
                                    butcher, the sausages on a barbecue are highly recommended.</p>
                            }
                            icon={EmojiFoodBeverage}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="RECREATION AREAS"
                            description={<p>There are also indoor and outdoor seating areas by the shop for those
                                wanting to
                                enjoy an ale and socialise with other guests.</p>}
                            icon={Wc}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="WASHROOM FACILITIES"
                            description={
                                <p>The campsite consists of two toilets and a shower.</p>
                            }
                            icon={WeekendTwoTone}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <InfoArea
                            title="COOKING FACILITIES"
                            description={
                                <p>Each tent comprises of a small gas camp cooker and utensils.</p>
                            }
                            icon={Kitchen}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <InfoArea
                            title="PARKING"
                            description={
                                    <p>Plenty of parking is available at the top of each field.</p>
                                }
                            icon={LocalParking}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
