let foodsArray = [];

// Loading
function setLoading() {
  document.getElementById("Loading").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("Loading").classList.add("hidden");
}

// Fetch foods from API
async function fetchFoods(foodName = "") {
  let milContainer = document.getElementById("milContainer");
  milContainer.innerHTML = "";

  setLoading();

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );

    const data = await response.json();
    const meals = data.meals;

    if (meals.length === 0) {
      hideLoading();
      milContainer.innerHTML = `<h1 class="col-span-full text-center text-2xl text-red-600">Food not found</h1>`;
      return;
    }
    meals.forEach(
      (meal) =>
        (milContainer.innerHTML += `<div class="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white">
          <img
            src= "${meal.strMealThumb}"
            alt="${meal.strMeal}"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800">${meal.strMeal}</h2>
            <p class="text-sm text-gray-600 mt-2">
              ${meal.strInstructions.slice(0, 100)}...
            </p>
            <div class="mt-4 flex items-end justify-end">
              <button
                class="bg-yellow-400 hover:bg-yellow-500 text-white font-medium mt-auto py-1 px-2 rounded"
                onclick="foodDetails('${meal.idMeal}')"
              >
                VIEW DETAILS
              </button>
            </div>
          </div>`)
    );
  } catch (error) {
    milContainer.innerHTML = `<h1 class="col-span-full text-center text-2xl text-red-600">Error fetching foods</h1>`;
  }

  hideLoading();
}

// Search
fetchFoods();

document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value;
  fetchFoods(query);
});
document
  .getElementById("searchInput")
  .addEventListener("keypress", function () {
    const query = document.getElementById("searchInput").value;
    fetchFoods(query);
  });

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Backspace" || event.key === "Enter") {
      const query = event.target.value.trim();
      fetchFoods(query);
    }
  });

// Show detailed popup info
async function foodDetails(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { meals } = await response.json();
  const food = meals[0];

  document.getElementById("popupTitle").textContent = food.strMeal;
  document.getElementById("popupImage").src = food.strMealThumb;
  document.getElementById("popupDescription").textContent =
    food.strInstructions;

  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("popup").classList.add("flex");
}

// Close popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("popup").classList.remove("flex");
});

// Scroll-to-top button logic
const btn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
