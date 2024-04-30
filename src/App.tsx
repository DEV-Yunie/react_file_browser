import { FileRoot } from "./components/FileRoot";

let data = {
  "fileData" : [
    { "id": "123", "name": "test1.txt", "isDir": false, size: 123, modifyDate: "1919-10-31 00:00:30"},
    { "id": "1234", "name": "aest2.txt", "isDir": false, size: 1233, modifyDate: "2021-10-31 00:00:30" },
    { "id": "1235", "name": "testb.txt", "isDir": false, size: 1232, modifyDate: "2012-10-31 00:00:30" },
    { "id": "1236", "name": "tgst4.txt", "isDir": false, size: 1123, modifyDate: "2024-10-31 00:00:30"},
    { "id": "1237", "name": "testFolder", "isDir": true, size: 1323, modifyDate: "2023-10-31 00:00:30" }
  ]
}

let folderPath = "/var/users/homes"
function App() {
  return (
    <FileRoot fileData={data.fileData} folderPath={folderPath}/>
  );
}

export default App;
