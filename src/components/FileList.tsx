import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { FileType, FileTypeProps } from "../types/file.types"
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { setFolderPath } from "../redux/folderReducer";
import { RootState } from "../redux/store";

export default function FileList({ files }: FileTypeProps) {
  const { handleContextMenuOpen } = useContext(MenuContext);
  const dispatch = useDispatch();
  const folderName  = useSelector((state: RootState) => state.folderData.value);
  const handleDoubleClick = (isDir?: boolean, name?: string) => {
    if (isDir) dispatch(setFolderPath(folderName + name))
  }

  return (
    <List>
      {
        files?.map((file: FileType, index: number) => {
          return (
            <div onContextMenu={handleContextMenuOpen} onDoubleClick={() => handleDoubleClick(file.isDir, file.name)} className="file-box" key={file.id} id={file.id}>
              <ListItem>
                <ListItemIcon>{file.isDir ? <FolderIcon /> : <InsertDriveFileIcon />}</ListItemIcon>
                <ListItemText>{file.name}</ListItemText>
              </ListItem>
              <Divider />
            </div>
          )
        })
      }
    </List>
  )
}