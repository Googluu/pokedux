import { Col } from 'antd/lib/grid';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
