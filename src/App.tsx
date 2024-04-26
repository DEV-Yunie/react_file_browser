import { FileRoot } from "./components/FileRoot";

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
    <FileRoot fileData={data.fileData} folderPath={folderPath}/>
  );
}

export default App;
