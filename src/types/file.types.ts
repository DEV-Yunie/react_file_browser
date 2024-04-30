export interface FileType {
  id: string;
  name: string;

  isDir?: boolean;
  size?: number;
  modifyDate?: Date | string;
}

export interface FileTypeProps {
  files: FileType[] | null;
}