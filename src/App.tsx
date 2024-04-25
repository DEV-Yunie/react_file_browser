import { useEffect } from 'react';
import FileBrowser from './components/FileBrowser';
import { ContextMenuProvider } from './context/ContextMenu';

let data = {
  "fileData" : [
    { "name": "test1.txt", "isDir": false },
    { "name": "test2.txt", "isDir": false },
    { "name": "test3.txt", "isDir": false },
    { "name": "test4.txt", "isDir": false },
    { "name": "testFolder", "isDir": true }
  ]
}

let folderPath = "/var/users/homes"
function App() {
  return (
    <ContextMenuProvider>
      <FileBrowser fileData={data.fileData} folderPath={folderPath}/>
    </ContextMenuProvider>
  );
}

export default App;
