import React, { useState } from "react";
import styled from "styled-components";

import {
  locations,
  Buses,
} from "../utils";

import {
  Button,
  Form,
} from "react-bootstrap";

import BusList from "./BusList";

import banner from "../assets/banner.png";

/* =========================================
   MAIN PAGE
========================================= */

const PageContainer = styled.main`
  width: 100%;

  min-height: calc(100vh - 110px);

  /*
    Professional three-green gradient:

    Dark Green
        ↓
    Light Green
        ↓
    Dark Green
  */

  background:
    linear-gradient(
      135deg,
      #9af79f 0%,
      #d9f5e4 42%,
      #8cdfb0 58%,
      #b8e8ca 78%,
      #55f5a7 100%
    );

  padding: 30px 4% 40px;

  overflow-x: hidden;

  @media (max-width: 900px) {
    padding: 30px 5% 40px;
  }

  @media (max-width: 600px) {
    padding: 24px 16px 35px;
  }
`;

/* =========================================
   MAIN WIDTH
========================================= */

const MainWrapper = styled.div`
  width: 100%;

  max-width: 1450px;

  margin: 0 auto;
`;

/* =========================================
   TWO COLUMN LAYOUT
========================================= */

const HeroGrid = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(430px, 0.68fr);

  gap: 35px;

  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(400px, 0.65fr);

    gap: 28px;
  }

  @media (max-width: 1000px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(360px, 0.62fr);

    gap: 25px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 28px;
  }
`;

/* =========================================
   LEFT SIDE
========================================= */

const LeftSection = styled.div`
  width: 100%;

  min-width: 0;

  padding-top: 10px;

  @media (max-width: 850px) {
    padding-top: 0;
  }
`;

/* =========================================
   SMALL GREEN TITLE
========================================= */

const SmallTitle = styled.div`
  color: #006b3c;

  font-size: 17px;

  font-weight: 800;

  letter-spacing: 1.8px;

  margin-bottom: 17px;

  @media (max-width: 600px) {
    font-size: 15px;

    margin-bottom: 13px;
  }
`;

/* =========================================
   MAIN HERO TITLE
========================================= */

const HeroTitle = styled.h1`
  margin: 0;

  color: #005f39;

  font-size: clamp(
    52px,
    5.2vw,
    76px
  );

  line-height: 1.08;

  font-weight: 800;

  letter-spacing: -2.8px;

  max-width: 680px;

  @media (max-width: 1100px) {
    font-size: 60px;
  }

  @media (max-width: 850px) {
    font-size: 60px;
  }

  @media (max-width: 600px) {
    font-size: 47px;

    letter-spacing: -1.7px;

    line-height: 1.06;
  }

  @media (max-width: 400px) {
    font-size: 40px;

    line-height: 1.05;
  }
