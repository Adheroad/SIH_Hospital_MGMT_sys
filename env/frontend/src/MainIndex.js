import React from "react";
import './Mainindex.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainIndex() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">E-Hospital</div>
        <ul className="sidebar-links">
          <li><a href="dashboard#">Dashboard</a></li>
          <li><a href="appointments#">Appointments</a></li>
          <li><a href="#patients">Patients</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#dietary">Dietary</a></li>
          <li><a href="#beds">Bed-Availability</a></li>
          <li><a href="#billing">Billing</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <nav className="topbar">
          <div className="topbar-user">
            <span>Welcome, user </span>
            <i className="fa-solid fa-user"></i>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-cards">
          <div className="card">
            {/* Internal link to doctor availability */}
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
          <div className="card">
            <h3>Revenue</h3>
            <p>20,500</p>
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
          <a href="https://external-link-to-doctor-availability.com" target="_blank" rel="noopener noreferrer">
           <h3>OPD Queue</h3>
           </a>
            <p>You can check the status of the OPD queue in real-time. Stay updated and ensure you have the most up-to-date information before visiting the hospital.</p>
          </section>

          <section id="bed-availability" className="additional-section">
          <a href="https://external-link-to-doctor-availability.com" target="_blank" rel="noopener noreferrer">
      <h3>Real-time Bed Availability</h3>
      </a>
            <p>Our website provides real-time updates on bed availability, allowing you to check current bed statuses instantly. This feature helps you make informed decisions and ensures you can secure the appropriate care without unnecessary delays.</p>
          </section>

          <section id="feedback-support" className="additional-section">
        
      <a href="https://external-link-to-doctor-availability.com" target="_blank" rel="noopener noreferrer">
      <h3> Feedback and Support</h3>
      </a>
            <p>We value your feedback and are here to assist you. Use our dedicated support section to provide suggestions or report any issues, and our team will promptly address your concerns to enhance your experience.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainIndex;
