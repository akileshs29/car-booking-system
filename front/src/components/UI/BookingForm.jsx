import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/booking.css";
import "../../styles/payment-method.css";
import { Form, FormGroup } from "reactstrap";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      number: "",
      text: "",
      date: "",
      info: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, number, text, date, info } = this.state;
    console.log(fname, lname, email, number, text, date, info);
    fetch("http://localhost:5001/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        number,
        text,
        date,
        info,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user");
        if (data.status === "ok") {
          toast.success("Your Booking is registered");
        } else if (data.status === "Error") {
          toast.error("Something Went Wrong");
        }
        window.location.reload();
        window.location.replace("https://pages.razorpay.com/pl_Mk6KFlQswbw7xl/view");
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="number"
            placeholder="Phone Number"
            required
            onChange={(e) => this.setState({ number: e.target.value })}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="date"
            placeholder="Date of Booking"
            required
            onChange={(e) => this.setState({ date: e.target.value })}
          />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-1 mb-4">
          <select name="" id="" placeholder="states">
            <option value="1 person">Andhra Pradesh</option>
            <option value="2 person">Arunachal Pradesh</option>
            <option value="3 person">Assam</option>
            <option value="4 person">Bihar</option>
            <option value="5+ person">Chhattisgarh</option>
            <option value="">Goa</option>
            <option value="">Haryana</option>
            <option value="">Jammu and Kashmir</option>
            <option value="">Kerala</option>
            <option value="">Karnataka</option>
            <option value="">Tamil Nadu</option>
            <option value="">Gujarat</option>
            <option value="">Delhi</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form d-inline-block ms-4 mb-4">
          <input type="text" placeholder="City" required />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            type="textarea"
            className="textarea"
            placeholder="Write"
            onChange={(e) => this.setState({ info: e.target.value })}
          ></textarea>
        </FormGroup>
        <div className="payment text-end mt-1 m">
          <button type="submit" >Reserve Now</button>
        </div>

        <ToastContainer />
      </Form>
    );
  }
}
