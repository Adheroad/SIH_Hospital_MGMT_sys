import React from "react";
import './Mainindex.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainIndex() {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">E-Hospital </div>
        
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        
        <ul className="sidebar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/dietary">Dietary</Link></li>
          <li><Link to="/beds">Bed-Availability</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <nav className="topbar">
          <div className="topbar-user">
            <span>Welcome, user</span>
            <i className="fa-solid fa-user"></i>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-cards">
          <div className="card">
            <a href="#doctor-availability" className="button">
              <h3>Doctor Availability</h3>
              <button>Check Now</button>
            </a>
          </div>
          <div className="card">
            <a href="#opd-queue" className="button">
              <h3>OPD Queue</h3>
              <button>Check Now</button>
            </a>
          </div>
          <div className="card">
            <a href="#bed-availability" className="button">
              <h3>Real-Time Bed Availability</h3>
              <button>Check Now</button>
            </a>
          </div>
          <div className="card">
            <a href="#feedback-support" className="button">
              <h3>Feedback and Support</h3>
              <button>Check Now</button>
            </a>
          </div>

          {/* Static content */}
          <div className="card">
            <h3>Inventory Items</h3>
            <p>30 Stock</p>
          </div>
          <div className="card">
            <h3>Billing Pending</h3>
            <p>7 Bills</p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="additional-sections">
          <section id="doctor-availability" className="additional-section">
            <a href="https://external-link-to-doctor-availability.com" target="_blank" rel="noopener noreferrer">
              <h3>Doctor Availability</h3>
            </a>
            <p>You can check the availability of our doctors easily through our website. Browse our comprehensive list of specialists and view their available time slots in real-time. Book an appointment that fits your schedule with just a few clicks.</p>
          </section>

          <section id="opd-queue" className="additional-section">
            <a href="https://external-link-to-opd-queue.com" target="_blank" rel="noopener noreferrer">
              <h3>OPD Queue</h3>
            </a>
            <p>You can check the status of the OPD queue in real-time. Stay updated and ensure you have the most up-to-date information before visiting the hospital.</p>
          </section>

          <section id="bed-availability" className="additional-section">
            <a href="https://external-link-to-bed-availability.com" target="_blank" rel="noopener noreferrer">
              <h3>Real-time Bed Availability</h3>
            </a>
            <p>Our website provides real-time updates on bed availability, allowing you to check current bed statuses instantly.</p>
          </section>

          <section id="feedback-support" className="additional-section">
            <a href="https://external-link-to-feedback.com" target="_blank" rel="noopener noreferrer">
              <h3>Feedback and Support</h3>
            </a>
            <p>We value your feedback and are here to assist you. Use our dedicated support section to provide suggestions or report any issues, and our team will promptly address your concerns.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainIndex;
