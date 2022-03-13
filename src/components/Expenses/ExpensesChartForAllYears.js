import Chart from "../Chart/Chart";

const ExpensesChartForAllYears = (props) => {
  const chartDataPoints = [
    { label: "2019", value: 0 },
    { label: "2020", value: 0 },
    { label: "2021", value: 0 },
    { label: "2022", value: 0 },
    { label: "2023", value: 0 },
    { label: "2024", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseYear = expense.date.getFullYear().toString();
    for (const dataPoint of chartDataPoints) {
      if (dataPoint.label === expenseYear) {
        dataPoint.value += expense.price;
      }
    }
  }
  console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChartForAllYears;
