import { Box, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { FileType } from "../types/file.types";
export default function File({ name, isDir }: FileType) {
  return (
    <Box sx={{ width: '100%'}}>
      {
        isDir ? <FolderIcon /> : <InsertDriveFileIcon />
      }
      <Typography>{name}</Typography>
    </Box>
  )
}