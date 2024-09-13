import React, { useState } from 'react';
import './OPDqueue.css'; 
const OPDQueue = () => {
  const [patientName, setPatientName] = useState('');
  const [queue, setQueue] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (patientName) {
      setQueue((prevQueue) => [...prevQueue, patientName]);
      setPatientName('');
    }
  };

  const addPatientToQueue = (name) => {
    setQueue((prevQueue) => [...prevQueue, name]);
  };

  return (
    <div>
      <header>
        <h1>OPD Queue</h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              placeholder="Enter patient name"
            />
            <button type="submit">Add to Queue</button>
          </form>
          <ul id="queue-list">
            {queue.map((patient, index) => (
              <li key={index}>{patient}</li>
            ))}
          </ul>
        </section>
      </main>
      
    </div>
  );
};

export default OPDQueue;