`;

/* =========================================
   HERO TITLE LINE
========================================= */

const HeroLine = styled.span`
  display: block;

  &:first-child {
    margin-bottom: 7px;
  }

  @media (max-width: 600px) {
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

/* =========================================
   DESCRIPTION
========================================= */

const Description = styled.p`
  margin-top: 20px;

  margin-bottom: 32px;

  color: #285d48;

  font-size: 17px;

  line-height: 1.5;

  max-width: 680px;

  @media (max-width: 600px) {
    font-size: 15px;

    margin-top: 16px;

    margin-bottom: 22px;
  }
`;

/* =========================================
   RIGHT BANNER
   COMPLETELY UNCHANGED
========================================= */

const BannerWrapper = styled.div`
  width: 100%;

  max-width: 550px;

  height: min(
    520px,
    calc(100vh - 150px)
  );

  margin-left: auto;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  background: transparent;

  border: none;

  border-radius: 20px;

  box-shadow: none;

  @media (max-width: 1200px) {
    max-width: 520px;

    height: min(
      500px,
      calc(100vh - 150px)
    );
  }

  @media (max-width: 1000px) {
    max-width: 480px;

    height: min(
      470px,
      calc(100vh - 145px)
    );
  }

  @media (max-width: 850px) {
    max-width: 600px;

    height: 360px;

    margin: 0 auto;

    order: 2;
  }

  @media (max-width: 600px) {
    max-width: 100%;

    height: 300px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
`;

/* =========================================
   BANNER IMAGE
========================================= */

const BannerImage = styled.img`
  display: block;

  width: 100%;

  height: 100%;

  object-fit: contain;

  object-position: center;

  background: transparent;

  border: none;

  margin: 0;

  padding: 0;
`;

/* =========================================
   SEARCH CARD
========================================= */

const SearchCard = styled.div`
  width: 100%;

  background: rgba(
    255,
    255,
    255,
    0.97
  );

  border: 1px solid #d5ebe0;

  border-radius: 20px;

  padding: 27px 30px 25px;

  box-shadow:
    0 12px 28px
    rgba(0, 70, 40, 0.14);

  @media (max-width: 600px) {
    padding: 24px 18px 22px;

    border-radius: 18px;
  }
`;

/* =========================================
   SEARCH HEADING
========================================= */

const SearchTitle = styled.h2`
  margin: 0 0 20px;

  color: #005f39;

  font-size: 37px;

  font-weight: 800;

  line-height: 1.12;

  @media (max-width: 600px) {
    font-size: 29px;

    margin-bottom: 18px;
  }
`;

/* =========================================
   SEARCH GRID
========================================= */

const SearchGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

/* =========================================
   FIELD
========================================= */

const FieldGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;
`;

const FieldLabel = styled.label`
  color: #00683e;

  font-size: 16px;

  font-weight: 700;

  line-height: 1.2;
`;

/* =========================================
   FROM / TO
========================================= */

const StyledSelect = styled(Form.Select)`
  width: 100%;

  height: 56px;

  border: 1px solid #c5ddd2;

  border-radius: 12px;

  background-color: #fbfffd;

  color: #123f2e;

  font-size: 16px;

  padding-left: 15px;

  box-shadow: none;

  &:focus {
    border-color: #00a94f;

    box-shadow:
      0 0 0 3px
      rgba(0, 169, 79, 0.12);
  }
`;

/* =========================================
   DATE
========================================= */

const StyledDate = styled.input`
  width: 100%;

  height: 56px;

  border: 1px solid #c5ddd2;

  border-radius: 12px;

  background-color: #fbfffd;

  color: #123f2e;

  font-size: 16px;

  padding: 0 15px;

  outline: none;

  &:focus {
    border-color: #00a94f;

    box-shadow:
      0 0 0 3px
      rgba(0, 169, 79, 0.12);
  }
`;

/* =========================================
   SEARCH BUTTON
========================================= */

const SearchButton = styled(Button)`
  width: 100%;

  height: 54px;

  margin-top: 18px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(
    90deg,
    #00a94f,
    #00cf68
  );

  color: white;

  font-size: 18px;

  font-weight: 800;

  display: flex;

  align-items: center;

  justify-content: center;

  transition: 0.2s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      #008f43,
      #00b95d
    );

    transform: translateY(-1px);

    box-shadow:
      0 7px 18px
      rgba(0, 170, 80, 0.2);
  }
`;

const SearchIcon = styled.span`
  font-size: 25px;

  margin-right: 9px;

  line-height: 1;
`;

/* =========================================
   RESULTS
========================================= */

const ResultsSection = styled.div`
  width: 100%;

  margin-top: 35px;
`;

/* =========================================
   SHORT SCREEN OPTIMIZATION
========================================= */

const ShortScreen = styled.div`
  @media (min-width: 851px) and (max-height: 700px) {

    ${PageContainer} {
      padding-top: 14px;

      padding-bottom: 20px;
    }

    ${HeroGrid} {
      gap: 28px;
    }

    ${LeftSection} {
      padding-top: 7px;
    }

    ${SmallTitle} {
      margin-bottom: 10px;

      font-size: 15px;
    }

    ${HeroTitle} {
      font-size: 56px;

      line-height: 1.04;
    }

    ${HeroLine} {
      &:first-child {
        margin-bottom: 6px;
      }
    }

    ${Description} {
      margin-top: 13px;

      margin-bottom: 24px;

      font-size: 15px;
    }

    ${SearchCard} {
      margin-top: 2px;

      padding-top: 22px;

      padding-bottom: 19px;
    }

    ${SearchTitle} {
      margin-bottom: 15px;

      font-size: 32px;
    }

    ${SearchGrid} {
      gap: 13px;
    }

    ${FieldGroup} {
      gap: 4px;
    }

    ${FieldLabel} {
      font-size: 14px;
    }

    ${StyledSelect},
    ${StyledDate} {
      height: 48px;

      font-size: 15px;
    }

    ${SearchButton} {
      height: 46px;

      margin-top: 11px;

      font-size: 16px;
    }

    ${BannerWrapper} {
      height: calc(100vh - 140px);

      min-height: 0;

      max-height: 450px;
    }
  }
