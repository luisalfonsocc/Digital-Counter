import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SimpleCounter from './SimpleCounter';

function App(props) {
  return (
    <div className="App">
      
      <SimpleCounter tenThousand={props.unitThousand} unitThousand={props.unitThousand} hundred={props.hundred} ten={props.ten} unit={props.unit}/>
      
    </div>
  );
}

export default App;
