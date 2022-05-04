/*eslint-disable*/
import React from "react";
import Link from "next/link";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const {whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
            <div>
                {/* <Phone style={{margin: "0 5px"}}/> */}
                {/* <Email style={{margin: "0 5px"}}/>  */}
                Phone: <a style={{textDecoration: "none", color: "inherit"}} href="tel:+07805951564">07805951564</a> 
                </div>
            <div>
                Email: <a style={{textDecoration: "none", color: "inherit"}} href="mailto:kerrie@evenvironmental.co.uk">kerrie@evenvironmental.co.uk</a>
            </div>
            <div>
                &copy; {1900 + new Date().getYear()} Exe Valley Environmental || Photo Credit: Kerrie Baggs
            </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
