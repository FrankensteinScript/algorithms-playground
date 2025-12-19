const textInput = document.getElementById("text");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("items");

addBtn.addEventListener("click", () => {
	const text = textInput.value.trim();

	if (!text) return;
	const li = document.createElement("li");

	const span = document.createElement("span");
	span.textContent = text;

	const rmvBtn = document.createElement("button");
	rmvBtn.textContent = "Smazat";

	rmvBtn.addEventListener("click", () => li.remove());

	const editBtn = document.createElement("button");
	editBtn.textContent = "Upravit";

	editBtn.addEventListener("click", () => {
		const editInput = document.createElement("input");
		editInput.value = span.textContent;

		const saveBtn = document.createElement("button");
		saveBtn.textContent = "Ulozit";

		li.replaceChild(editInput, span);
		li.replaceChild(saveBtn, editBtn);

		saveBtn.addEventListener("click", () => {
			const newText = editInput.value;

			span.textContent = newText;

			li.replaceChild(span, editInput);
			li.replaceChild(editBtn, saveBtn);
		});
	});

	li.appendChild(span);
	li.appendChild(editBtn);
	li.appendChild(rmvBtn);
	list.appendChild(li);

	textInput.value = "";
});
