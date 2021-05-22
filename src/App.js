import React from 'react';
import Weights from './components/Weights'
import SignIn from './components/SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from "./firebase"
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      {user ? <Weights user={user} auth={auth} firestore={firestore} /> : <SignIn auth={auth} />}
    </div>
  );
}

export default App;
