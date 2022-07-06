import logo from './logo.svg';
import './App.css';
import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = ()=>{
    signInWithPopup(authentication, provider)
.then((re)=>{
  console.log(re);
})
.catch((err)=>{
  console.log(err);
})
  }
  return (
    <div className="App">
<button  onClick={signInWithGoogle}>
  Click Me
</button>
    </div>
  );
}

export default App;
