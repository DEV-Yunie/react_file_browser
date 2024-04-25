import { Box, Stack } from "@mui/material";
import FileList from "./FileList";
import FileToolbar from "./FileToolbar";
import { FileBrowserProps } from "../types/filebrowser.types";
import { useState } from "react";
import FileGrid from "./FileGrid";
import { Menu, MenuItem } from "@mui/material";

type ShowType = 'list' | 'grid';

export default function FileBrowser({ fileData, folderPath }: FileBrowserProps) {
  const [fileShowState, setFileShowState] = useState<ShowType>('grid');
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleClose = () => {
    setContextMenu(null);
  }

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null ? {
        mouseX: event.clientX + 2,
        mouseY: event.clientY - 6,
      } : null
    )
  }

  const handleShowListFile = () => {
    setFileShowState('list');
  };

  const handleShowGridFile = () => {
    setFileShowState('grid');
  }
  return (
    <Box height={500} width={1000} p={2} sx={{ border: '1px solid grey', borderRadius: '4px' }}>
      <Stack sx={{ height: '100%'}}>
        <FileToolbar folderPath={folderPath} handleShowListFile={handleShowListFile} handleShowGridFile={handleShowGridFile} />
        <div style={{ height: '100%'}} onContextMenu={handleContextMenu}>
        {
          fileShowState === 'list' ? <FileList files={fileData} /> : <FileGrid files={fileData} />
        }
        </div>
        <Menu open={contextMenu !== null} onClose={handleClose} anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }>
          <MenuItem onClick={handleClose}>Add Folder</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem onClick={handleClose}>Info</MenuItem>
        </Menu>
      </Stack>
    </Box>
  )
}