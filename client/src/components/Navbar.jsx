import React, { useState } from "react";
import { DarkModeOutlined, Menu as MenuIcon, LightModeOutlined, Search, SettingsOutlined, ArrowDropDownOutlined, } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween"
import { useDispatch } from "react-redux"
import { setMode } from "state"
import profileImage from "assets/profile.jpeg"
import { useTheme, Toolbar, AppBar } from "@mui/material";
import { IconButton, InputBase } from '@mui/material';


const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  return
  <AppBar
    sx={{ position: "static", backgorund: "none", boxShadow: "none" }}>
    <Toolbar
      sx={{ justifyContent: "" }}>
      {/* left side */}
      <FlexBetween>
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
          <MenuIcon />
        </IconButton>
        <FlexBetween
          backgorundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      {/* right side */}
      <FlexBetween>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>
      </FlexBetween>
    </Toolbar>
  </AppBar>
};

export default Navbar;
