import { createContext, useState } from "react";


interface Props {
  children: JSX.Element | JSX.Element[];
}

const MenuContext = createContext<{
  clickTarget: string | null;
  targetID: string,
  menu: { mouseX: number; mouseY: number } | null; // null 또는 객체를 허용하는 타입으로 변경
  handleContextMenuClose: () => void;
  handleContextMenuOpen: (event: React.MouseEvent) => void;
}>({
  clickTarget: null,
  targetID: '',
  menu: null,
  handleContextMenuClose: () => { },
  handleContextMenuOpen: (event: React.MouseEvent) => { }
})

const ContextMenuProvider = ({ children }: Props): JSX.Element => {
  const [clickTarget, setClickTarget] = useState<string | null>(null);
  const [menu, setMenu] = useState<{ mouseX: number; mouseY: number } | null>(null);
  const [targetID, setTargetID] = useState<string>('');

  const handleContextMenuClose = () => {
    setMenu(null);
  }

  const handleContextMenuOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.currentTarget);
    if (event.currentTarget.className === 'file-box') {
      setClickTarget('File');
      setTargetID(event.currentTarget.id);
    } else {
      setClickTarget('Back')
    }
    setMenu(
      menu === null ? {
        mouseX: event.clientX,
        mouseY: event.clientY,
      } : null
    )
  }
  return (
    <MenuContext.Provider value={{ clickTarget, menu, targetID, handleContextMenuClose, handleContextMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, ContextMenuProvider }