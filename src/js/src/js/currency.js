
const renderContent = (response) => {
	const { data } = response;
	// console.log('step1');
	// console.log(data);
	// console.log(data[4].Cur_OfficialRate);
	// console.log(data[5].Cur_OfficialRate);
	let usd = data[5].Cur_OfficialRate
	let headerUsd =  document.getElementById('usd');
	let headerEur =  document.getElementById('eur');
	headerUsd.textContent = 'USD '+ data[4].Cur_OfficialRate.toFixed(3);
	headerEur.textContent = 'EUR '+ data[6].Cur_OfficialRate.toFixed(3);
	data.forEach(item => {
		let content = document.createElement('tr');
		content.classList.add('table_line')	
		content.innerHTML = `
			<tr>
				<td class="table__text table__country_name">${item.Cur_Name}
				</td>
				<td class="table__text  table__colum2">${item.Cur_Scale} ${item.Cur_Abbreviation}
				</td>
				<td class="table__text">${item.Cur_OfficialRate}
				</td>
			</tr>
		`
		document.querySelector('.table').appendChild(content);
	});

};
axios 
	.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
	.then(renderContent);