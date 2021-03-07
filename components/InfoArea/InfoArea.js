import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical, icon } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      {icon && (<div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>)}
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
  icon: null,
  description1: null,
  description2: null,
  description3: null,
  description4: null,
};

InfoArea.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  description4: PropTypes.string,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};
