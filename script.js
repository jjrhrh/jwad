const TMDB_API_KEY = "YOUR_KEY_HERE";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMG_POSTER = "https://image.tmdb.org/t/p/w500";
const TMDB_IMG_BACKDROP = "https://image.tmdb.org/t/p/original";
const TMDB_LANGUAGE = "ar-SA";

const SERVER_URLS = {
    1: "https://example.com/embed/server1/[MOVIE_ID]",
    2: "https://example.com/embed/server2/[MOVIE_ID]"
};

const GENRES = {
    28: "أكشن",
    12: "مغامرة",
    16: "رسوم متحركة",
    35: "كوميديا",
    80: "جريمة",
    99: "وثائقي",
    18: "دراما",
    10751: "عائلي",
    14: "فانتازيا",
    36: "تاريخ",
    27: "رعب",
    10402: "موسيقى",
    9648: "غموض",
    10749: "رومانسي",
    878: "خيال علمي",
    10770: "فيلم تلفزيوني",
    53: "إثارة",
    10752: "حرب",
    37: "غربي"
};

const DEMO_MOVIES = [
    { id: 9001, title: "ظلال الفجر الأحمر", overview: "في مدينة لا تنام، يكتشف محقق سابق خيوط مؤامرة غامضة تمتد إلى أعلى مستويات السلطة، وعليه أن يواجه ماضيه المظلم قبل أن يحل الفجر.", rating: 8.7, year: "2026", genre: "أكشن • إثارة", poster: "https://picsum.photos/seed/cr1/500/750", backdrop: "https://picsum.photos/seed/cr1/1920/1080" },
    { id: 9002, title: "ليل النيون", overview: "سائق سيارة أجرة يجد نفسه وسط عصابة غامضة بعد أن ينقل راكباً يحمل سراً خطيراً في ليلة ممطرة.", rating: 8.2, year: "2025", genre: "جريمة • دراما", poster: "https://picsum.photos/seed/cr2/500/750", backdrop: "https://picsum.photos/seed/cr2/1920/1080" },
    { id: 9003, title: "آخر الأقمار", overview: "طاقم فضائي يتلقى إشارة من كوكب مهجور، ليكتشف أن الرحلة لم تكن صدفة أبداً.", rating: 7.9, year: "2026", genre: "خيال علمي • مغامرة", poster: "https://picsum.photos/seed/cr3/500/750", backdrop: "https://picsum.photos/seed/cr3/1920/1080" },
    { id: 9004, title: "صدى الصحراء", overview: "رحلة بحث عن كنز مفقود تتحول إلى صراع من أجل البقاء بين الكثبان والعواصف.", rating: 7.5, year: "2024", genre: "مغامرة • دراما", poster: "https://picsum.photos/seed/cr4/500/750", backdrop: "https://picsum.photos/seed/cr4/1920/1080" },
    { id: 9005, title: "بيت الهمس", overview: "عائلة تنتقل إلى منزل قديم وتبدأ بسماع أصوات تكشف أسراراً دفينة عن سكانه السابقين.", rating: 7.1, year: "2025", genre: "رعب • غموض", poster: "https://picsum.photos/seed/cr5/500/750", backdrop: "https://picsum.photos/seed/cr5/1920/1080" },
    { id: 9006, title: "ضحكة أخيرة", overview: "كوميدي فاشل يحصل على فرصة أخيرة للنجاح، لكن الأمور تخرج عن السيطرة بشكل طريف.", rating: 6.8, year: "2026", genre: "كوميديا", poster: "https://picsum.photos/seed/cr6/500/750", backdrop: "https://picsum.photos/seed/cr6/1920/1080" },
    { id: 9007, title: "سباق الريح", overview: "سائق سباقات سابق يعود إلى الحلبة لينقذ فريقه من الإفلاس في سباق مصيري.", rating: 7.7, year: "2025", genre: "أكشن • رياضة", poster: "https://picsum.photos/seed/cr7/500/750", backdrop: "https://picsum.photos/seed/cr7/1920/1080" },
    { id: 9008, title: "مدينة الزجاج", overview: "مهندسة معمارية تكتشف أن المدينة التي صممتها تخفي نظام مراقبة شامل.", rating: 8.0, year: "2026", genre: "خيال علمي • إثارة", poster: "https://picsum.photos/seed/cr8/500/750", backdrop: "https://picsum.photos/seed/cr8/1920/1080" },
    { id: 9009, title: "وعد الغروب", overview: "قصة حب تتحدى الزمن بين عازف كمان وفتاة تعيش في ذاكرة مدينة قديمة.", rating: 7.3, year: "2024", genre: "رومانسي • دراما", poster: "https://picsum.photos/seed/cr9/500/750", backdrop: "https://picsum.photos/seed/cr9/1920/1080" },
    { id: 9010, title: "قلعة الرماد", overview: "فارس منفي يعود لاستعادة عرش أجداده من ملك جائر في معركة أخيرة.", rating: 8.4, year: "2025", genre: "فانتازيا • حرب", poster: "https://picsum.photos/seed/cr10/500/750", backdrop: "https://picsum.photos/seed/cr10/1920/1080" },
    { id: 9011, title: "رسائل من البحر", overview: "صياد عجوز يعثر على زجاجة تحمل رسالة تقوده إلى مغامرة لم يتخيلها.", rating: 7.0, year: "2024", genre: "مغامرة • عائلي", poster: "https://picsum.photos/seed/cr11/500/750", backdrop: "https://picsum.photos/seed/cr11/1920/1080" },
    { id: 9012, title: "الحارس الأخير", overview: "حارس أمن في متحف يكتشف أن القطع الأثرية تخفي قوة قديمة تستيقظ ليلاً.", rating: 7.6, year: "2026", genre: "فانتازيا • مغامرة", poster: "https://picsum.photos/seed/cr12/500/750", backdrop: "https://picsum.photos/seed/cr12/1920/1080" }
];

