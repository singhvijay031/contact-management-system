import "../assets/css/Register.css";

const Register = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Create Account</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="*******"
            name="password"
          />
        </div>
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
