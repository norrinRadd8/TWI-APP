import { createContext, useReducer, useContext } from "react";

export const CheckinContext = createContext();

export const checkinReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECKINS":
      return {
        checkIns: action.payload,
      };
    case "CREATE_CHECKIN":
      return {
        checkIns: [action.payload, ...state.checkIns],
      };

    default:
      return state;
  }
};

export const CheckinContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkinReducer, {
    checkIns: null,
  });

  return (
    <CheckinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CheckinContext.Provider>
  );
};

export const useCheckinContext = () => useContext(CheckinContext);

// import { createContext, useReducer } from "react";

// export const DailyCheckInContext = createContext();

// export const dailyCheckInReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_DAILY_CHECKIN":
//       return {
//         dailyCheckIn: action.payload,
//       };
//     case "CREATE_DAILY_CHECKIN":
//       return {
//         dailyCheckIn: [action.payload, ...state.dailyCheckIn],
//       };
//     // Add more actions as needed for updating or deleting daily check-ins
//     default:
//       return state;
//   }
// };

// export const DailyCheckInsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(dailyCheckInReducer, {
//     dailyCheckIn: null,
//   });

//   return (
//     <DailyCheckInContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </DailyCheckInContext.Provider>
//   );
// };
