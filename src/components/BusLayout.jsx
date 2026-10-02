import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { Buses } from "../utils";
import { Button } from "react-bootstrap";

const Container = styled.div`
  background-color: #d0f2b8;
  padding: 1rem;
  min-height: 100vh;
`;

const TicketContainer = styled.div`
  padding: 0.5rem;
  margin-top: 20px;
`;

const TicketItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Seat = styled.li`
  list-style-type: none;
  width: ${(props) => props.width};
  height: 45px;
  padding: 10px;

  background-color: ${(props) =>
    props.$background || "white"};

  border-radius: 5px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  cursor: ${(props) =>
    props.$cursor || "default"};
`;

export default function BusLayout({
  selectedSeats,
  setSelectedSeats,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  // =========================
  // FIND BUS
  // =========================

  const selectedBus = Buses.find(
    (bus) => bus.id === parseInt(id)
  );

  // =========================
  // BUS NOT FOUND
  // =========================

  if (!selectedBus) {
    return (
      <Container>
        <h2>Bus Not Found</h2>

        <button onClick={() => navigate("/")}>
          Back to Search
        </button>
      </Container>
    );
  }

  // =========================
  // BUS TYPE
  // =========================

  const isSleeper =
    selectedBus.busType === "Sleeper";

  const isSeater =
    selectedBus.busType === "Seater";

  // =========================
  // SEAT WIDTH
  // =========================

  const seatWidth = isSleeper
    ? "110px"
    : "55px";

  // =========================
  // CHECK AVAILABLE SEAT
  // =========================

  const isSeatAvailable = (seat) => {
    if (isSleeper) {
      return selectedBus.availableSeats.includes(
        seat
      );
    }

    const seatNumber = parseInt(
      seat.replace(/\D/g, "")
    );

    return selectedBus.availableSeats.some(
      (availableSeat) => {
        const number = parseInt(
          availableSeat.replace(/\D/g, "")
        );

        return number === seatNumber;
      }
    );
  };

  // =========================
  // SELECT / UNSELECT
  // =========================

  const selectSeat = (seat) => {
    if (!isSeatAvailable(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat !== seat
        )
      );

      return;
    }

    setSelectedSeats([
      ...selectedSeats,
      seat,
    ]);
  };

  // =========================
  // SLEEPER ROW
  // =========================

  const generateSleeperRow = (
    seats,
    prefix
  ) => {
    return (
      <TicketItem>
        {seats.map((seat) => {
          const seatName =
            `${prefix}${seat}`;

          const available =
            isSeatAvailable(seatName);

          const selected =
            selectedSeats.includes(
              seatName
            );

          return (
            <Seat
              key={seatName}
              width={seatWidth}
              $background={
                selected
                  ? "#318beb"
                  : available
                  ? "#ffffff"
                  : "#b6b4b4"
              }
              $cursor={
                available
                  ? "pointer"
                  : "default"
              }
              onClick={() =>
                selectSeat(seatName)
              }
            >
              {seatName}
            </Seat>
          );
        })}
      </TicketItem>
    );
  };

  // =========================
  // SEATER ROW
  // =========================

  const generateSeaterRow = (seats) => {
    return (
      <TicketItem>
        {seats.map((seat) => {
          const seatName =
            String(seat);

          const available =
            isSeatAvailable(seatName);

          const selected =
            selectedSeats.includes(
              seatName
            );

          return (
            <Seat
              key={seatName}
              width={seatWidth}
              $background={
                selected
                  ? "#318beb"
                  : available
                  ? "#ffffff"
                  : "#b6b4b4"
              }
              $cursor={
                available
                  ? "pointer"
                  : "default"
              }
              onClick={() =>
                selectSeat(seatName)
              }
            >
              {seatName}
            </Seat>
          );
        })}
      </TicketItem>
    );
  };

  // =========================
  // GET ALL SEATER SEATS
  // =========================

  const getSeaterSeats = () => {
    const seats = [];

    const addSeats = (data) => {
      if (!data) return;

      data.forEach((item) => {
        if (Array.isArray(item)) {
          item.forEach((seat) => {
            seats.push(Number(seat));
          });
        } else {
          seats.push(Number(item));
        }
      });
    };

    addSeats(
      selectedBus.seatLayout.lower?.first
    );

    addSeats(
      selectedBus.seatLayout.lower?.second
    );

    addSeats(
      selectedBus.seatLayout.upper?.first
    );

    addSeats(
      selectedBus.seatLayout.upper?.second
    );

    return [...new Set(seats)].sort(
      (a, b) => a - b
    );
  };

  // =========================
  // CREATE SEATER ROWS
  // 12 SEATS PER ROW
  // =========================

  const createSeaterRows = (seats) => {
    const rows = [];

    for (
      let i = 0;
      i < seats.length;
      i += 12
    ) {
      rows.push(
        seats.slice(i, i + 12)
      );
    }

    return rows;
  };

  const seaterSeats =
    getSeaterSeats();

  const seaterRows =
    createSeaterRows(
      seaterSeats
    );

  // =========================
  // RETURN
  // =========================

  return (
    <Container>

      {/* ========================= */}
      {/* BUS INFORMATION */}
      {/* ========================= */}

      <h2>{selectedBus.name}</h2>

      <h5>Tickets</h5>

      <p>{selectedBus.busType}</p>


      {/* ========================= */}
      {/* TICKET STATUS */}
      {/* ========================= */}

      <TicketContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent:
              "flex-start",
          }}
        >

          {/* AVAILABLE */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>
              Available -
            </span>

            <Seat
              width="110px"
              $background="white"
            >
              1
            </Seat>
          </div>


          {/* BOOKED */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>
              Booked -
            </span>

            <Seat
              width="110px"
              $background="#b6b4b4"
            >
              1
            </Seat>
          </div>


          {/* SELECTED */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>
              Selected -
            </span>

            <Seat
              width="110px"
              $background="#318beb"
            >
              1
            </Seat>
          </div>

        </div>
      </TicketContainer>


      {/* ================================================= */}
      {/* SLEEPER BUS */}
      {/* ================================================= */}

      {isSleeper && (
        <>

          {/* ========================= */}
          {/* UPPER */}
          {/* ========================= */}

          <TicketContainer>

            <div
              style={{
                display: "flex",
                alignItems:
                  "flex-start",
                gap: "20px",
              }}
            >

              <div
                style={{
                  width: "40px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Upper
              </div>

              <div>

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .upper
                    .first[0],
                  "U"
                )}

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .upper
                    .first[1],
                  "U"
                )}

                <div
                  style={{
                    height: "25px",
                  }}
                />

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .upper
                    .second,
                  "U"
                )}

              </div>

            </div>

          </TicketContainer>


          {/* ========================= */}
          {/* LOWER */}
          {/* ========================= */}

          <TicketContainer>

            <div
              style={{
                display: "flex",
                alignItems:
                  "flex-start",
                gap: "20px",
              }}
            >

              <div
                style={{
                  width: "40px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Lower
              </div>

              <div>

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .lower
                    .first[0],
                  "L"
                )}

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .lower
                    .first[1],
                  "L"
                )}

                <div
                  style={{
                    height: "25px",
                  }}
                />

                {generateSleeperRow(
                  selectedBus
                    .seatLayout
                    .lower
                    .second,
                  "L"
                )}

              </div>

            </div>

          </TicketContainer>

        </>
      )}


      {/* ================================================= */}
      {/* SEATER BUS */}
      {/* ================================================= */}

      {isSeater && (
        <TicketContainer>

          <div
            style={{
              display: "flex",
              alignItems:
                "flex-start",
              gap: "20px",
            }}
          >

            {/* SEATER LABEL */}

            <div
              style={{
                width: "40px",
                fontWeight: "bold",
                paddingTop: "20px",
              }}
            >
              Seater
            </div>


            {/* SEATER LAYOUT */}

            <div>

              {seaterRows
                .slice(0, 2)
                .map(
                  (row, index) => (
                    <React.Fragment
                      key={index}
                    >
                      {generateSeaterRow(
                        row
                      )}
                    </React.Fragment>
                  )
                )}


              {/* GAP AFTER 24 SEATS */}

              {seaterRows.length > 2 && (
                <div
                  style={{
                    height: "25px",
                  }}
                />
              )}


              {seaterRows
                .slice(2)
                .map(
                  (row, index) => (
                    <React.Fragment
                      key={
                        index + 2
                      }
                    >
                      {generateSeaterRow(
                        row
                      )}
                    </React.Fragment>
                  )
                )}

            </div>

          </div>

        </TicketContainer>
      )}


      {/* ========================= */}
      {/* SELECTED SEATS */}
      {/* ========================= */}

      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Selected Seats :{" "}

        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "No Seat Selected"}
      </div>


      {/* ========================= */}
      {/* BOOK NOW */}
      {/* ========================= */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="success"
          onClick={() =>
            navigate("/bus/book")
          }
          disabled={
            selectedSeats.length === 0
          }
        >
          Book Now
        </Button>
      </div>

    </Container>
  );
}