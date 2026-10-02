import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { locations } from "../utils";

export default function BookingForm({
  selectedSeats,
  setSearchState,
  searchState,
  setSelectedSeats,
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        background:
          "linear-gradient(135deg, #f4fff7, #ffffff)",
        padding: "40px 15px",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow:
            "0 10px 30px rgba(0, 100, 50, 0.10)",
          border: "1px solid #e2f1e7",
        }}
      >

        <div className="text-center">

          <h5
            style={{
              color: "#075b35",
              fontWeight: "700",
            }}
          >
            {searchState.from} To{" "}
            {searchState.to}
          </h5>

          <h5
            style={{
              color: "#60756a",
              marginTop: "10px",
            }}
          >
            Date: {searchState.date}
          </h5>

          <hr />

          <h5
            style={{
              color: "#075b35",
              marginBottom: "25px",
            }}
          >
            Please fill the below Details
          </h5>

          {selectedSeats.map((data) => (

            <div key={data}>

              <div
                className="my-3"
                style={{
                  fontWeight: "700",
                  color: "#075b35",
                }}
              >
                Seat No: {data}
              </div>

              <Form.Group
                className="d-flex justify-content-center align-items-center mb-3"
              >

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

              <Form.Group
                className="d-flex justify-content-center align-items-center mb-3"
              >

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
            style={{
              marginTop: "10px",
              padding: "10px 30px",
              fontWeight: "700",
              borderRadius: "10px",
            }}
          >
            Pay Now
          </Button>

        </div>

      </div>

    </div>
  );
}