export const currency = () => {
    const content = document.querySelectorAll('.modal-content');
    const currencyAll = document.createElement('div')
    currencyAll.classList = 'currency-data'
    content[2].append(currencyAll);
    const dateSelect = document.createElement('input')
    dateSelect.type = 'date'
    dateSelect.classList = 'date';
    currencyAll.append(dateSelect);

    const getTodayDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return (yyyy + '-' + mm + '-' + dd)
    }

    dateSelect.max = getTodayDate();

    const table = document.createElement('table');
    table.classList = 'table'

       dateSelect.addEventListener('input', () => {
        let dataSelected = dateSelect.value;
        const table = document.createElement('table');
        table.classList = 'table'
        fetch('https://api.currencyscoop.com/v1/historical?date=' + dataSelected + '?&base=RUB&api_key=22bc0fa553204ae1886329841e130441')
            .then(response => response.json())
            .then(currency => {
                let obj = Object.entries(currency.response.rates)
                for (let i = 0; i < obj.length; i++) {
                    const cell = document.createElement('th');
                    cell.classList = 'cell2'
                    const line = document.createElement('tr')
                    line.classList = 'line'
                    cell.textContent = 'Currency name , rate : ' + Object.values(obj[i])
                    line.append(cell);
                    table.append(line);
                    currencyAll.append(table)
                }
            })
            .catch(err => console.error(err));
        const th = document.querySelectorAll('.cell2')
        th.forEach((t) => {
            t.remove()
        })

    })
}
