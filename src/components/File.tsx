import { Typography } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { FileType } from "../types/file.types";
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";

export default function File({ name, isDir }: FileType) {
  const { handleContextMenuOpen } = useContext(MenuContext);
  return (
    <div onContextMenu={ handleContextMenuOpen } className="file-box">
      {
        isDir ? <FolderOutlinedIcon sx={{ width: '100px', height: '100px'}}/> : <InsertDriveFileOutlinedIcon sx={{ width: '100px', height: '100px'}}/>
      }
      <Typography sx={{ textAlign: "center"}}>{name}</Typography>
    </div>
  )
}