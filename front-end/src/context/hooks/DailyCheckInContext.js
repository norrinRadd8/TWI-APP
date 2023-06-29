import { createContext, useReducer } from "react";

export const DailyCheckInContext = createContext();

export const dailyCheckInReducer = (state, action) => {
  switch (action.type) {
    case "SET_DAILY_CHECKIN":
      return {
        dailyCheckIn: action.payload,
      };
    case "CREATE_DAILY_CHECKIN":
      return {
        dailyCheckIn: [action.payload, ...state.dailyCheckIn],
      };
    // Add more actions as needed for updating or deleting daily check-ins
    default:
      return state;
  }
};

export const DailyCheckInsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dailyCheckInReducer, {
    dailyCheckIn: null,
  });

  return (
    <DailyCheckInContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DailyCheckInContext.Provider>
  );
};
