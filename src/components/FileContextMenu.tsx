import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteFile } from "../redux/fileReducer";

export default function FileContextMenu() {
  const { clickTarget, targetID, menu, handleContextMenuClose } = useContext(MenuContext);
  const dispatch = useDispatch();

  const handleFileDelete = () => {
    console.log(targetID);
    dispatch(deleteFile(targetID));

    // const result = axios.post('/sms/remove-file', {targetID});
    // if (result) {
    //   
    //   toast.success();
    // } else {
    //   toast.error();
    // }
    handleContextMenuClose();
  }

  return (
    <Menu open={menu !== null}
      onClose={handleContextMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menu !== null
          ? { top: menu.mouseY, left: menu.mouseX }
          : undefined
      }>
      { clickTarget === 'File' ? <MenuItem onClick={handleFileDelete}>Delete</MenuItem> : null}
      <MenuItem onClick={handleContextMenuClose}>Add Folder</MenuItem>
      <MenuItem onClick={handleContextMenuClose}>Info</MenuItem>
    </Menu>
  )
}