const initState = {
  shows: [
    {
      id: "1",
      month: "jan",
      date: "25",
      event: "Kermis Mariaheide",
      vanue: "Brouwer",
      location: "Mariaheide"
    },
    {
      id: "2",
      month: "feb",
      date: "1",
      event: "Pop en Colour",
      vanue: "Steekpark Kienehoeve",
      location: "Sint-Oederode"
    },
    {
      id: "3",
      month: "apr",
      date: "11",
      event: "Argo",
      vanue: "Somewhere",
      location: "On earth"
    }
  ]
};

const showsReducer = (state = initState, action) => {
  return state;
};

export default showsReducer;
