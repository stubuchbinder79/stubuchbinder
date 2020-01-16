import React from "react";
import Square from "./Square";
import squareData from "../utils/squares";
import Grid from "@material-ui/core/Grid";
import Background from "../";

function HomePage() {
  const projects = squareData.map(project => {
    return <Square key={project.id} square={project} />;
  });
  return (
    <Grid container spacing={3}>
      {projects}
    </Grid>
  );
}

export default HomePage;
