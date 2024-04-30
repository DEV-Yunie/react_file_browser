import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { FileType, FileTypeProps } from "../types/file.types"
import { useContext } from "react";
import { MenuContext } from "../context/ContextMenu";

export default function FileList({ files }: FileTypeProps) {
  const { handleContextMenuOpen } = useContext(MenuContext);
  return (
    <List>
      {
        files?.map((file: FileType, index: number) => {
          return (
            <div onContextMenu={handleContextMenuOpen} className="file-box" key={file.id} id={file.id}>
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