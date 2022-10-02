import { Box, Button, Grid, Link, Typography, Divider } from "@mui/material";
import React from "react";
import { SummaryItem } from "../styles/Summary.Styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { CartState } from "../context/Context";

import { useState } from "react";
import { useEffect } from "react";

const OrderSummary = () => {
  const { state, dispatch } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <Box style={{ maxHeight: "70vh", overflow: "auto" }}>
            {state.cart.map((item) => {
              return (
                <>
                  <Grid container>
                    <ClearIcon
                      sx={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    />
                    <Grid item xs={6} md={2} marginTop={2}>
                      <Box
                        component="img"
                        sx={{ width: 100, marginLeft: 6 }}
                        src={item.image}
                        alt="not Found"
                      />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      md={3}
                      sx={{ marginLeft: 6 }}
                      marginTop={2}
                    >
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          fontSize: "20px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>

                    <Grid container item sx={{ ml: 2, mt: 2 }} md={2}>
                      <Grid item>
                        <AddCircleIcon
                          fontSize="large"
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
                          pl={2.5}
                          pr={2.5}
                        >
                          {item.qty}
                        </Box>
                      </Grid>

                      <Grid item>
                        <RemoveCircleIcon
                          sx={{ color: "#86b300", cursor: "pointer" }}
                          fontSize="large"
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

                    <Grid
                      item
                      md={3}
                      sm={6}
                      xs={12}
                      textAlign="right"
                      marginTop={2}
                      marginRight={4}
                    >
                      <Typography
                        variant="body1"
                        component="span"
                        align="right"
                        sx={{
                          // color: "#ff4d94",
                          // textDecoration: "line-through",
                          fontWeight: "bold",
                          padding: 1,
                        }}
                      >
                        ₹{item.price.toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </>
              );
            })}
          </Box>
        </Grid>
        <Grid item sm={4} sx={12}>
          <Box mr={2}>
            <Typography
              sx={{ fontSize: "20px", color: "#333" }}
              margin={2}
              ml={1}
            >
              SUMMARY
            </Typography>
            <hr style={{ marginBottom: 12, border: "1px solid gray" }}></hr>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <SummaryItem>Price</SummaryItem>
              </Grid>
              <Grid item sm={6} textAlign="right">
                <SummaryItem sx={{ fontWeight: "bold" }}>
                  ₹ {total?.toFixed(2)}
                </SummaryItem>
              </Grid>
              <Grid item sm={6}>
                <SummaryItem>Discount</SummaryItem>
              </Grid>
              <Grid item sm={6} textAlign="right">
                <SummaryItem sx={{ fontWeight: "bold" }}> ₹ 0.00 </SummaryItem>
              </Grid>
              <Grid item sm={6}>
                <SummaryItem>Delivery Charges</SummaryItem>
              </Grid>
              <Grid item sm={6} textAlign="right">
                <SummaryItem sx={{ fontWeight: "bold" }}> Free </SummaryItem>
              </Grid>
            </Grid>
            <hr className="b-m"></hr>
            <Grid container>
              <Grid item sm={6}>
                <Typography
                  sx={{ fontSize: "24px", color: "#111", fontWeight: "bold" }}
                  m={1}
                >
                  Total
                </Typography>
              </Grid>
              <Grid item sm={6} textAlign="right">
                <Typography
                  sx={{ fontSize: "24px", color: "#111", fontWeight: "bold" }}
                  m={1}
                >
                  ₹ {total?.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <hr className="b-m"></hr>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Typography m={1}>Shipping Address</Typography>
              </Grid>
              <Grid item sm={6} textAlign="right">
                <Link
                  href="/order/address"
                  sx={{
                    color: "#84C225",
                    fontWeight: "bold",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                  m={1}
                >
                  Add Address
                </Link>
              </Grid>
            </Grid>
            <hr className="b-m"></hr>
            <hr className="b-mt"></hr>
            <Typography variant="body1" m={1} mb={0} sx={{ color: "#666" }}>
              Payment Mode
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ margin: "8px", mt: "16px" }}
                >
                  Cash On Delivery
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ margin: "8px", border: "2px solid" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="inherit"
                    sx={{ color: "black", margin: "2px" }}
                  >
                    Online Payment
                  </Button>
                </Button>
              </Grid>
              <Grid
                item
                sm={12}
                sx={{ fontSize: "18px", padding: "10px 40px" }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    margin: "8px",
                    width: "450px",
                    backgroundColor: "#84C225 !important",
                  }}
                >
                  Place Order
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default OrderSummary;
