import { createContext, useState } from "react";
import { FileType } from "../types/file.types";
interface Props {
  children: JSX.Element | JSX.Element[];
}
interface FileContextType {
  fileList: FileType[] | null;
  handleSortFilesByName: () => void;
  handleDelete: () => void;
  handleInfo: () => void;
  handleSetFiles: (files: FileType[] | null) => void;
}

const FileDataContext = createContext<FileContextType>({
  fileList: null,
  handleSortFilesByName: () => {},
  handleDelete: () => {},
  handleInfo: () => {},
  handleSetFiles: () => {},
});

const FileContextProvider = ({ children }: Props): JSX.Element => {
  const [fileList, setFiles] = useState<FileType[] | null>(null);

  const handleSortFilesByName = () => {
    fileList?.sort((a,b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    setFiles(fileList);
  }
  const handleInfo = () => {};

  const handleDelete = () => {};

  const handleSetFiles = (files: FileType[] | null) => {
    setFiles(files);
  }
  return (
    <FileDataContext.Provider value={{ fileList, handleSortFilesByName, handleDelete, handleInfo, handleSetFiles }}>
      {children}
    </FileDataContext.Provider>
  )
}

export { FileDataContext, FileContextProvider }