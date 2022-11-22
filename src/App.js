import './App.css';
import Description from './Description';
import Feed from './Feed';
import Followers from './Followers';
import Nickname from './Nickname';
import Picture from './Picture';
import Stories from './Stories';

function App() {
  return (
    <div>
      <Picture/>
      <Nickname/>
      <Followers/>
      <Description/>
      <Stories/>
      <Feed/>
    </div>
  );
}

export default App;
