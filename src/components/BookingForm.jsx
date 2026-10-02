import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { locations } from "../utils";

export default function BookingForm({
  selectedSeats,
  setSearchState,
  searchState,
  setSelectedSeats
}) {
  const navigate = useNavigate();

  return (
    <div className="text-center">

      <h5>
        {searchState.from} To {searchState.to}
      </h5>

      <h5>
        Date: {searchState.date}
      </h5>

      <br />

      <h5>
        Please fill the below Details
      </h5>

      {selectedSeats.map((data) => (

        <div key={data}>

          <div className="my-3">
            Seat No: {data}
          </div>

          <Form.Group className="d-flex justify-content-center align-items-center mb-3">

            <Form.Label
              style={{
                width: "50px",
                marginBottom: "0",
                marginRight: "10px",
                textAlign: "right",
              }}
            >
              Name:
            </Form.Label>

            <Form.Control
              style={{
                width: "225px",
              }}
              placeholder="Enter your name"
              type="text"
            />

          </Form.Group>

          <Form.Group className="d-flex justify-content-center align-items-center mb-3">

            <Form.Label
              style={{
                width: "50px",
                marginBottom: "0",
                marginRight: "10px",
                textAlign: "right",
              }}
            >
              Age:
            </Form.Label>

            <Form.Control
              style={{
                width: "225px",
              }}
              placeholder="Enter your age"
              type="number"
            />

          </Form.Group>

        </div>

      ))}

      <Button
        onClick={() => {

          alert(
            "Your ticket booked successfully"
          );

          setSearchState({
            from: locations[0],
            to: locations[2],
            date: "",
          });

          setSelectedSeats([]);

          navigate("/");

        }}
        variant="success"
      >
        Pay Now
      </Button>

    </div>
  );
}