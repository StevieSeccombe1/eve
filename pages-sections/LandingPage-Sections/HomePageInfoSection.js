import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Pets from "@material-ui/icons/Pets";
import LocationOn from "@material-ui/icons/LocationOn";
import Eco from "@material-ui/icons/Eco";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Button from "../../components/CustomButtons/Button";
import {Explore} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function HomePageInfoSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>WELCOME TO STONECHAT MEADOW</h2>
                    <h5 className={classes.description}>
                        Fall back in love with camping in a small, peaceful campsite set in beautiful wild surroundings.
                        A hidden gem. Carbon negative, sustainable, eco-friendly camping with fully kitted prospector
                        tents. We build them, you enjoy a stress free camping experience, we pack them down.
                    </h5>
                    <h5 className={classes.description}>
                        Wake up after a comfortable nights sleep in the tranquil setting of stonechat meadow under the
                        stars and stroll up to the honesty shop for a hot morning cuppa with a selection of local
                        produce to choose from.
                    </h5>
                    <h5 className={classes.description}>
                        Camping is not just for youngsters when it's this good.
                    </h5>
                    <Button
                        color="success"
                        size="lg"
                        href="/booking"
                    >
                        Book Now
                    </Button>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="THE WILDLIFE"
                            description={
                                <>
                                    <p>This campsite is a haven for the keen birdwatcher, with a resident kestrel and
                                        resident swallows, merlins, skylarks and bullfinches along with sightings of
                                        stonechats, barn owls and tawny owls to mention a few. As well as the birdlife,
                                        there are deer, foxes and rabbits that also take residence here. There is a
                                        thriving
                                        butterfly population in the summer, together with a small pond – habitat to the
                                        amphibian section.</p>
                                    <p>Checkout our Gallery and our Blog for updates on the wildlife activity.</p>
                                </>
                            }
                            icon={Pets}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="THE LOCATION"
                            description={
                                <>
                                    <p>The site boasts of absolute convenience to explore Devon. It is located between
                                        the two untamed, windswept wilds of Dartmoor and Exmoor. The gorgeous
                                        countryside in between should not be overlooked, offering ample space to
                                        adventure and marvel. Not to mention the surrounding clear open roads offer
                                        fantastic rides for motorcyclists and you can hit the diverse Devon coast in no
                                        time.</p>
                                    <p>The campsite benefits from no city light pollution which makes for a beautiful
                                        night sky on clear nights. Beneficial to those into astrology or simply after a
                                        romantic evening of stargazing.</p>
                                    <p>All tents are pre-pitched and everything is prepared and made up. We also cater
                                        for non-powered motor homes.</p>
                                    <p>Check out our Tents</p>
                                </>
                            }
                            icon={Explore}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="THE ENVIRONMENT"
                            description={
                                <>
                                    <p>The environment is close to our hearts so we don’t tame the flora for an
                                        immaculate appearance but allow this to flourish into an undisturbed, wild and
                                        natural area, where ample wildlife reside and enjoy their natural habitats.</p>
                                    <p>We’re also proud to say that we’re carbon negative and giving back to the
                                        environment. We’d therefore like to offer anyone staying with us a 10% discount
                                        if travelling in an electric vehicle.</p>
                                    <p>Our family run campsite is perfect for those who want to be immersed in the raw
                                        natural beauty of the countryside. The general ambience allows for a relaxed,
                                        stress free, healthy retreat.</p>
                                    <p>Check out our Facilities</p>
                                </>
                            }
                            icon={Eco}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