const state = {
    useDemo: false,
    movies: [],
    heroMovie: null,
    currentMovie: null,
    currentServer: 1,
    searchTimer: null,
    favorites: []
};

const els = {};

function cacheElements() {
    els.searchForm = document.getElementById("search-form");
    els.searchInput = document.getElementById("search-input");
    els.mobileSearchBtn = document.getElementById("mobile-search-btn");
    els.heroImage = document.getElementById("hero-image");
    els.heroTitle = document.getElementById("hero-title");
    els.heroDescription = document.getElementById("hero-description");
    els.heroWatchBtn = document.getElementById("hero-watch-btn");
    els.heroFavBtn = document.getElementById("hero-fav-btn");
    els.grid = document.getElementById("movies-grid");
    els.modal = document.getElementById("player-modal");
    els.iframe = document.getElementById("player-iframe");
    els.closeBtn = document.getElementById("close-modal-btn");
    els.modalTitle = document.getElementById("modal-title");
    els.modalStory = document.getElementById("modal-story");
    els.modalRating = document.getElementById("modal-rating");
    els.modalYear = document.getElementById("modal-year");
    els.modalGenre = document.getElementById("modal-genre");
    els.serverBtns = document.querySelectorAll(".server-btn");
}

function hasApiKey() {
    return TMDB_API_KEY && TMDB_API_KEY !== "YOUR_KEY_HERE";
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
}

function loadFavorites() {
    try {
        const stored = localStorage.getItem("cinema_red_favorites");
        state.favorites = stored ? JSON.parse(stored) : [];
    } catch (error) {
        state.favorites = [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem("cinema_red_favorites", JSON.stringify(state.favorites));
    } catch (error) {
        return;
    }
}

function isFavorite(id) {
    return state.favorites.includes(id);
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        state.favorites = state.favorites.filter(function (favId) {
            return favId !== id;
        });
    } else {
        state.favorites.push(id);
    }
    saveFavorites();
}

function updateHeroFavButton() {
    if (!state.heroMovie) return;
    const active = isFavorite(state.heroMovie.id);
    els.heroFavBtn.innerHTML = active
        ? '<i class="fa-solid fa-heart text-red-500"></i><span>في المفضلة</span>'
        : '<i class="fa-regular fa-heart text-red-500"></i><span>المفضلة</span>';
}

async function fetchFromTMDB(endpoint, params) {
    const query = new URLSearchParams(Object.assign({
        api_key: TMDB_API_KEY,
        language: TMDB_LANGUAGE
    }, params || {}));
    const response = await fetch(TMDB_BASE_URL + endpoint + "?" + query.toString());
    if (!response.ok) {
        throw new Error("TMDB request failed: " + response.status);
    }
    return response.json();
}

function normalizeMovie(raw) {
    const genreNames = (raw.genre_ids || [])
        .map(function (id) { return GENRES[id]; })
        .filter(Boolean)
        .slice(0, 3)
        .join(" • ");
    return {
        id: raw.id,
        title: raw.title || raw.name || "بدون عنوان",
        overview: raw.overview || "لا تتوفر قصة لهذا العمل باللغة العربية حالياً.",
        rating: raw.vote_average ? Number(raw.vote_average).toFixed(1) : "--",
        year: (raw.release_date || "").slice(0, 4) || "----",
        genre: genreNames || "غير مصنف",
        poster: raw.poster_path ? TMDB_IMG_POSTER + raw.poster_path : "https://picsum.photos/seed/p" + raw.id + "/500/750",
        backdrop: raw.backdrop_path ? TMDB_IMG_BACKDROP + raw.backdrop_path : "https://picsum.photos/seed/b" + raw.id + "/1920/1080"
    };
}

