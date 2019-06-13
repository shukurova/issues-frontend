import React from 'react';
import './App.css';
import {IssueList} from "./components/IssueList";

function App() {
  return (
      <div className='container mt-3'>
        <div className='row justify-content-md-center'>
          <div className='col-md6'>
            <IssueList />
          </div>
        </div>
      </div>
  );
}

export default App;
