import { FileType } from "./file.types";

export interface FileBrowserProps {
  fileData: FileType[];
  folderPath: string;
}