async function loadTrendingMovies() {
    if (!hasApiKey()) {
        state.useDemo = true;
        state.movies = DEMO_MOVIES.slice();
        return;
    }
    try {
        const data = await fetchFromTMDB("/trending/movie/week");
        const list = (data.results || []).map(normalizeMovie);
        if (!list.length) throw new Error("Empty results");
        state.useDemo = false;
        state.movies = list;
    } catch (error) {
        state.useDemo = true;
        state.movies = DEMO_MOVIES.slice();
    }
}

function renderHero(movie) {
    if (!movie) return;
    state.heroMovie = movie;
    els.heroImage.src = movie.backdrop;
    els.heroImage.alt = movie.title;
    els.heroTitle.textContent = movie.title;
    els.heroDescription.textContent = movie.overview;
    updateHeroFavButton();
}

function createMovieCard(movie) {
    const card = document.createElement("article");
    card.className = "movie-card group relative cursor-pointer rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition transform hover:-translate-y-2";
    card.dataset.id = movie.id;
    card.innerHTML =
        '<div class="relative aspect-[2/3] overflow-hidden">' +
            '<img src="' + escapeHTML(movie.poster) + '" alt="' + escapeHTML(movie.title) + '" loading="lazy" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">' +
            '<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>' +
            '<span class="absolute top-2 right-2 bg-black/80 text-yellow-400 text-xs font-bold rounded-full px-2 py-1"><i class="fa-solid fa-star"></i> ' + escapeHTML(movie.rating) + '</span>' +
            '<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">' +
                '<span class="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-xl neon-btn"><i class="fa-solid fa-play"></i></span>' +
            '</div>' +
        '</div>' +
        '<div class="p-3">' +
            '<h3 class="font-bold text-sm md:text-base truncate">' + escapeHTML(movie.title) + '</h3>' +
            '<p class="text-xs text-gray-400 mt-1">' + escapeHTML(movie.year) + ' • ' + escapeHTML(movie.genre) + '</p>' +
        '</div>';
    card.addEventListener("click", function () {
        openModal(movie);
    });
    return card;
}

function renderGrid(movies) {
    els.grid.innerHTML = "";
    if (!movies.length) {
        els.grid.innerHTML = '<p class="col-span-full text-center text-gray-400 py-10">لا توجد نتائج.</p>';
        return;
    }
    const fragment = document.createDocumentFragment();
    movies.forEach(function (movie) {
        fragment.appendChild(createMovieCard(movie));
    });
    els.grid.appendChild(fragment);
}

function createSearchDropdown() {
    const dropdown = document.createElement("div");
    dropdown.id = "search-dropdown";
    dropdown.className = "hidden absolute top-full right-0 mt-2 w-full min-w-[300px] max-h-96 overflow-y-auto bg-zinc-950 border border-red-900/60 rounded-xl shadow-2xl neon-box z-50";
    els.searchForm.appendChild(dropdown);
    els.dropdown = dropdown;
}

function hideDropdown() {
    els.dropdown.classList.add("hidden");
    els.dropdown.innerHTML = "";
}

function renderDropdown(results, query) {
    els.dropdown.classList.remove("hidden");
    if (!results.length) {
        els.dropdown.innerHTML = '<p class="p-4 text-sm text-gray-400 text-center">لا توجد نتائج لـ "' + escapeHTML(query) + '"</p>';
        return;
    }
    els.dropdown.innerHTML = "";
    results.slice(0, 8).forEach(function (movie) {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "w-full flex items-center gap-3 p-3 text-right hover:bg-zinc-900 border-b border-zinc-900 last:border-b-0 transition";
        item.innerHTML =
            '<img src="' + escapeHTML(movie.poster) + '" alt="" class="w-10 h-14 object-cover rounded">' +
            '<div class="flex-1 min-w-0">' +
                '<p class="font-bold text-sm truncate">' + escapeHTML(movie.title) + '</p>' +
                '<p class="text-xs text-gray-400">' + escapeHTML(movie.year) + ' • <span class="text-yellow-400"><i class="fa-solid fa-star"></i> ' + escapeHTML(movie.rating) + '</span></p>' +
            '</div>';
        item.addEventListener("click", function () {
            hideDropdown();
            els.searchInput.value = "";
            openModal(movie);
        });
        els.dropdown.appendChild(item);
    });
}

