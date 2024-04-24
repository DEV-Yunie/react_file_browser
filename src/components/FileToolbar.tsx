import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import { FileToolbarProps } from "../types/filetoolbar.types";
import { useState } from "react";



export default function FileToolbar({ folderPath, handleShowListFile, handleShowGridFile }: FileToolbarProps) {

  return (
    <Grid container>
      <Grid item><IconButton><HomeIcon /></IconButton></Grid>
      <Grid item xs={6}><Typography>{folderPath}</Typography></Grid>
      <Grid item><IconButton onClick={handleShowListFile}><ListIcon /></IconButton></Grid>
      <Grid item><IconButton onClick={handleShowGridFile}><AppsIcon /></IconButton></Grid>
    </Grid>
  )
}