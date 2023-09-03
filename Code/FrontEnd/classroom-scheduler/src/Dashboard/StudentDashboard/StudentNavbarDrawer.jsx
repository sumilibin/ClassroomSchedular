import {
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { StudentNavbarData } from "../Components/CommonHeaderData";
import MenuIcon from "@mui/icons-material/Menu";

const StudentNavbarDrawer = () => {
  const [data, setData] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(255, 250, 231)",
            width: "20%",
            alignContent:'center',
            paddingTop:'60px'
          },
        }}
        open={data}
        onClose={() => setData(false)}
      >
        <List>
          {StudentNavbarData.map((link, val) => (
            <ListItemButton
              href={link.link}
              key={val}
              divider
              onClick={() => setData(!data)}
            >
              <InputAdornment position="start">
              {link.icon}
            </InputAdornment>
              <ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "18px",
                  }}
                >
                  {link.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          color: "white",
        }}
        onClick={() => setData(!data)}
      >
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default StudentNavbarDrawer;
