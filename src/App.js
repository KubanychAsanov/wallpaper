import React, { useState } from 'react';
import ImageGrid from './body/ImageGrid';
import Modal from './body/Modal';
import Title from './body/Title';
import Upload from './body/Upload';

function App() {
  const [selectedImg, setselectedImg] = useState(null);
  
  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid setselectedImg = {setselectedImg}/>
      { selectedImg && <Modal selectedImg = {selectedImg} setselectedImg = {setselectedImg}/>}
    </div>
  );
}

export default App;
