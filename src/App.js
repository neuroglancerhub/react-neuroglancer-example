import Neuroglancer from '@janelia-flyem/react-neuroglancer';

import logo from './logo.svg';
import './App.css';

const viewerState = {
  layers: {
    greyscale: {
      type: 'image',
      source: 'dvid://https://flyem.dvid.io/ab6e610d4fe140aba0e030645a1d7229/grayscalejpeg',
    },
    segmentation: {
      type: 'segmentation',
      source: 'dvid://https://flyem.dvid.io/d925633ed0974da78e2bb5cf38d01f4d/segmentation',
      segments: [],
    },
  },
  perspectiveZoom: 50,
  navigation: {
    zoomFactor: 8,
  },
  segments: [],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Neuroglancer viewerState={viewerState}  brainMapsClientId="NOT_A_VALID_ID" />
    </div>
  );
}

export default App;
