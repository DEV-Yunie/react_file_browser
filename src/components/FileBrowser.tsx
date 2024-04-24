import { Box, Stack } from "@mui/material";
import FileList from "./FileList";
import FileToolbar from "./FileToolbar";
import { FileBrowserProps } from "../types/filebrowser.types";
import { useState } from "react";
import FileGrid from "./FileGrid";

type ShowType = 'list' | 'grid';

export default function FileBrowser({ fileData, folderPath }: FileBrowserProps) {
  const [fileShowState, setFileShowState] = useState<ShowType>('grid');

  const handleShowListFile = () => {
    setFileShowState('list');
  };

  const handleShowGridFile  = () => {
    setFileShowState('grid');
  }
  return (
    <Box height={500} p={4} sx={{ border: '2px solid grey'}}>
      <Stack>
        <FileToolbar folderPath={folderPath} handleShowListFile={handleShowListFile} handleShowGridFile={handleShowGridFile}/>
        {
          fileShowState === 'list' ? <FileList files={fileData}/> : <FileGrid files={fileData}/>
        }
      </Stack>
    </Box>
  )
}