import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const submitFeedback = async (e) => {
    e.preventDefault();
    const { name, email, feedback } = data;

    console.log("NAME: " + name);
    console.log("EMAIL: " + email);
    console.log("FEEDBACK: " + feedback);

    toast.success("feedback sent");
    setData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitFeedback}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Please enter a name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Provide a valueable feedback..."
            value={data.feedback}
            onChange={(e) => setData({ ...data, feedback: e.target.value })}
          ></textarea>
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
