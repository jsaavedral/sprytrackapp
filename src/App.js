import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo}
                    className="App-logo"
                    alt="logo"/>
                <h3>
                    Create low-priced one page websites using AWS Amazon Web Services!
                </h3>

                <div class="wrapper">
                    <div class="card">
                        <a href="https://vuejs.org/" target="_blank">
                            <img src="https://vuejs.org//images/logo.png"/>
                            Vue.js
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://facebook.github.io/react/" target="_blank">
                            <img src="https://daynin.github.io/clojurescript-presentation/img/react-logo.png"/>
                            React.js
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://angularjs.org/" target="_blank"><img src="https://angularjs.org/img/ng-logo.png"/>
                            Angular.js
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://nodejs.org/en/" target="_blank"><img src="https://code-maven.com/img/node.png"/>
                            Node.js
                        </a>
                    </div>
                </div>

                <a className="App-link" href="https://aws.amazon.com/s3/pricing/" target="_blank" rel="noopener noreferrer">
                    Check out: Amazon AWS S3 Princing
                </a>
                <a className="App-link" href="https://aws.amazon.com/free/" target="_blank" rel="noopener noreferrer">
                    Check out: Amazon AWS Free Tier
                </a>
                <a className="App-link" href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">
                    Check out: Amazon AWS Amplify
                </a>
                <p>
                    If you want the long story short, or just need to cut to the chase:
                </p>
                <a className="App-link" href="mailto:cheap.spa.web@gmail.com?subject=Information Request&body=Hi, please send me more information about Cheap SPA Websites. Thank you! Kind regards!">
                    <img src="https://img.icons8.com/fluency/50/000000/apple-mail.png" alt="Send Mail"/>
                </a>
            </header>
        </div>
    );
}

export default App;
