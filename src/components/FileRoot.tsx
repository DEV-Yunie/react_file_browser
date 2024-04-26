import React from "react";
import { ContextMenuProvider } from "../context/ContextMenu";
import { FileBrowserProps } from "../types/filebrowser.types";
import FileBrowser from "./FileBrowser";

export function Root({ fileData, folderPath }: FileBrowserProps) {
    return (
      <ContextMenuProvider>
        <FileBrowser fileData={fileData} folderPath={folderPath}/>
      </ContextMenuProvider>
    )
}

export const FileRoot = React.memo(Root);