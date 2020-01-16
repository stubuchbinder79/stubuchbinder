import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "320px"
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  banner: {
    ...theme.typography.title,
    position: "absolute",
    top: 0,
    left: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  title: {
    color: "white",
    fontFamily: "sans-serif"
  },
  subtitle: {
    color: "white",
    fontFamily: "sans-serif"
  }
}));

function Square({ square }) {
  const classes = useStyles();

  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={classes.root}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link to={`/project?id=${square.id}`}>
        <div className={classes.container}>
          <img
            className={classes.image}
            src={square.thumbnail}
            alt={square.thumbnail}
          />
          {isShown && (
            <Fade center>
              <div
                className={classes.banner}
                style={{
                  backgroundColor: square.backgroundColor
                }}
              >
                <h3 className={classes.title}>{square.title}</h3>
                <h5 className={classes.subtitle}>{square.subtitle}</h5>
              </div>
            </Fade>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Square;
