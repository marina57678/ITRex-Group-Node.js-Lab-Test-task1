
const renderContent = (response) => {
	const { data } = response;
	console.log('step1');
	console.log(data);
	data.forEach(item => {
		let content = document.createElement('tr');
		content.classList.add('table_line')	
		content.innerHTML = `
			<tr>
				<td class="country_name">${item.Cur_Name}
				</td>
				<td>${item.Cur_Scale} ${item.Cur_Abbreviation}
				</td>
				<td>${item.Cur_OfficialRate}
				</td>
			</tr>
		`
		document.querySelector('.table').appendChild(content);
	});
};
axios 
	.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
	.then(renderContent);