async function searchMovies(query) {
    if (state.useDemo) {
        const needle = query.toLowerCase();
        return DEMO_MOVIES.filter(function (movie) {
            return movie.title.toLowerCase().includes(needle) || movie.genre.toLowerCase().includes(needle);
        });
    }
    const data = await fetchFromTMDB("/search/movie", { query: query, include_adult: "false" });
    return (data.results || []).map(normalizeMovie);
}

async function handleSearchInput() {
    const query = els.searchInput.value.trim();
    clearTimeout(state.searchTimer);
    if (query.length < 2) {
        hideDropdown();
        return;
    }
    state.searchTimer = setTimeout(async function () {
        try {
            const results = await searchMovies(query);
            if (els.searchInput.value.trim() !== query) return;
            renderDropdown(results, query);
        } catch (error) {
            els.dropdown.classList.remove("hidden");
            els.dropdown.innerHTML = '<p class="p-4 text-sm text-red-400 text-center">تعذر البحث حالياً.</p>';
        }
    }, 350);
}

function toggleMobileSearch() {
    const classes = ["fixed", "top-20", "inset-x-4", "z-50", "block"];
    const isOpen = els.searchForm.classList.contains("fixed");
    if (isOpen) {
        els.searchForm.classList.remove.apply(els.searchForm.classList, classes);
        els.searchInput.classList.remove("w-full");
        hideDropdown();
    } else {
        els.searchForm.classList.add.apply(els.searchForm.classList, classes);
        els.searchInput.classList.add("w-full");
        els.searchInput.focus();
    }
}

function buildPlayerUrl(serverNumber, movieId) {
    const template = SERVER_URLS[serverNumber] || SERVER_URLS[1];
    return template.replace("[MOVIE_ID]", encodeURIComponent(movieId));
}

function updateServerButtons(activeServer) {
    els.serverBtns.forEach(function (btn) {
        const isActive = Number(btn.dataset.server) === activeServer;
        btn.classList.toggle("active", isActive);
        btn.classList.toggle("bg-red-600", isActive);
        btn.classList.toggle("text-white", isActive);
        btn.classList.toggle("neon-btn", isActive);
        btn.classList.toggle("bg-zinc-900", !isActive);
        btn.classList.toggle("text-gray-300", !isActive);
        btn.classList.toggle("border", !isActive);
        btn.classList.toggle("border-red-900/60", !isActive);
    });
}

function setServer(serverNumber) {
    if (!state.currentMovie) return;
    state.currentServer = serverNumber;
    els.iframe.src = buildPlayerUrl(serverNumber, state.currentMovie.id);
    updateServerButtons(serverNumber);
}

function openModal(movie) {
    if (!movie) return;
    state.currentMovie = movie;
    els.modalTitle.textContent = movie.title;
    els.modalStory.textContent = movie.overview;
    els.modalRating.innerHTML = '<i class="fa-solid fa-star"></i> ' + escapeHTML(movie.rating);
    els.modalYear.textContent = movie.year;
    els.modalGenre.textContent = movie.genre;
    setServer(1);
    els.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    els.modal.scrollTop = 0;
}

function closeModal() {
    els.modal.classList.add("hidden");
    els.iframe.src = "";
    document.body.style.overflow = "";
    state.currentMovie = null;
}

function bindEvents() {
    els.searchInput.addEventListener("input", handleSearchInput);
    els.searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleSearchInput();
    });
    els.mobileSearchBtn.addEventListener("click", toggleMobileSearch);

    document.addEventListener("click", function (event) {
        if (!els.searchForm.contains(event.target) && event.target !== els.mobileSearchBtn && !els.mobileSearchBtn.contains(event.target)) {
            hideDropdown();
        }
    });

    els.heroWatchBtn.addEventListener("click", function () {
        openModal(state.heroMovie);
    });

    els.heroFavBtn.addEventListener("click", function () {
        if (!state.heroMovie) return;
        toggleFavorite(state.heroMovie.id);
        updateHeroFavButton();
    });

    els.closeBtn.addEventListener("click", closeModal);

    els.modal.addEventListener("click", function (event) {
        if (event.target === els.modal || event.target === els.modal.firstElementChild) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !els.modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    els.serverBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            setServer(Number(btn.dataset.server));
        });
    });
}

async function init() {
    cacheElements();
    loadFavorites();
    createSearchDropdown();
    bindEvents();
    await loadTrendingMovies();
    renderHero(state.movies[0]);
    renderGrid(state.movies.slice(1));
}

document.addEventListener("DOMContentLoaded", init);
