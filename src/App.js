import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-warning p-4">
        <div className="container">
          <h1 className="header-title">webber</h1>
        </div>
      </header>
      <main className="p-4">
        <h2 className="text-center mt-4">Job Hazard Analysis Builder</h2>
        <div className="d-flex justify-content-center mt-4">
          <div className="w-100" style={{ margin: 0, padding: 0 }}>
            <div className="row g-4 align-items-end" style={{ margin: 0, padding: 0, height: '50%' }}>
              <div id="project-name" className="col-2 p-4" style={{ width: '13%' }}>Project Name:</div>
              <div id="project-name-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
              <div id="job-number" className="col-2 p-4" style={{ width: '13%' }}>Job Number:</div>
              <div id="job-number-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
              <div id="date" className="col-2 p-4" style={{ width: '13%' }}>Date:</div>
              <div id="date-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
            </div>
            <div className="row g-4 align-items-end" style={{ margin: 0, padding: 0, height: '50%' }}>
              <div id="reviewed-by" className="col-2 p-4" style={{ width: '13%' }}>Reviewed By:</div>
              <div id="reviewed-by-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
              <div id="task-to-be-completed" className="col-2 p-4" style={{ width: '13%' }}>Task to be completed:</div>
              <div id="task-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
              <div id="column-5-2" className="col-2 p-4" style={{ width: '20%' }}>Foreman conducting meeting:</div>
              <div id="column-6-input" className="col-3 border-bottom border-dark d-flex align-items-end" style={{ height: '2rem', paddingRight: '1rem', width: '13%' }}>
                <input type="text" className="form-control border-0 p-0" />
              </div>
            </div>
            <div className="row g-4 mt-4" style={{ margin: 0, padding: 0 }}>
              <div id="combined-column" className="col-6 p-4 text-center">
                {/* Text removed */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
