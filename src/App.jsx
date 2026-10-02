import { useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import BusSearch from "./components/BusSearch";
import BusLayout from "./components/BusLayout";
import BookingForm from "./components/BookingForm";

import { locations } from "./utils";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[5],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <BrowserRouter>
      <div>

        <Header />

        <Routes>

          {/* Bus Search Page */}
          <Route
            path="/"
            element={
              <BusSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />

          {/* Bus Layout Page */}
          <Route
            path="/bus/:id"
            element={
              <BusLayout
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }
          />

          {/* Booking Form Page */}
          <Route
            path="/bus/book"
            element={
              <BookingForm
                selectedSeats={selectedSeats}
                searchState={searchState}
                setSelectedSeats={setSelectedSeats}
                setSearchState={setSearchState}
              />
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;