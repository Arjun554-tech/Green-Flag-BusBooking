import React, { useState } from "react";
import styled from "styled-components";
import { locations, Buses } from "../utils";
import { Button, Form } from "react-bootstrap";
import BusList from "./BusList";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function BusSearch({ searchState, setSearchState }) {
  const [filteredBus, setFilteredBus] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);

    // Search only by source and destination.
    // The selected date does not affect bus availability.
    const results = Buses.filter(
      (bus) =>
        bus.source.trim().toLowerCase() ===
          searchState.from.trim().toLowerCase() &&
        bus.destination.trim().toLowerCase() ===
          searchState.to.trim().toLowerCase()
    );

    setFilteredBus(results);
  };

  return (
    <Container>
      <h2 className="mb-3">Search For Buses</h2>

      <div className="d-flex flex-column align-items-center">

        {/* From */}
        <Form.Select
          className="mb-3 width-300"
          value={searchState.from}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              from: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-source`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>

        {/* To */}
        <Form.Select
          className="mb-3 width-300"
          value={searchState.to}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              to: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-destination`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>

        {/* Date */}
        <input
          className="form-control mb-3 width-300"
          type="date"
          value={searchState.date}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
      </div>

      <Button
        className="mb-3"
        style={{
          backgroundColor: "#0ae415ee",
          fontWeight: "bold",
          borderColor: "#0ae415ee",
        }}
        onClick={handleSearch}
      >
        Search
      </Button>

      {searched && filteredBus.length > 0 && (
        <BusList buses={filteredBus} />
      )}

      {searched && filteredBus.length === 0 && (
        <h3>No Service Available</h3>
      )}
    </Container>
  );
}





//yt at 50.00