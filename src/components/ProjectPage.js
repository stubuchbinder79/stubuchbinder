import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import allProjects from "../utils/squares";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  title: {
    // ...theme.typography.title,
    color: "white",
    fontFamily: "sans-serif"
  }
}));
var projectInfo = {};
class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    projectInfo = allProjects.find(p => p.id == values.id);

    this.setState({ project: projectInfo });

    console.log(this.state);
  }
  render() {
    const { title, subtitle, description, image } = this.state.project;
    return (
      <Grid container spacing={3}>
        <Grid item xs>
          <Link to={`/`}>
            <Button>
              <h5>back</h5>
            </Button>
          </Link>
        </Grid>
        <Grid item xs>
          <h3 className={classes.title}>{title}</h3>
          <img className={classes.image} src={image} alt={image} />
          <p>{description}</p>
        </Grid>
        <Grid item xs />
      </Grid>
    );
  }
}
export default ProjectPage;
