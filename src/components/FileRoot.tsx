import React from "react";
import { ContextMenuProvider } from "../context/ContextMenu";
import { FileBrowserProps } from "../types/filebrowser.types";
import FileBrowser from "./FileBrowser";
import { FileContextProvider } from "../context/FileDataContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export function Root({ fileData, folderPath }: FileBrowserProps) {
    return (
      <ContextMenuProvider>
        <FileContextProvider>
          <Provider store={store}>
            <FileBrowser fileData={fileData} folderPath={folderPath}/>
          </Provider>
        </FileContextProvider>
      </ContextMenuProvider>
    )
}

export const FileRoot = React.memo(Root);