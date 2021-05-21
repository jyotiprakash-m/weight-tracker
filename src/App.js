import React from 'react';
import Weights from './components/Weights'
import SignIn from './components/SignIn'
function App() {
  const user = "ramu";
  return (
    <div className="app">
      {user ? <Weights /> : <SignIn />}
    </div>
  );
}

export default App;
