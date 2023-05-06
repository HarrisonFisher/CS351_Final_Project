const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const servings = document.getElementById("servings").value;
    document.getElementById("spaghetti").textContent = (1/4) * servings;
    document.getElementById("tomatoes").textContent = (1/4) * servings;
    document.getElementById("garlic").textContent = (3/4) * servings;
    document.getElementById("oil").textContent = (2/4) * servings;
});