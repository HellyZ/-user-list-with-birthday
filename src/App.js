import { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList';
import BirthdayList from './components/BirthdayList';

import axios from 'axios';
import './App.css';

function App() {

  const [state, setState] = useState();
  
  useEffect(() => {

    const apiUrl = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

    axios.get(apiUrl).then((resp) => {
      const users = resp.data;
      setState(users);
    });
  }, []);

  console.log(state);
  return (
    <div className="App">
      <div className="employees">
        <EmployeeList users={state} />
      </div>

      <div className="brth-list">
        <BirthdayList users={state} />
      </div>
    </div>
  );
}

export default App;
