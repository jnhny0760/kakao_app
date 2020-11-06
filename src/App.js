import React from 'react';
import{HashRouter, Route} from 'react-router-dom';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chat from './routes/Chat';
import Profile from './routes/Profile'
import Navigation from './component/Navigation'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" active="{color:#527373}" exact={true} component={Friends} />
      <Route path="/chats" active="{color:#527373}" component={Chats} />
      <Route path="/find" active="{color:#527373}" component={Find} />
      <Route path="/more" active="{color:#527373}" component={More} />
      <Route path="/chat" active="{color:#527373}" component={Chat} />
      <Route path="/profile" active="{color:#527373}" component={Profile} />
    </HashRouter>
  )
} 
export default App;