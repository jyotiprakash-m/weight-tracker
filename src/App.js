import React from 'react';
import Weights from './components/Weights'
import SignIn from './components/SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "./firebase"
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      {user ? <Weights user={user} /> : <SignIn auth={auth} />}
    </div>
  );
}

export default App;
