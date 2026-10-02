export const Buses = [
  // =================================================
  // 1. SLEEPER BUS
  // =================================================

  {
    id: 1,
    name: "Zing Bus Max",
    source: "Chennai",
    destination: "Madurai",
    departureTime: "06:00 AM",
    arrivalTime: "12:30 PM",
    price: "₹600",
    busType: "Sleeper",
    numberOfSeats: 36,

    seatLayout: {
      lower: {
        first: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
        ],

        second: [
          13, 14, 15, 16, 17, 18
        ],
      },

      upper: {
        first: [
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
        ],

        second: [
          31, 32, 33, 34, 35, 36
        ],
      },
    },

    availableSeats: [
      "L1",
      "L4",
      "L6",
      "L10",
      "L16",
      "U19",
      "U24",
      "U30",
      "U33",
    ],
  },


  // =================================================
  // 2. SEATER BUS
  // =================================================

  {
    id: 2,
    name: "FLix Bus Express",
    source: "Chennai",
    destination: "Coimbatore",
    departureTime: "09:00 PM",
    arrivalTime: "05:30 AM",
    price: "₹750",
    busType: "Seater",
    numberOfSeats: 48,

    seatLayout: {
      lower: {
        first: [
          [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
          ],

          [
            13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24
          ],
        ],

        second: [
          25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48
        ],
      },

      upper: {
        first: [],
        second: [],
      },
    },

    availableSeats: [
      "2",
      "5",
      "8",
      "12",
      "17",
      "23",
      "26",
      "29",
      "31",
      "36",
      "41",
      "45",
    ],
  },


  // =================================================
  // 3. SEATER BUS
  // =================================================

  {
    id: 3,
    name: "Lion Travels",
    source: "Nagercoil",
    destination: "Chennai",
    departureTime: "07:30 PM",
    arrivalTime: "06:00 AM",
    price: "₹900",
    busType: "Seater",
    numberOfSeats: 48,

    seatLayout: {
      lower: {
        first: [
          [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
          ],

          [
            13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24
          ],
        ],

        second: [
          25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48
        ],
      },

      upper: {
        first: [],
        second: [],
      },
    },

    availableSeats: [
      "1",
      "4",
      "7",
      "11",
      "15",
      "21",
      "24",
      "28",
      "32",
      "37",
      "42",
      "47",
    ],
  },


  // =================================================
  // 4. SEATER BUS
  // =================================================

  {
    id: 4,
    name: "Rathimeena Travels",
    source: "Chennai",
    destination: "Kaniyakumari",
    departureTime: "09:00 PM",
    arrivalTime: "05:30 AM",
    price: "₹750",
    busType: "Seater",
    numberOfSeats: 48,

    seatLayout: {
      lower: {
        first: [
          [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
          ],

          [
            13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24
          ],
        ],

        second: [
          25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48
        ],
      },

      upper: {
        first: [],
        second: [],
      },
    },

    availableSeats: [
      "2",
      "5",
      "8",
      "12",
      "17",
      "23",
      "26",
      "29",
      "31",
      "36",
      "40",
      "44",
    ],
  },


  // =================================================
  // 5. SEATER BUS
  // =================================================

  {
    id: 5,
    name: "SBM Travels",
    source: "Salem",
    destination: "Coimbatore",
    departureTime: "09:00 PM",
    arrivalTime: "05:30 AM",
    price: "₹750",
    busType: "Seater",
    numberOfSeats: 48,

    seatLayout: {
      lower: {
        first: [
          [
            1, 2, 3, 4, 5, 6,
            7, 8, 9, 10, 11, 12
          ],

          [
            13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24
          ],
        ],

        second: [
          25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48
        ],
      },

      upper: {
        first: [],
        second: [],
      },
    },

    availableSeats: [
      "2",
      "5",
      "8",
      "12",
      "17",
      "23",
      "26",
      "29",
      "31",
      "36",
      "41",
      "46",
    ],
  },
];


// =================================================
// LOCATIONS
// =================================================

export const locations = [
  "Chennai",
  "Nagercoil",
  "Kaniyakumari",
  "Coimbatore",
  "Trichy",
  "Madurai",
  "Salem",
  "Goa",
];