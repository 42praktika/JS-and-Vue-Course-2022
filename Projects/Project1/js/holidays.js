export const holidays = () => {
    const content = document.querySelectorAll('.modal-content');
    const country = document.createElement('div');
    country.classList = 'country-holidays'
    const countrySelect = document.createElement('select');
    countrySelect.classList = 'country-select';
    countrySelect.textContent = 'Choose country : ';

    const countryName = ['Andorra', 'Albania', 'Argentina', 'Austria', 'Australia', 'Åland Islands', 'Bosnia and Herzegovina', 'Barbados', 'Belgium', 'Bulgaria',
        'Benin', 'Bolivia', 'Brazil', 'Bahamas', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Switzerland', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Cuba',
        'Cyprus', 'Czechia', 'Germany', 'Denmark', 'Dominican Republic', 'Ecuador', 'Estonia', 'Egypt', 'Spain', 'Finland', 'Faroe Islands', 'France', 'Gabon', 'United Kingdom',
        'Grenada', 'Guernsey', 'Gibraltar', 'Greenland', 'Gambia', 'Greece', 'Guatemala', 'Guyana', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'Ireland',
        'Isle of Man', 'Iceland', 'Italy', 'Jersey', 'Jamaica', 'Japan', 'South Korea', 'Liechtenstein', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Morocco', 'Monaco',
        'Moldova', 'Montenegro', 'Madagascar', 'North Macedonia', 'Mongolia', 'Montserrat', 'Malta', 'Mexico', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Nicaragua', 'Netherlands',
        'Norway', 'New Zealand', 'Panama', 'Peru', 'Papua New Guinea', 'Poland', 'Puerto Rico', 'Portugal', 'Paraguay', 'Romania', 'Serbia', 'Russia', 'Sweden', 'Singapore', 'Slovenia',
        'Svalbard and Jan Mayen', 'Slovakia', 'San Marino', 'Suriname', 'El Salvador', 'Tunisia', 'Turkey', 'Ukraine', 'United States', 'Uruguay', 'Vatican City', 'Venezuela',
        'Vietnam', 'South Africa', 'Zimbabwe']
    const countryCode = ['AD', 'AL', 'AR', 'AT', 'AU', 'AX', 'BA', 'BB', 'BE', 'BG', 'BJ', 'BO', 'BR', 'BS', 'BW', 'BY', 'BZ', 'CA', 'CH', 'CL', 'CN', 'CO', 'CR', 'CU', 'CY',
        'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'EG', 'ES', 'FI', 'FO', 'FR', 'GA', 'GB', 'GD', 'GG', 'GI', 'GL', 'GM', 'GR', 'GT', 'GY', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IM', 'IS',
        'IT', 'JE', 'JM', 'JP', 'KR', 'LI', 'LS', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MG', 'MK', 'MN', 'MS', 'MT', 'MX', 'MZ', 'NA', 'NE', 'NG', 'NI', 'NL', 'NO', 'NZ', 'PA',
        'PE', 'PG', 'PL', 'PR', 'PT', 'PY', 'RO', 'RS', 'RU', 'SE', 'SG', 'SI', 'SJ', 'SK', 'SM', 'SR', 'SV', 'TN', 'TR', 'UA', 'US', 'UY', 'VA', 'VE', 'VN', 'ZA', 'ZW',]

    let i = 0
    countryCode.forEach((code) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = countryName[i]
        countrySelect.append(option);
        i++
    })

    country.append(countrySelect);
    content[1].prepend(country);
    const info = document.createElement('div')
    info.classList = 'info-holidays'


    countrySelect.addEventListener('change', () => {
        const table = document.createElement('table');
        table.classList = 'table'
        let index = countrySelect.selectedIndex;
        let countrySelected = countrySelect[index].value;
        fetch('https://date.nager.at/api/v3/publicholidays/2017/' + countrySelected)
            .then(response => response.json())
            .then(data => {
                data.forEach((d => {
                    const cell = document.createElement('th');
                    cell.classList = 'cell'
                    const line = document.createElement('tr')
                    line.classList = 'line'
                    cell.append("Date: " + d.date + ". Local name :  " + d.localName + ". Name : " + d.name)
                    line.append(cell);
                    table.append(line)
                    info.append(table)
                    country.append(info)
                }))
            })
            .catch(err => console.error(err));
        const th = document.querySelectorAll('.cell')
        th.forEach((t) => {
            t.remove()
        })
    })


}