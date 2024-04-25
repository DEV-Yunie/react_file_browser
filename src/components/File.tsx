import { Box, Typography } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { FileType } from "../types/file.types";
import React from "react";
export default function File({ name, isDir }: FileType) {

  return (
    <div >
      {
        isDir ? <FolderOutlinedIcon sx={{ width: '100px', height: '100px'}}/> : <InsertDriveFileOutlinedIcon sx={{ width: '100px', height: '100px'}}/>
      }
      <Typography sx={{ textAlign: "center"}}>{name}</Typography>
    </div>
  )
}