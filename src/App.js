import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe
        className="tix-embed-frame"
        src="https://onboardingtest36.hometownticketing.com/embed/all"
        id="iFrameResizer0"
        scrolling="no"
        style={{
          borderWidth: 0,
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          height: '2056px',
          overflow: 'hidden',
        }}
        title="Hometown Ticketing"
      ></iframe>  
    </div>
  );
}

export default App;
