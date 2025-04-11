import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe
        className="tix-embed-frame"
        src="https://lcsc.hometownticketing.com/embed/all?tile_id=1"
        id="iFrameResizer0"
        scrolling="no"
        style={{
          borderWidth: 0,
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          height: '1056px',
          overflow: 'hidden',
        }}
        title="Hometown Ticketing"
      ></iframe>  
    </div>
  );
}

export default App;
