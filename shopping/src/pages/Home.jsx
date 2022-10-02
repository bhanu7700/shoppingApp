import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <Grid container width="100%">
      <Grid item xs={12} sm={6} md={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
}

export default Home;
