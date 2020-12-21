import React from 'react';
import ImageGrid from './body/ImageGrid';
import Title from './body/Title';
import Upload from './body/Upload';

function App() {
  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid/>
    </div>
  );
}

export default App;
