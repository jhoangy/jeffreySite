import './App.css';
import './fonts.css';
import stamp from './images/torontostamp.png';
import Clock from './components/Clock.js';

function App() {
  return (
    <>
      <div class="div-with-pattern">
        <header>
        <div class = 'clock'><Clock timeZone="US/Eastern"/></div>
          <p class = "intro">Hey! I'm a [Whatever tf]</p>
          <p class = 'intro-text'>Today I went on a walk with my dog and it was a pleasant day at the park. I also had sushi with a friend at lunch.</p>
          <p class = "name">Sincerely, Jeffrey Ye</p>
          <section class = 'basedin'>
            <p class = 'basedintext'>Based in</p>
            <img class = 'stamp' src = {stamp}></img>
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
