import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import { Box } from "@mui/system";
import SellIcon from "@mui/icons-material/Sell";
import { makeStyles } from "@mui/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Badge } from "@mui/material";
import { CartState } from "../context/Context";

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});

export default function () {
  const { state, dispatch, productState } = CartState();

  console.log(state.cart);

  const transformProducts = () => {
    let sortedProducts = state.products;

    if (productState.searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(productState.searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <Grid
      spacing={2}
      container
      sx={{ marginTop: 5, marginBottom: 5, marginLeft: 4 }}
    >
      {state.products?.map((cardItem) => (
        <Grid item spacing={2} xs={2} sx={{ minWidth: { xs: 250, md: 290 } }}>
          <Card sx={{ width: "100%", height: 480 }} elevation={5}>
            <CardMedia
              component="img"
              height="230"
              width="3"
              image={cardItem.image}
              alt="green iguana"
            />
            <CardContent>
              <Grid sx={{ height: 40 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: 15,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {cardItem.title}
                </Typography>
              </Grid>

              <Grid sx={{ height: 40 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    fontSize: 15,
                    marginBottom: 12,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "11rem",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {cardItem.description}
                </Typography>
              </Grid>

              <Grid sx={{ mt: 1 }}>
                <Rating
                  name="read-only"
                  value={cardItem.rating.rate}
                  readOnly
                />
              </Grid>

              <Grid container sx={{ mt: 1 }} spacing={1}>
                <Grid item>
                  <Typography variant="body1">RS.{cardItem.price}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              {state.cart.some((p) => p.id === cardItem.id) ? (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#86b300" }}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: cardItem,
                    });
                  }}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#354656" }}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: cardItem,
                    });
                  }}
                >
                  Add Cart
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
