import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(``, {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Username..."
              value={formData.username}
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password..."
              value={formData.password}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
// }

export default LoginForm;
