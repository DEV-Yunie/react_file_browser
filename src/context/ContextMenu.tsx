import { Menu, MenuItem } from "@mui/material";
import { createContext, useState } from "react";


interface Props {
  children: JSX.Element | JSX.Element[];
}

const MenuContext = createContext<{
  clickTarget: null;
  menu: { mouseX: number; mouseY: number } | null; // null 또는 객체를 허용하는 타입으로 변경
  handleClick: () => void;
  handleContextMenuClose: () => void;
  handleContextMenuOpen: (event: React.MouseEvent) => void;
}>({
  clickTarget: null,
  menu: null,
  handleClick: () => { },
  handleContextMenuClose: () => { },
  handleContextMenuOpen: (event: React.MouseEvent) => { }
})

const ContextMenuProvider = ({ children }: Props): JSX.Element => {
  const [clickTarget, setClickTarget] = useState<null>(null);
  const [menu, setMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);

  const handleClick = () => {
    setClickTarget(null);
  }

  const handleContextMenuClose = () => {
    setMenu(null);
  }

  const handleContextMenuOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenu(
      menu === null ? {
        mouseX: event.clientX,
        mouseY: event.clientY,
      } : null
    )
  }
  return (
    <MenuContext.Provider value={{ clickTarget, menu, handleClick, handleContextMenuClose, handleContextMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, ContextMenuProvider }