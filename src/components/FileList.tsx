import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { FileType, FileTypeProps } from "../types/file.types"

export default function FileList({ files }: FileTypeProps) {
  return (
    <List>
      {
        files.map((file: FileType, index: number) => {
          return (
            <>
            <ListItem>
              <ListItemIcon>{file.isDir ? <FolderIcon /> : <InsertDriveFileIcon />}</ListItemIcon>
              <ListItemText>{file.name}</ListItemText>
            </ListItem>
            <Divider />
            </>
          )
        })
      }
    </List>
  )
}