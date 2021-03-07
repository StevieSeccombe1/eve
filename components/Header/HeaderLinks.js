/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/tents"
          color="transparent"
          className={classes.navLink}
        >
          Tents
        </Button>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/facilities"
                color="transparent"
                className={classes.navLink}
            >
                Facilities
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/booking"
                color="transparent"
                className={classes.navLink}
            >
                Booking
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/gallery"
                color="transparent"
                className={classes.navLink}
            >
                Gallery
            </Button>
        </ListItem>
    </List>
  );
}
