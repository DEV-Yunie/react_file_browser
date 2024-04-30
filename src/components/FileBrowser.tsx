import { useContext, useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import FileList from "./FileList";
import FileToolbar from "./FileToolbar";
import FileGrid from "./FileGrid";
import FileContextMenu from "./FileContextMenu";

import { MenuContext } from "../context/ContextMenu";
import { FileBrowserProps } from "../types/filebrowser.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFiles } from "../redux/fileReducer";

type ShowType = 'list' | 'grid';

export default function FileBrowser({ folderPath, fileData }:FileBrowserProps) {
  const dispatch = useDispatch();
  const fileList = useSelector((state: RootState) => state.fileData.value);


  const [fileShowState, setFileShowState] = useState<ShowType>('grid');
  const { handleContextMenuOpen } = useContext(MenuContext);

  const handleShowListFile = () => {
    setFileShowState('list');
  };

  const handleShowGridFile = () => {
    setFileShowState('grid');
  }

  useEffect(() => {
    dispatch(setFiles(fileData));
  }, []);
  
  return (
    <Box height={500} width={1000} p={2} sx={{ border: '1px solid grey', borderRadius: '4px' }}>
      <Stack sx={{ height: '100%'}}>
        <FileToolbar folderPath={folderPath} handleShowListFile={handleShowListFile} handleShowGridFile={handleShowGridFile} />
        <div style={{ height: '100%'}} onContextMenu={handleContextMenuOpen}>
        {
          fileShowState === 'list' ? <FileList files={fileList} /> : <FileGrid files={fileList} />
        }
        </div>
        <FileContextMenu />
      </Stack>
    </Box>
  )
}