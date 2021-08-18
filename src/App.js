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
          Amazon AWS S3 Princing
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/free/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon AWS Free Tier
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/amplify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon AWS Amplify
        </a>
        <a href="mailto: cheap.spa.web@gmail.com">Send Email</a>
        <a href="mailto:cheap.spa.web@gmail.com?subject = Information request&body = Message">Send Email</a>
        <a href="mailto:abc@example.com?subject = Feedback&body = Message">
          Send Feedback
        </a>

        <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>

      </header>
    </div>
  );
}

export default App;
