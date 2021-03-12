import { container, title } from "assets/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";
import {grayColor} from "assets/jss/nextjs-material-kit";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container:{
    ...container,
    color: 'black'
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px",
    "& ul": {
      textAlign: 'left'
    }
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
