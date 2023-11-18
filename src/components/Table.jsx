import { calculateInvestmentResults } from "../util/investment"


export default function Table({userInput}) {
    const resultsData = calculateInvestmentResults(userInput)


    return(
            <div className="p-10 overflow-auto h-96">
            <table className="table ">
                <thead>
                <tr>
                    <th>YEAR</th>
                    <th>INVESTMENT VALUE</th>
                    <th>INTEREST (YEAR)</th>
                    <th>TOTAL INTEREST</th>
                    <th>INVESTED CAPITAL</th>
                </tr>
                </thead>

                <tbody>
                    {resultsData.map((entry) =>
                        <tr key={entry.year}>
                            <td>{entry.year}</td>
                            <td>{entry.investmentValue}</td>
                            <td>{entry.interest}</td>
                            <td>{entry.totalInterest}</td>
                            <td>{entry.investedCapital}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    )
}