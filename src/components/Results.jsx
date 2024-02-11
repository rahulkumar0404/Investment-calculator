import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Results({ userInput }) {
  if (userInput.duration < 1) {
    return <p className="center">Duration Cannot be less than 1</p>;
  } else {
    const result = calculateInvestmentResults(userInput);
    const initialInvestment =
      result[0].valueEndOfYear -
      result[0].annualInvestment -
      result[0].interest;
    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {result.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const investedCapital = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
