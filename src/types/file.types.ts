export interface FileType {
  name: string;

  isDir?: boolean;
  modifyData?: Date | string;
}

export interface FileTypeProps {
  files: FileType[] | null;
}