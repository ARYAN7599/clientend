import { useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import NftSell from './nftBuySell/metaMask';

function App() {
  const [files, setFiles] = useState([])

  const getFile = (filename) => {

    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <div className="App">
      <div className="title"><center>Upload file</center></div>
      <FileUpload files={files} setFiles={setFiles}
        getFile={getFile} />
      <FileList files={files} getFile={getFile} />
      <div>
    <NftSell/>
    </div>
    </div>
    
  );
}

export default App;
