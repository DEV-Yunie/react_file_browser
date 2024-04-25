import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";
import { Menu, MenuItem } from "@mui/material";

export default function FileContextMenu() {
  const { menu, handleContextMenuClose } = useContext(MenuContext);

  return (
    <Menu open={menu !== null}
      onClose={handleContextMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menu !== null
          ? { top: menu.mouseY, left: menu.mouseX }
          : undefined
      }>
      <MenuItem onClick={handleContextMenuClose}>Copy</MenuItem>
      <MenuItem onClick={handleContextMenuClose}>Print</MenuItem>
      <MenuItem onClick={handleContextMenuClose}>Highlight</MenuItem>
      <MenuItem onClick={handleContextMenuClose}>Email</MenuItem>
    </Menu>
  )
}