import React from 'react';
import './App.css';
import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {CardBody,CardTitle,Card,CardSubtitle,CardText,Row, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import googleIcon from './icons/google-icon.svg';

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
      <Container className='mt-3'>
        <Card>
          <CardBody className='login-card'>
            <CardTitle tag="h5">
              Mesajlaşma Platformuna Hoşgeldiniz!
            </CardTitle>
            <hr/>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Firebase & React.js
            </CardSubtitle>
            <CardText>
              Kayıtlı kullanıcılar listesinden rastgele istediğiniz kişiyle konuşabilirsiniz. <p>Mesajlar uçtan uça şifrelenmiyor ama mesajlarınızı okumuyoruz :)</p>
            </CardText>
            <div class="sign-in-button" onClick={signInWithGoogle}>
              <img className='google-icon' src={googleIcon}/> Giriş Yap
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
