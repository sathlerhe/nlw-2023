import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import api from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

// import { Container } from './styles';

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type TSummary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

const SummaryTable: React.FC = () => {
  const [summary, setSummary] = useState<TSummary>([]);

  useEffect(() => {
    api.get("/summary").then((response) => setSummary(response.data));
  }, []);

  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 && summaryDates.map((date) => {
          const dayInSummary = summary?.find((day) => {
            return dayjs(date).isSame(day.date, "day");
          });
          return (
            <HabitDay
              key={String(date)}
              date={date}
              amount={dayInSummary?.amount}
              defaultCompleted={dayInSummary?.completed}
            />
          );
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
};

export default SummaryTable;
