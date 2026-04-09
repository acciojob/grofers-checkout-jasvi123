const getSum = () => {
	const prices = document.querySelectorAll(".price");

	let total = 0;

	prices.forEach(price => {
		total += Number(price.textContent);
		
	});

	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");

	newCell.colSpan =2;
	newCell.textContent = total;

	newRow.appendChild(newCell);
	table.appendChild(newRow); 
};

window.onload = () => {
	const btn = document.querySelector("button");
	btn.addEventListener("click", getSum);	
}


