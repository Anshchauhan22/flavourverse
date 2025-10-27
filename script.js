document.addEventListener('DOMContentLoaded', () => {
    
    const RECIPES = [
        {
            id: 'r01',
            title: 'Creamy Tomato Basil Pasta',
            image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['400g pasta', '2 cups crushed tomatoes', '1/2 cup cream', '2 cloves garlic', 'Fresh basil leaves', 'Salt & pepper'],
            instructions: 'Cook pasta until al dente. Sauté garlic in olive oil, add crushed tomatoes and simmer 8 minutes. Stir in cream and basil, toss pasta, serve with parmesan.',
            cuisine: 'Italian',
            diet: 'Vegetarian',
            readyInMinutes: 25,
            servings: 4,
            nutrition: { calories: 520, protein_g: 12, fat_g: 20, carbs_g: 68 },
            videoId: '1-SJGQ2HLp8'
        },
        {
            id: 'r02',
            title: 'Chicken Tikka Masala',
            image: 'https://images.unsplash.com/photo-1604908177522-2a4c6b8a0a86?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['500g chicken', '1 cup yogurt', '2 tbsp tikka masala paste', '1 onion', '1 cup tomato puree', 'Cream (optional)'],
            instructions: 'Marinate chicken in yogurt and tikka paste 1 hour. Sear onion, add tomato puree, simmer, add chicken and cook until done. Finish with cream if desired.',
            cuisine: 'Indian',
            diet: 'Gluten Free',
            readyInMinutes: 45,
            servings: 4,
            nutrition: { calories: 450, protein_g: 30, fat_g: 22, carbs_g: 18 },
            videoId: 'V1Ju9H3Gd0k'
        },
        {
            id: 'r03',
            title: 'Classic Margherita Pizza',
            image: 'https://images.unsplash.com/photo-1548365328-8b2f9b39e0d9?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil leaves', 'Olive oil'],
            instructions: 'Stretch dough, spread sauce, top with mozzarella and bake at high heat until crust is golden. Add basil and olive oil.',
            cuisine: 'Italian',
            diet: 'Vegetarian',
            readyInMinutes: 30,
            servings: 2,
            nutrition: { calories: 780, protein_g: 28, fat_g: 34, carbs_g: 78 },
            videoId: '3AAdKl1UYZs'
        },
        {
            id: 'r04',
            title: 'Mexican Chicken Tacos',
            image: 'https://images.unsplash.com/photo-1604908177730-3f2b68f7e6b8?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Chicken strips', 'Taco seasoning', 'Small tortillas', 'Cabbage slaw', 'Lime & cilantro'],
            instructions: 'Season chicken, pan-fry until cooked. Warm tortillas, assemble with slaw, chicken, and a squeeze of lime.',
            cuisine: 'Mexican',
            diet: 'Ketogenic',
            readyInMinutes: 20,
            servings: 4,
            nutrition: { calories: 350, protein_g: 26, fat_g: 18, carbs_g: 22 },
            videoId: 'c3S1QbS8a6k'
        },
        {
            id: 'r05',
            title: 'Vegan Buddha Bowl',
            image: 'https://images.unsplash.com/photo-1542444459-db2a5f7a0c96?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Quinoa', 'Roasted sweet potato', 'Chickpeas', 'Avocado', 'Tahini dressing'],
            instructions: 'Cook quinoa. Roast sweet potatoes and chickpeas. Assemble bowl with greens, quinoa, roasted veggies and tahini dressing.',
            cuisine: 'Fusion',
            diet: 'Vegan',
            readyInMinutes: 35,
            servings: 2,
            nutrition: { calories: 520, protein_g: 14, fat_g: 20, carbs_g: 68 },
            videoId: 'z1Q8Vxv8q8I'
        },
        {
            id: 'r06',
            title: 'Apple Cinnamon Crumble',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['4 apples', '1 cup oats', '1/2 cup butter', 'Brown sugar', 'Cinnamon'],
            instructions: 'Slice apples, toss with sugar and cinnamon. Place in dish. Mix oats, butter, sugar for topping and bake until golden.',
            cuisine: 'Dessert',
            diet: 'Vegetarian',
            readyInMinutes: 50,
            servings: 6,
            nutrition: { calories: 420, protein_g: 5, fat_g: 18, carbs_g: 62 },
            videoId: '6fqGkVg3G6I'
        },
        {
            id: 'r07',
            title: 'Paneer Butter Masala',
            image: 'https://images.unsplash.com/photo-1604908177661-1f3a3c5fb37b?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['250g paneer', 'Tomato puree', 'Butter', 'Cream', 'Garam masala'],
            instructions: 'Sauté tomatoes with spices, blend to smooth. Cook paneer in buttery tomato gravy; finish with cream and butter.',
            cuisine: 'Indian',
            diet: 'Vegetarian',
            readyInMinutes: 35,
            servings: 3,
            nutrition: { calories: 540, protein_g: 18, fat_g: 36, carbs_g: 28 },
            videoId: 't7X0s8N7gQk'
        },
        {
            id: 'r08',
            title: 'Sushi Bowl (Deconstructed Sushi)',
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Sushi rice', 'Avocado', 'Cucumber', 'Smoked salmon', 'Soy sauce & sesame'],
            instructions: 'Cook sushi rice. Top with sliced avocado, cucumber, salmon and drizzle with soy & sesame seeds.',
            cuisine: 'Japanese',
            diet: 'Gluten Free',
            readyInMinutes: 20,
            servings: 2,
            nutrition: { calories: 420, protein_g: 22, fat_g: 18, carbs_g: 42 },
            videoId: '5w3m3fkdK8Q'
        },
        {
            id: 'r09',
            title: 'Spicy Ramen Noodles',
            image: 'https://images.unsplash.com/photo-1543353071-087092ec3932?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Ramen noodles', 'Chicken broth', 'Chili paste', 'Soft-boiled egg', 'Scallions'],
            instructions: 'Cook noodles in broth, stir in chili paste. Top with egg and scallions. Serve hot.',
            cuisine: 'Japanese',
            diet: 'Gluten Free',
            readyInMinutes: 18,
            servings: 2,
            nutrition: { calories: 480, protein_g: 18, fat_g: 16, carbs_g: 62 },
            videoId: '2gk3JZ9x2zw'
        },
        {
            id: 'r10',
            title: 'Butter Garlic Prawns',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Prawns', 'Butter', 'Garlic', 'Lemon', 'Parsley'],
            instructions: 'Sauté garlic in butter, add prawns and cook until pink. Finish with lemon juice and parsley.',
            cuisine: 'Seafood',
            diet: 'Keto',
            readyInMinutes: 12,
            servings: 3,
            nutrition: { calories: 260, protein_g: 30, fat_g: 12, carbs_g: 4 },
            videoId: '9xV1k2kzK1o'
        },
        {
            id: 'r11',
            title: 'Chole (Chickpea Curry)',
            image: 'https://images.unsplash.com/photo-1600720310474-14c1022c8b11?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Chickpeas', 'Onion', 'Tomato', 'Ginger garlic paste', 'Chole masala'],
            instructions: 'Cook chickpeas. Sauté onion, add tomatoes and spices. Add chickpeas and simmer until flavors meld.',
            cuisine: 'Indian',
            diet: 'Vegan',
            readyInMinutes: 40,
            servings: 4,
            nutrition: { calories: 330, protein_g: 14, fat_g: 8, carbs_g: 52 },
            videoId: 'o8kYxK7uA2s'
        },
        {
            id: 'r12',
            title: 'Greek Salad with Feta',
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Tomatoes', 'Cucumber', 'Red onion', 'Feta cheese', 'Olives', 'Olive oil'],
            instructions: 'Chop veggies, crumble feta, toss with olive oil, lemon and oregano. Serve chilled.',
            cuisine: 'Greek',
            diet: 'Vegetarian',
            readyInMinutes: 10,
            servings: 2,
            nutrition: { calories: 220, protein_g: 6, fat_g: 18, carbs_g: 8 },
            videoId: 'aN7YH7Q8bO4'
        },
        {
            id: 'r13',
            title: 'Beef Stir Fry with Broccoli',
            image: 'https://images.unsplash.com/photo-1512058564366-c9e5d1b64c0b?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Beef strips', 'Broccoli', 'Soy sauce', 'Ginger', 'Garlic'],
            instructions: 'Stir-fry beef in hot pan, remove. Stir-fry broccoli, add beef back with sauce and cook 1-2 minutes.',
            cuisine: 'Chinese',
            diet: 'Ketogenic',
            readyInMinutes: 20,
            servings: 3,
            nutrition: { calories: 380, protein_g: 32, fat_g: 22, carbs_g: 10 },
            videoId: 'fJ9rGC4wVbQ'
        },
        {
            id: 'r14',
            title: 'Lemon Drizzle Cake',
            image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Lemons'],
            instructions: 'Make batter, bake until golden. Mix lemon syrup and pour over hot cake to soak. Cool and serve.',
            cuisine: 'Dessert',
            diet: 'Vegetarian',
            readyInMinutes: 60,
            servings: 8,
            nutrition: { calories: 360, protein_g: 5, fat_g: 14, carbs_g: 52 },
            videoId: 'k3Q8dohn7Tg'
        },
        {
            id: 'r15',
            title: 'Avocado Toast with Poached Egg',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
            ingredients: ['Sourdough bread', 'Avocado', 'Egg', 'Chili flakes', 'Lemon'],
            instructions: 'Toast bread, smash avocado on top, add a poached egg, sprinkle chili flakes and drizzle lemon.',
            cuisine: 'Brunch',
            diet: 'Vegetarian',
            readyInMinutes: 10,
            servings: 1,
            nutrition: { calories: 310, protein_g: 10, fat_g: 18, carbs_g: 28 },
            videoId: 'dZzXU6wV8oU'
        }
    ];

    // ========================
    // DOM elements
    // ========================
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResultsSection = document.getElementById('search-results-section');
    const resultsTitle = document.getElementById('results-title');
    const searchResultsContainer = document.getElementById('search-results');
    const loader = document.getElementById('loader');
    const errorMessage = document.getElementById('error-message');

    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const recipeModal = document.getElementById('recipe-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modalContentContainer = document.getElementById('modal-content-container');

    const randomRecipeContainer = document.getElementById('random-recipe-container');
    const dietCards = document.querySelectorAll('.diet-card');
    const cuisinesContainer = document.getElementById('cuisines-container');

    const seasonalTitle = document.getElementById('seasonal-title');
    const seasonalRecipesContainer = document.getElementById('seasonal-recipes');
    const videoRecipesContainer = document.getElementById('video-recipes-container');
    const videoModal = document.getElementById('video-modal');
    const closeVideoModalButton = document.getElementById('close-video-modal');
    const videoIframeContainer = document.getElementById('video-iframe-container');

    const plannerNavLink = document.getElementById('planner-nav-link');
    const mealPlannerSection = document.getElementById('meal-planner-section');
    const mealPlanList = document.getElementById('meal-plan-list');
    const mealPlanEmptyMsg = document.getElementById('meal-plan-empty-msg');

    let mealPlan = JSON.parse(localStorage.getItem('fv_mealplan') || '[]');

    // ========================
    // Helpers & rendering
    // ========================
    const showLoader = () => {
        loader.classList.remove('hidden');
        searchResultsContainer.innerHTML = '';
        errorMessage.classList.add('hidden');
    };
    const hideLoader = () => loader.classList.add('hidden');
    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        searchResultsContainer.innerHTML = '';
    };

    const saveMealPlan = () => {
        localStorage.setItem('fv_mealplan', JSON.stringify(mealPlan));
    };

    const escapeHtml = (text) => {
        if (!text && text !== 0) return '';
        return String(text).replace(/&/g, '&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    };

    const createRecipeCard = (recipe) => {
        return `
            <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" data-id="${recipe.id}">
                <img src="${recipe.image || 'https://placehold.co/600x400'}" alt="${escapeHtml(recipe.title)}" class="w-full">
                <div class="p-4">
                    <h3 class="font-bold text-lg truncate">${escapeHtml(recipe.title)}</h3>
                </div>
            </div>
        `;
    };

    const displayRecipes = (recipes, container, title) => {
        if (!recipes || recipes.length === 0) {
            showError(`No recipes found for "${title}". Try another search.`);
            return;
        }
        container.innerHTML = recipes.map(createRecipeCard).join('');
    };

    // ========================
    // Search & filters (local)
    // ========================
    const performSearch = async (query, type = 'query') => {
        searchResultsSection.classList.remove('hidden');
        seasonalRecipesContainer.parentElement.parentElement.classList.add('hidden'); // Hide seasonal
        resultsTitle.textContent = `Showing results for "${query}"`;
        window.location.hash = '#search-results-section';
        showLoader();

        setTimeout(() => {
            hideLoader();
            let results = [];
            const qLower = query.toLowerCase();
            if (type === 'diet') {
                results = RECIPES.filter(r => r.diet && r.diet.toLowerCase().includes(qLower));
            } else if (type === 'cuisine') {
                results = RECIPES.filter(r => r.cuisine && r.cuisine.toLowerCase().includes(qLower));
            } else {
                results = RECIPES.filter(r => {
                    return r.title.toLowerCase().includes(qLower) ||
                           (r.ingredients && r.ingredients.join(' ').toLowerCase().includes(qLower)) ||
                           (r.cuisine && r.cuisine.toLowerCase().includes(qLower));
                });
            }
            displayRecipes(results, searchResultsContainer, query);
        }, 200);
    };

    const openRecipeModal = (recipeId) => {
        const recipe = RECIPES.find(r => r.id === recipeId);
        if (!recipe) {
            modalContentContainer.innerHTML = `<p class="text-center p-8 text-red-500">Recipe not found.</p>`;
            recipeModal.classList.remove('hidden');
            return;
        }

        const nut = recipe.nutrition || {};
        const nutritionHtml = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div><p class="font-bold text-2xl">${Math.round(nut.calories || 0)}</p><p class="text-sm text-gray-500">Calories</p></div>
                <div><p class="font-bold text-2xl">${Math.round(nut.protein_g || 0)}g</p><p class="text-sm text-gray-500">Protein</p></div>
                <div><p class="font-bold text-2xl">${Math.round(nut.fat_g || 0)}g</p><p class="text-sm text-gray-500">Fat</p></div>
                <div><p class="font-bold text-2xl">${Math.round(nut.carbs_g || 0)}g</p><p class="text-sm text-gray-500">Carbs</p></div>
            </div>
        `;

        modalContentContainer.innerHTML = `
            <img src="${recipe.image}" alt="${escapeHtml(recipe.title)}" class="w-full h-64 object-cover">
            <div class="p-6 md:p-8">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">${escapeHtml(recipe.title)}</h2>
                <div class="flex items-center space-x-4 mb-6 text-gray-600">
                    <span>🕒 ${recipe.readyInMinutes} minutes</span>
                    <span>🍽️ ${recipe.servings} servings</span>
                    <span class="uppercase text-sm px-2 py-1 bg-amber-50 rounded">${escapeHtml(recipe.diet)}</span>
                </div>
                <div class="prose max-w-none mb-8">${escapeHtml(recipe.instructions)}</div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">Ingredients</h3>
                        <ul class="list-disc list-inside space-y-2">
                            ${recipe.ingredients.map(ing => `<li>${escapeHtml(ing)}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-4 border-b pb-2">Nutrition Facts (Estimated)</h3>
                        ${nutritionHtml}
                    </div>
                </div>

                <div class="text-center mt-8">
                    <button id="add-to-plan-btn" data-recipe-id="${recipe.id}" data-recipe-title="${escapeHtml(recipe.title)}" class="bg-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors">
                        Add to Meal Plan
                    </button>
                </div>
            </div>
        `;
        recipeModal.classList.remove('hidden');
    };

    // ========================
    // Seasonal, random, cuisines & videos from local data
    // ========================
    const getSeason = () => {
        const month = new Date().getMonth();
        if (month >= 2 && month <= 4) return 'Spring';
        if (month >= 5 && month <= 7) return 'Summer';
        if (month >= 8 && month <= 10) return 'Autumn';
        return 'Winter';
    };

    const seasonalKeywords = {
        Spring: ['asparagus','peas','berries','spring'],
        Summer: ['tomato','zucchini','berries','summer'],
        Autumn: ['pumpkin','squash','apple','autumn'],
        Winter: ['potato','stew','citrus','winter']
    };

    const loadSeasonalRecipes = () => {
        const season = getSeason();
        seasonalTitle.textContent = `${season}'s Delicious Picks`;
        const keywords = seasonalKeywords[season];
        const matches = RECIPES.filter(r =>
            r.ingredients.join(' ').toLowerCase().split(/\W+/).some(word => keywords.includes(word))
        );
        const chosen = matches.length ? matches.slice(0,4) : RECIPES.slice(0,4);
        seasonalRecipesContainer.innerHTML = chosen.map(createRecipeCard).join('');
    };

    const loadRandomRecipe = () => {
        const idx = Math.floor(Math.random() * RECIPES.length);
        const recipe = RECIPES[idx];
        randomRecipeContainer.innerHTML = `
            <img class="w-full md:w-1/2 h-64 md:h-auto object-cover" src="${recipe.image}" alt="${escapeHtml(recipe.title)}">
            <div class="p-8">
                <p class="text-sm font-semibold text-amber-500 uppercase tracking-widest">Surprise! Try this...</p>
                <h3 class="text-2xl md:text-3xl font-bold mt-2 mb-4">${escapeHtml(recipe.title)}</h3>
                <p class="text-gray-600 mb-6">Ready in ${recipe.readyInMinutes} minutes • Serves ${recipe.servings}</p>
                <button class="font-bold text-lg text-amber-600 hover:text-amber-800 view-recipe-btn" data-id="${recipe.id}">View Recipe &rarr;</button>
            </div>
        `;
        randomRecipeContainer.dataset.id = recipe.id;
    };

    const loadCuisineButtons = () => {
        const cuisines = Array.from(new Set(RECIPES.map(r => r.cuisine))).slice(0,6);
        cuisinesContainer.innerHTML = cuisines.map(c => `
            <div class="cuisine-card bg-white p-4 rounded-lg shadow-md text-center cursor-pointer" data-cuisine="${c}">
                <h3 class="text-lg font-semibold">${c}</h3>
            </div>
        `).join('');
    };

    const loadVideoRecipes = () => {
        const withVideo = RECIPES.filter(r => r.videoId).slice(0,6);
        videoRecipesContainer.innerHTML = withVideo.map(r => `
            <div class="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group" data-youtube-id="${r.videoId}">
                <img src="${r.image}" alt="${escapeHtml(r.title)}" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                    <h3 class="text-white text-xl font-bold">${escapeHtml(r.title)}</h3>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white text-opacity-80 group-hover:text-opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        `).join('');
    };

    // ========================
    // Meal plan rendering & persistence
    // ========================
    const renderMealPlan = () => {
         if (mealPlan.length === 0) {
            mealPlanEmptyMsg.classList.remove('hidden');
            mealPlanList.innerHTML = '';
         } else {
            mealPlanEmptyMsg.classList.add('hidden');
            mealPlanList.innerHTML = mealPlan.map((item, index) => `
                <li class="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                    <span>${escapeHtml(item.title)}</span>
                    <button class="remove-from-plan-btn text-red-500 hover:text-red-700" data-index="${index}">&times;</button>
                </li>
            `).join('');
         }
    };

    // ========================
    // Events
    // ========================
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent', 'text-white');
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'text-gray-800', 'shadow-md');
        } else {
            header.classList.add('bg-transparent', 'text-white');
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'text-gray-800', 'shadow-md');
        }
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) performSearch(query, 'query');
    });

    dietCards.forEach(card => {
        card.addEventListener('click', () => {
            const diet = card.dataset.diet;
            performSearch(diet, 'diet');
        });
    });

    cuisinesContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.cuisine-card');
        if (card) {
            const cuisine = card.dataset.cuisine;
            performSearch(cuisine, 'cuisine');
        }
    });

    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (card && card.dataset.id) {
            openRecipeModal(card.dataset.id);
        }

        const viewBtn = e.target.closest('.view-recipe-btn');
        if (viewBtn) {
            const id = viewBtn.dataset.id;
            openRecipeModal(id);
        }

        const addToPlanBtn = e.target.closest('#add-to-plan-btn');
        if(addToPlanBtn) {
            const recipeId = addToPlanBtn.dataset.recipeId;
            const recipeTitle = addToPlanBtn.dataset.recipeTitle;
            mealPlan.push({ id: recipeId, title: recipeTitle });
            saveMealPlan();
            alert(`${recipeTitle} added to your meal plan!`);
            recipeModal.classList.add('hidden');
            mealPlannerSection.classList.remove('hidden');
            renderMealPlan();
        }

        const removeFromPlanBtn = e.target.closest('.remove-from-plan-btn');
        if (removeFromPlanBtn) {
            const index = parseInt(removeFromPlanBtn.dataset.index, 10);
            mealPlan.splice(index, 1);
            saveMealPlan();
            renderMealPlan();
        }

        const videoCard = e.target.closest('[data-youtube-id]');
        if (videoCard) {
            const youtubeId = videoCard.dataset.youtubeId;
            videoIframeContainer.innerHTML = `<iframe class="w-full h-full" src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            videoModal.classList.remove('hidden');
        }
    });

    closeModalButton.addEventListener('click', () => recipeModal.classList.add('hidden'));
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) recipeModal.classList.add('hidden');
    });

    closeVideoModalButton.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        videoIframeContainer.innerHTML = '';
    });
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.add('hidden');
            videoIframeContainer.innerHTML = '';
        }
    });

    plannerNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        mealPlannerSection.classList.toggle('hidden');
        window.scrollTo({ top: mealPlannerSection.offsetTop, behavior: 'smooth' });
    });

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            alert(`Thanks! ${email} is now subscribed (demo).`);
            newsletterForm.reset();
        });
    }

    // ========================
    // Init
    // ========================
    const init = () => {
        loadSeasonalRecipes();
        loadRandomRecipe();
        loadCuisineButtons();
        loadVideoRecipes();
        renderMealPlan();
    };

    init();
});

