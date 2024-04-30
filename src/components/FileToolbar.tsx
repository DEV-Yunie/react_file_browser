import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaArrowTurnUp } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import SortIcon from '@mui/icons-material/Sort';
// import { FaSortAmountUpAlt } from "react-icons/fa";
// import { FaSortAmountDownAlt } from "react-icons/fa";
import { FileToolbarProps } from "../types/filetoolbar.types";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortFile } from "../redux/fileReducer";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const handleClickSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickHome = () => {}

  const handleClickUpPath = () => {}
  return (
    <ToolbarContainer>
      <div>
        <IconButton onClick={handleClickHome}><HomeIcon /></IconButton>
        <IconButton onClick={handleClickUpPath}><FaArrowTurnUp /></IconButton>
      </div>
      <FilePathInput>{folderPath}</FilePathInput>
      <div>
        <IconButton onClick={handleShowListFile}><ListIcon /></IconButton>
        <IconButton onClick={handleShowGridFile}><AppsIcon /></IconButton>
        <IconButton onClick={handleClickSort}><SortIcon /></IconButton>
        <Menu id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => { setAnchorEl(null); }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          <MenuItem onClick={() => dispatch(sortFile('name'))} data-tag="name">
            Sort By Name
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortFile('date'))} data-tag="date">
            Sort By Date
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortFile('size'))} data-tag="size">
            Sort By Size
          </MenuItem>
        </Menu>
      </div>
    </ToolbarContainer>
  )
}