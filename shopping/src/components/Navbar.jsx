import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  StyledMenu,
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "../styles/Navbar.Styled";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import { Grid } from "@mui/material";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { CartState } from "../context/Context";
import Cart from "./Cart";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { state, dispatch } = CartState();

  const {
    productState: { category, searchQuery },
    productDispatch,
  } = CartState();

  const [openCart, setOpenCart] = useState(false);

  const menuId = "primary-search-account-menu";

  return (
    <Box bgcolor="#354656" sx={{ flexGrow: 1, backgroundColor: "#354656" }}>
      <AppBar position="static" style={{ backgroundColor: "#354656" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shop Here
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{ fontSize: 35 }} />
            </IconButton>
            <Typography sx={{ mt: 2, fontSize: 16 }}>Login/SignUp</Typography>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => setOpenCart(true)}
            >
              <Badge badgeContent={state.cart.length} color="error">
                <ShoppingCartIcon style={{ fontSize: 30, ml: 1 }} />
              </Badge>
            </IconButton>
          </Box>
          <Drawer
            open={openCart}
            anchor={"right"}
            onClose={() => setOpenCart(false)}
          >
            <Box sx={{ width: { xs: 350, md: 500 } }}>
              <CloseIcon
                cursor="pointer"
                sx={{ m: 1, textAlign: "right" }}
                onClick={() => setOpenCart(false)}
              />

              <Grid>
                <Cart />
              </Grid>
              <Grid>
                <Button
                  component={Link}
                  to="/ordersummary"
                  variant="contained"
                  sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    bottom: 0,
                    left: 50,
                    backgroundColor: "#86b300",
                    width: { xs: 200, md: 400 },
                  }}
                >
                  View Cart
                </Button>
              </Grid>
            </Box>
          </Drawer>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => setOpenCart(true)}
            >
              <Badge badgeContent={state.cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
