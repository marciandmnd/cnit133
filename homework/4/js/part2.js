$(document).ready(() => {
    const principal = 1000;
    const interestRates = [0.05, 0.06, 0.07]; // 5%, 6%, 7%
    const years = 5;
    const container = $('#interestTables');
    const principalSpan = $('#principalSpan');
    principalSpan.html('$' + principal.toLocaleString());

    interestRates.forEach(rate => {
        const ratePercentage = (rate * 100).toFixed(0);
        const tableTitle = `<h4>Interest Rate: ${ratePercentage}%</h4>`;
        let tableHTML = `<table>
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Amount on Deposit</th>
                                        <th>Interest Rate</th>
                                    </tr>
                                </thead>
                                <tbody>`;

        let currentAmount = principal;
        let tmp = 1;
        for (let year = 1; year <= years; year++) {
            currentAmount = principal * ((1 + rate) ** year);
            tableHTML += `<tr>
                                <td>${year}</td>
                                <td>${parseFloat(currentAmount.toFixed(2)).toLocaleString()}</td>
                                <td>${rate}</td>
                              </tr>`;
        }

        tableHTML += `</tbody></table>`;

        container.append(tableTitle + tableHTML);
    });
});