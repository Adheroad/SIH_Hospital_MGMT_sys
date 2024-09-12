import React from "react";
import './Mainindex.css'
import '.'
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
          <i class="fa-solid fa-user"></i>
          
            
          </div>
        </nav>
        
        {/* Dashboard Content */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Patients</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Appointments</h3>
            <p>23</p>
          </div>
          <div className="card">
            <h3>Doctors Available</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>Emergency Requests</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Dietary Plans</h3>
            <p>12 Active</p>
          </div>
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
          <section className="dietary-section">
            <h2>Dietary Overview</h2>
            <p>Manage patient diets and monitor meal plans for balanced nutrition.</p>
          </section>

          <section className="inventory-section">
            <h2>Bed-Availability</h2>
            <p>Check the availability of beds </p>
          </section>

          <section className="billing-section">
            <h2>Billing and Finance</h2>
            <p>Oversee pending bills, transactions, and overall hospital revenue.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainIndex;