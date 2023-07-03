import { useContext } from "react";
import { DailyCheckInContext } from "../CheckinContext";

export const useDailyCheckInContext = () => {
  const context = useContext(DailyCheckInContext);

  if (!context) {
    throw new Error(
      "useDailyCheckInContext must be used inside a DailyCheckInContextProvider"
    );
  }

  return context;
};
