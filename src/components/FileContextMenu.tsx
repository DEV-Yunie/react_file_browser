import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";
import { Menu, MenuItem } from "@mui/material";

export default function FileContextMenu() {
  const { clickTarget, menu, handleContextMenuClose } = useContext(MenuContext);

  return (
    <Menu open={menu !== null}
      onClose={handleContextMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menu !== null
          ? { top: menu.mouseY, left: menu.mouseX }
          : undefined
      }>
      { clickTarget === 'File' ? <MenuItem onClick={handleContextMenuClose}>Delete</MenuItem> : null}
      <MenuItem onClick={handleContextMenuClose}>Add Folder</MenuItem>
      <MenuItem onClick={handleContextMenuClose}>Info</MenuItem>
    </Menu>
  )
}