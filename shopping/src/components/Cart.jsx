import { Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CartState } from "../context/Context";

const Cart = () => {
  const { state, dispatch } = CartState();

  console.log(state.cart);

  return (
    <Box maxHeight={550} overflow="auto">
      {state.cart.map((item) => {
        return (
          <>
            <Grid container>
              <Grid item xs={3} md={3} marginTop={2}>
                <Box
                  component="img"
                  sx={{ width: 100, marginLeft: 2 }}
                  src={item.image}
                  alt="not Found"
                />
              </Grid>

              <Grid
                item
                xs={6}
                md={6}
                marginTop={2}
                marginLeft={3}
                sx={{ ml: { xs: 6 } }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    marginBottom: "7px",
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </Typography>

                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "7px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Quantity:
                    </Typography>
                  </Grid>

                  <Grid item>
                    <AddCircleIcon
                      sx={{
                        color: "#86b300",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        item.qty &&
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: item.qty + 1,
                            },
                          });
                      }}
                    />
                  </Grid>

                  <Grid item>
                    <Box
                      sx={{ textAlign: "center", border: "1px solid" }}
                      pt={0.5}
                      pb={0.5}
                      pl={1.5}
                      pr={1.5}
                    >
                      {item.qty}
                    </Box>
                  </Grid>

                  <Grid item>
                    <RemoveCircleIcon
                      sx={{ color: "#86b300", cursor: "pointer" }}
                      onClick={() => {
                        item.qty &&
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.id,
                              qty: item.qty - 1,
                            },
                          });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} md={2} marginTop={2} marginLeft={3}>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    padding: 1,
                  }}
                >
                  ₹{item.price.toFixed(2) * item.qty}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
          </>
        );
      })}
    </Box>
  );
};

export default Cart;
