import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BusListContainer = styled.div`
  width: 100%;
`;

const Heading = styled.h2`
  color: #075b35;
  font-size: 26px;
  font-weight: 750;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const BusItem = styled.div`
  background: white;

  padding: 22px;
  margin-bottom: 15px;

  border-radius: 18px;

  border: 1px solid #e2f1e7;

  box-shadow: 0 8px 25px rgba(0, 100, 50, 0.08);

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const BusDetails = styled.div`
  flex: 1;
`;

const BusName = styled.h3`
  color: #075b35;
  font-size: 22px;
  font-weight: 750;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 19px;
  }
`;

const Detail = styled.p`
  margin: 5px 0;
  color: #586960;
  font-size: 14px;

  strong {
    color: #234c38;
  }
`;

const BusAction = styled.div`
  min-width: 160px;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const BookButton = styled(Button)`
  width: 100%;
  background: linear-gradient(
    135deg,
    #08a846,
    #05c653
  ) !important;

  border: none !important;
  border-radius: 10px !important;

  font-weight: 700 !important;

  padding: 11px 20px !important;
`;

const AvailableSeats = styled.h5`
  margin-top: 12px;
  color: #527161;
  font-size: 14px;
`;

export default function BusList({ buses }) {
  const navigate = useNavigate();

  return (
    <BusListContainer>

      <Heading>
        Available Buses
      </Heading>

      {buses.map((bus) => (

        <BusItem key={bus.id}>

          <BusDetails>

            <BusName>
              {bus.name}
            </BusName>

            <Detail>
              <strong>Source:</strong>{" "}
              {bus.source}
            </Detail>

            <Detail>
              <strong>Destination:</strong>{" "}
              {bus.destination}
            </Detail>

            <Detail>
              <strong>Departure:</strong>{" "}
              {bus.departureTime}
            </Detail>

            <Detail>
              <strong>Arrival:</strong>{" "}
              {bus.arrivalTime}
            </Detail>

            <Detail>
              <strong>Price:</strong>{" "}
              {bus.price}
            </Detail>

            <Detail>
              <strong>Type:</strong>{" "}
              {bus.busType}
            </Detail>

          </BusDetails>

          <BusAction>

            <BookButton
              onClick={() =>
                navigate(
                  `/bus/${bus.id}`
                )
              }
            >
              Book Now
            </BookButton>

            <AvailableSeats>
              Available Seats:{" "}
              {bus.availableSeats.length}
            </AvailableSeats>

          </BusAction>

        </BusItem>

      ))}

    </BusListContainer>
  );
}