`;

/* =========================================
   COMPONENT
========================================= */

export default function BusSearch({
  searchState,
  setSearchState,
}) {
  const [filteredBus, setFilteredBus] =
    useState([]);

  const [searched, setSearched] =
    useState(false);

  const handleSearch = () => {
    setSearched(true);

    const results = Buses.filter(
      (bus) =>
        bus.source
          .trim()
          .toLowerCase() ===
          searchState.from
            .trim()
            .toLowerCase() &&
        bus.destination
          .trim()
          .toLowerCase() ===
          searchState.to
            .trim()
            .toLowerCase()
    );

    setFilteredBus(results);
  };

  return (
    <ShortScreen>

      <PageContainer>

        <MainWrapper>

          <HeroGrid>

            {/* =================================
                LEFT SIDE
            ================================= */}

            <LeftSection>

              <SmallTitle>
                GREEN FLAG
              </SmallTitle>

              <HeroTitle>

                <HeroLine>
                  Your Journey,
                </HeroLine>

                <HeroLine>
                  Our Green Signal.
                </HeroLine>

              </HeroTitle>

              <Description>
                Find your bus, choose your seat,
                and book your journey with ease.
              </Description>

              {/* =================================
                  SEARCH
              ================================= */}

              <SearchCard>

                <SearchTitle>
                  Search For Buses
                </SearchTitle>

                <SearchGrid>

                  {/* FROM */}

                  <FieldGroup>

                    <FieldLabel>
                      From
                    </FieldLabel>

                    <StyledSelect
                      value={
                        searchState.from
                      }
                      onChange={(e) =>
                        setSearchState(
                          (prevState) => ({
                            ...prevState,

                            from:
                              e.target.value,
                          })
                        )
                      }
                    >
                      {locations.map(
                        (data) => (
                          <option
                            key={`${data}-source`}
                            value={data}
                          >
                            {data}
                          </option>
                        )
                      )}
                    </StyledSelect>

                  </FieldGroup>

                  {/* TO */}

                  <FieldGroup>

                    <FieldLabel>
                      To
                    </FieldLabel>

                    <StyledSelect
                      value={
                        searchState.to
                      }
                      onChange={(e) =>
                        setSearchState(
                          (prevState) => ({
                            ...prevState,

                            to:
                              e.target.value,
                          })
                        )
                      }
                    >
                      {locations.map(
                        (data) => (
                          <option
                            key={`${data}-destination`}
                            value={data}
                          >
                            {data}
                          </option>
                        )
                      )}
                    </StyledSelect>

                  </FieldGroup>

                  {/* DATE */}

                  <FieldGroup>

                    <FieldLabel>
                      Date
                    </FieldLabel>

                    <StyledDate
                      type="date"
                      value={
                        searchState.date
                      }
                      onChange={(e) =>
                        setSearchState(
                          (prevState) => ({
                            ...prevState,

                            date:
                              e.target.value,
                          })
                        )
                      }
                    />

                  </FieldGroup>

                </SearchGrid>

                {/* SEARCH BUTTON */}

                <SearchButton
                  onClick={handleSearch}
                >
                  <SearchIcon>
                    ⌕
                  </SearchIcon>

                  Search Buses
                </SearchButton>

              </SearchCard>

            </LeftSection>

            {/* =================================
                RIGHT SIDE BANNER
            ================================= */}

            <BannerWrapper>

              <BannerImage
                src={banner}
                alt="Green Flag Bus Booking"
              />

            </BannerWrapper>

          </HeroGrid>

          {/* =================================
              RESULTS
          ================================= */}

          {searched && (
            <ResultsSection>

              {filteredBus.length > 0 ? (
                <BusList
                  buses={filteredBus}
                />
              ) : (
                <h3 className="text-center">
                  No Service Available
                </h3>
              )}

            </ResultsSection>
          )}

        </MainWrapper>

      </PageContainer>

    </ShortScreen>
  );
}