import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img
        src="https://miro.medium.com/v2/resize:fit:2400/2*XM8EnIy0Za79kG_LxU236g.png"
        alt="Car Logo"
        height="100"
        width="200"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hire-driver">Hire Driver</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/available-jobs">Available Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vehicle-sales">Vehicle Sales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

const Home = () => (
  <section className="jumbotron text-center">
    <h1>Welcome to DRIVER24</h1>
    <p className="lead">
      Your trusted partner for hiring professional drivers and buying quality vehicles.
    </p>
  </section>
);

const Services = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <div className="row">
      {serviceData.map((service, index) => (
        <div className="col-md-4" key={index}>
          <div className="card">
            <img src={service.image} className="card-img-top" alt={service.title} />
            <div className="card-body">
              <h5 className="card-title">
                <Link className="nav-link" to={service.link}>{service.title}</Link>
              </h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const HireDriver = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Hire a Driver</h2>
    <form>
      {driverFormFields.map((field, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === "select" ? (
            <select className="form-control" id={field.id} name={field.name}>
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </section>
);

const AvailableJobs = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Available Jobs</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Location</th>
          <th>Type of Vehicle</th>
          <th>Experience Needed</th>
          <th>Salary per Month</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {jobData.map((job, index) => (
          <tr key={index}>
            <td>{job.name}</td>
            <td>{job.location}</td>
            <td>{job.vehicle}</td>
            <td>{job.experience}</td>
            <td>{job.salary}</td>
            <td>{job.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/hire-driver" element={<HireDriver />} />
      <Route path="/available-jobs" element={<AvailableJobs />} />
    </Routes>
  </Router>
);

export default App;
