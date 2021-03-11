import { useState } from 'react';
import './App.scss';
import ListBoard from './components/list';

function App() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: "",
    score: ""
  });
  const [err, setErr] = useState(null);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setData(pre => (
      {...pre, [name]: value}
    ));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.name && data.score && data.score >= 0) {
      let listArray = [...list, data];
      listArray.sort((lower, uper) => {
        return Number(uper.score) - Number(lower.score);
      })

      setList(listArray);
      setData({name: "", score: ""});
      setErr(false);
    }
    else {
      setErr(true);
    }
  }

  return (
    <div className="board">
      <form onSubmit={handleSubmit} >
        <h2 className="board__title">LeaderBoard</h2>
        <p>Player</p>
        <input className="board__input" name="name" value={data.name} onChange={handleInputChange}/>
        <p>Score</p>
        <input className="board__input" name="score" value={data.score} onChange={handleInputChange}/>
        <div className="board__result">
          <button className="board__submit">Submit</button>
          {err && <p className="board__err">input errors!</p>}
          {err === false && <p className="board__err">Save score!</p>}
        </div>
        <ListBoard list={list}/>
      </form>
    </div>
  );
}

export default App;
