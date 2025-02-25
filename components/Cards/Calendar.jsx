"use client";

import { ResponsiveCalendar } from "@nivo/calendar";

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
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
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
          itemHeight: 36,
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

  const data = generateDataArray(2024, 20, 20, 100);

  return (
    <div className="h-[200px]">
      <MyResponsiveCalendar data={data} />
    </div>
  );
};
