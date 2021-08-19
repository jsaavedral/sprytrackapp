import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cheap SPA (Single Page Application) Websites using AWS Amazon Web Services!
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/s3/pricing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out: Amazon AWS S3 Princing
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/free/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out: Amazon AWS Free Tier
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/amplify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out: Amazon AWS Amplify
        </a>
        <p>
          If you want the long story short, or just need to cut to the chase:
        </p>
        <a 
          className="App-link"
          href="mailto:cheap.spa.web@gmail.com?subject=Information Request&body=Hi, please send me more information about Cheap SPA Websites. Thank you! Kind regards!" >
            <img src="https://img.icons8.com/fluency/50/000000/apple-mail.png" alt="Send Mail"/>
        </a>
      </header>
    </div>
  );
}

export default App;
