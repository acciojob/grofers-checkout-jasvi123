const getSumBtn = document.querySelector("button");

const getSum = () => {
	const prices = document.querySelectorAll(".prices");

	let total = 0;

	prices.forEach(price => {
		total += Number(price.textContent);
		
	});

	const table = document.querySelector("table");
	const existingRow = document.getElementById("table-row");

	if(existingRow){
		existingRow.remove();
	}

	const newRow = document.createElement("tr");
	newRow.setAttribute("id","table-row");
	const newCell = document.createElement("td");

	newCell.colSpan =2;
	newCell.textContent = total;;

	newRow.appendChild(newCell);
	table.appendChild(newRow); 
};

getSumBtn.addEventListener("click", getSum);

