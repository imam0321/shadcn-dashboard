"use client";

import { ResponsiveCalendar } from "@nivo/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MyResponsiveCalendar = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  // Extract the min and max year dynamically from the data
  const years = data.map((item) => parseInt(item.day.split("-")[0]));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  return (
    <ResponsiveCalendar
      data={data}
      from={`${minYear}-01-01`}
      to={`${maxYear}-12-31`}
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 28,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};

export const Calendar = () => {
  function generateDataArray(year, numberOfObjects, minValue, maxValue) {
    const dataArray = [];

    for (let i = 1; i <= numberOfObjects; i++) {
      const randomValue =
        Math.floor(Math.random() * (maxValue - minValue + 2)) + minValue;
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
      const date = `${year}-${month}-${day}`;

      dataArray.push({ value: randomValue, day: date });
    }
    return dataArray;
  }

  const data = generateDataArray(2024, 80, 40, 100);

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Calender</CardTitle>
        <CardDescription>Those are the results of this year Calender.</CardDescription>
      </CardHeader>
      <CardContent className="h-[150px] px-2 py-0">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
};
