const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
	e.preventDefault(); // ❗ zabrání reloadu stránky

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const age = document.getElementById("age").value.trim();

	if (!name || !email || !age) {
		alert("Vyplň všechna pole");
		return;
	}

	output.textContent = `Jméno: ${name}, Email: ${email}, Věk: ${age}`;

	form.reset(); // vyčistí formulář
});
