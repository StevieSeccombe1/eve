import { title } from "assets/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#4c4c4c"
  },
  circleBox: {
    borderRadius: "50%"
  },
  alignItems: {
    display: "flex",
    alignItems: "center"
  }
};

export default productStyle;
