document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    const generateSuggestionsBtn = document.getElementById('generateSuggestionsBtn');
    const mealSuggestionsList = document.getElementById('mealSuggestionsList');
    const todaysMeal = document.getElementById('todaysMeal');
    const currentDateElement = document.getElementById('currentDate');
    const prevDayBtn = document.getElementById('prevDayBtn');
    const nextDayBtn = document.getElementById('nextDayBtn');
  
    let currentDate = new Date();
  
    logoutBtn.addEventListener('click', function () {
      alert('Logging out...');
      // Add logout functionality, for example, redirecting to the login page
    });
  
    generateSuggestionsBtn.addEventListener('click', generateMealSuggestions);
    prevDayBtn.addEventListener('click', navigateDay.bind(null, -1));
    nextDayBtn.addEventListener('click', navigateDay.bind(null, 1));
  
    displayDate();
    displayMealPlan(currentDate);
  
    function generateMealSuggestions() {
      // This is a placeholder, you would typically fetch meal suggestions from a server
      const suggestions = ['Grilled Chicken Salad', 'Vegetable Stir-Fry', 'Quinoa Bowl', 'Salmon with Lemon'];
      mealSuggestionsList.innerHTML = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
    }
  
    function navigateDay(days) {
      currentDate.setDate(currentDate.getDate() + days);
      displayDate();
      displayMealPlan(currentDate);
    }
  
    function displayDate() {
      currentDateElement.textContent = currentDate.toDateString();
    }
  
    function displayMealPlan(date) {
      // This is a placeholder, you would typically fetch meal plan data from a server
      const mealPlan = {
        '2023-12-01': 'Avocado Toast',
        '2023-12-02': 'Chicken Alfredo Pasta',
        // Add more meal plan data as needed
      };
  
      const formattedDate = formatDate(date);
      const meal = mealPlan[formattedDate] || 'No meal planned for this day';
  
      todaysMeal.textContent = `Meal for ${formattedDate}: ${meal}`;
    }
  
    function formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  });