const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const servings = document.getElementById("servings").value;
    document.getElementById("spaghetti").textContent = 1 * servings;
    document.getElementById("tomatoes").textContent = 1 * servings;
    document.getElementById("garlic").textContent = 3 * servings;
    document.getElementById("oil").textContent = 2 * servings;
});