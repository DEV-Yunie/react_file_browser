import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { FaArrowTurnUp } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import SortIcon from '@mui/icons-material/Sort';
import { FileToolbarProps } from "../types/filetoolbar.types";
import styled from "styled-components";

const ToolbarContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  justify-content: space-between;
`

const FilePathInput = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px -4px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-grow: 10;
`;
export default function FileToolbar({ folderPath, handleShowListFile, handleShowGridFile }: FileToolbarProps) {

  return (
    <ToolbarContainer>
      <div>
        <IconButton><HomeIcon /></IconButton>
        <IconButton><FaArrowTurnUp/></IconButton>
      </div>
       <FilePathInput>{folderPath}</FilePathInput>
       <div>
          <IconButton onClick={handleShowListFile}><ListIcon /></IconButton>
          <IconButton onClick={handleShowGridFile}><AppsIcon /></IconButton>
          <IconButton><SortIcon/></IconButton>
       </div>
    </ToolbarContainer>
  )
}