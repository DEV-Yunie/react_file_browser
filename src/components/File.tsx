import { Typography } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { FileType } from "../types/file.types";
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFolderPath } from "../redux/folderReducer";

export default function File({ id, name, isDir }: FileType) {
  const { handleContextMenuOpen } = useContext(MenuContext);
  const dispatch = useDispatch();
  const folderName  = useSelector((state: RootState) => state.folderData.value);
  const handleDoubleClick = (isDir?: boolean, name?: string) => {
    if (isDir) dispatch(setFolderPath(folderName + name))
  }
  return (
    <div onContextMenu={ handleContextMenuOpen } onDoubleClick={() => handleDoubleClick(isDir, name)} className="file-box" id={id}>
      {
        isDir ? <FolderOutlinedIcon sx={{ width: '100px', height: '100px'}}/> : <InsertDriveFileOutlinedIcon sx={{ width: '100px', height: '100px'}}/>
      }
      <Typography sx={{ textAlign: "center"}}>{name}</Typography>
    </div>
  )
}