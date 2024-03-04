import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <button className='h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400'>IT</button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400">Medicine</button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400">Sport</button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400">Other...</button>
      
    </Box>
  );
  return (

    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="color-white-100" onClick={toggleDrawer(anchor, true)}> <MenuIcon /> </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
