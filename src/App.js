import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cheap SPA (Single Page Application) Websites using AWS!
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
        <a href="mailto:cheap.spa.web@gmail.com?subject=Information Request&body=Hi, please send me more information about Cheap SPA Websites. Thank you! Kind regards!" style="text-decoration:none">Send Email</a>
      </header>
    </div>
  );
}

export default App;
