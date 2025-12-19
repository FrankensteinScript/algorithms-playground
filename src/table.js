const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const sortAge = document.getElementById("sortAge");

let users = [];
let sortAsc = true;

// Přidání uživatele
addBtn.addEventListener("click", () => {
	const name = nameInput.value.trim();
	const age = Number(ageInput.value);

	if (!name || !age) return;

	users.push({ name, age });
	renderTable();

	nameInput.value = "";
	ageInput.value = "";
});

// Render tabulky
function renderTable() {
	tableBody.innerHTML = "";

	users.forEach((user, index) => {
		const tr = document.createElement("tr");

		const nameTd = document.createElement("td");
		const ageTd = document.createElement("td");
		const actionTd = document.createElement("td");

		nameTd.textContent = user.name;
		ageTd.textContent = user.age;

		const editBtn = document.createElement("button");
		editBtn.textContent = "Edit";
		editBtn.className = "edit";

		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Smazat";
		removeBtn.className = "remove";

		// Mazání
		removeBtn.addEventListener("click", () => {
			users.splice(index, 1);
			renderTable();
		});

		// Editace
		editBtn.addEventListener("click", () => {
			if (editBtn.textContent === "Edit") {
				const nameInput = document.createElement("input");
				const ageInput = document.createElement("input");

				nameInput.value = user.name;
				ageInput.value = user.age;

				nameTd.innerHTML = "";
				ageTd.innerHTML = "";

				nameTd.appendChild(nameInput);
				ageTd.appendChild(ageInput);

				editBtn.textContent = "Uložit";
			} else {
				user.name = nameTd.querySelector("input").value;
				user.age = Number(ageTd.querySelector("input").value);

				renderTable();
			}
		});

		actionTd.appendChild(editBtn);
		actionTd.appendChild(removeBtn);

		tr.appendChild(nameTd);
		tr.appendChild(ageTd);
		tr.appendChild(actionTd);

		tableBody.appendChild(tr);
	});
}

// Třídění podle věku
sortAge.addEventListener("click", () => {
	users.sort((a, b) => (sortAsc ? a.age - b.age : b.age - a.age));
	sortAsc = !sortAsc;
	renderTable();
});
