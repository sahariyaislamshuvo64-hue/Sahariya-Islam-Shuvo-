/* ==========================================================================
   1. PERSONAL CONFIGURATION & DATASETS
   ========================================================================== */
const CONFIG = {
    profile: {
        name: "Sahariya Islam Shuvo",
        nickname: "SHUVO",
        subtitle: "Traveler • Explorer • Dreamer",
        intro: "Navigating through space and time. Archiving exploration logs across coordinate networks and cultural nexus points. Welcome to my personal travel universe.",
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
        education: "Computer Science & Engineering",
        profession: "Software Engineer & Tech Explorer",
        passion: "Coastal Trails, Mountain Peaks & Wilderness",
        favoriteDestination: "Bandarban & Cox's Bazar",
        bio: "Passionate voyager mapping terrain, culture, and coastal nodes across Bangladesh and international borders."
    },
    socialLinks: {
        facebookURL: "https://facebook.com",
        instagramURL: "https://instagram.com",
        whatsappURL: "https://wa.me/1234567890",
        messengerURL: "https://m.me/username"
    }
};

/* Core Destination Database Architecture */
const destinationsData = [
    {
        id: "cb-main",
        name: "Cox's Bazar",
        country: "Bangladesh",
        division: "Chittagong",
        category: "beach",
        visits: 12,
        dates: ["2021-11-10", "2023-04-15", "2025-12-01"],
        favoritePlace: "Sugandha & Marine Drive",
        description: "The world's longest natural sea beach stretching 120 km along the Bay of Bengal.",
        photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"],
        coordinates: { lat: 21.4272, lng: 92.0058 }
    },
    {
        id: "bandarban-main",
        name: "Bandarban",
        country: "Bangladesh",
        division: "Chittagong",
        category: "mountain",
        visits: 4,
        dates: ["2022-02-14", "2024-09-10"],
        favoritePlace: "Nilgiri & Boga Lake",
        description: "Serene mountain ridges, cloud-touching peaks, and indigenous cultural heritage.",
        photos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"],
        coordinates: { lat: 21.8311, lng: 92.3686 }
    },
    {
        id: "sajek-main",
        name: "Sajek Valley",
        country: "Bangladesh",
        division: "Chittagong",
        category: "mountain",
        visits: 3,
        dates: ["2023-01-20", "2025-05-18"],
        favoritePlace: "Konglak Pahar",
        description: "The Queen of Hills in Rangamati, floating on an ocean of clouds.",
        photos: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"],
        coordinates: { lat: 23.3817, lng: 92.2938 }
    },
    {
        id: "sylhet-main",
        name: "Sylhet",
        country: "Bangladesh",
        division: "Sylhet",
        category: "nature",
        visits: 5,
        dates: ["2020-08-12", "2024-11-05"],
        favoritePlace: "Ratargul Swamp Forest",
        description: "Land of tea gardens, clear water rivers, and freshwater swamp forests.",
        photos: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"],
        coordinates: { lat: 24.8949, lng: 91.8687 }
    },
    {
        id: "kolkata-main",
        name: "Kolkata",
        country: "India",
        division: "West Bengal",
        category: "international",
        visits: 2,
        dates: ["2019-12-25", "2023-10-10"],
        favoritePlace: "Victoria Memorial",
        description: "City of Joy, rich in colonial architecture, arts, and culinary traditions.",
        photos: ["https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80"],
        coordinates: { lat: 22.5726, lng: 88.3639 }
    }
];

/* Cox's Bazar Detailed Location Network */
const coxsbazarLocations = [
    { name: "Sugandha Beach", visits: 10, dates: ["2021-2025"], desc: "High energy central beach node.", image: "" },
    { name: "Laboni Beach", visits: 8, dates: ["2021-2024"], desc: "Oldest traditional beach line.", image: "" },
    { name: "Kolatoli Beach", visits: 9, dates: ["2021-2025"], desc: "Gateway beach area with vibrant sunset points.", image: "" },
    { name: "Himchari Beach & Waterfall", visits: 4, dates: ["2022", "2024"], desc: "Where green hills meet the sea.", image: "" },
    { name: "Inani Beach", visits: 5, dates: ["2022", "2025"], desc: "Famous coral beach with crystal clear waters.", image: "" },
    { name: "Marine Drive Road", visits: 6, dates: ["2021-2025"], desc: "Scenic coastal highway between ocean and mountain.", image: "" },
    { name: "Maheshkhali Island", visits: 2, dates: ["2023"], desc: "Only hilly island in Bangladesh.", image: "" },
    { name: "Ramu Rubber Gardens", visits: 1, dates: ["2023"], desc: "Peaceful monastery & green rubber plantations.", image: "" }
];

/* 41 Customized Districts Dataset */
const districtsData = [
    { name: "Dhaka", division: "Dhaka", visited: true, count: 50, dates: "2015-2026", fav: "Dhanmondi Lake", notes: "Home Base" },
    { name: "Cox's Bazar", division: "Chittagong", visited: true, count: 12, dates: "2021-2025", fav: "Marine Drive", notes: "Best coastal escape" },
    { name: "Bandarban", division: "Chittagong", visited: true, count: 4, dates: "2022-2024", fav: "Nilgiri", notes: "Ultimate hill trek" },
    { name: "Rangamati", division: "Chittagong", visited: true, count: 3, dates: "2023-2025", fav: "Kaptai Lake", notes: "Serene waters" },
    { name: "Sylhet", division: "Sylhet", visited: true, count: 5, dates: "2020-2024", fav: "Ratargul", notes: "Green wilderness" },
    { name: "Sreemangal (Moulvibazar)", division: "Sylhet", visited: true, count: 3, dates: "2021-2023", fav: "Lawachara", notes: "Tea capital" },
    { name: "Gazipur", division: "Dhaka", visited: true, count: 15, dates: "2018-2025", fav: "Bhawal National Park", notes: "Forest retreats" },
    { name: "Narayanganj", division: "Dhaka", visited: true, count: 8, dates: "2019-2024", fav: "Sonargaon", notes: "Historical heritage" },
    { name: "Chittagong", division: "Chittagong", visited: true, count: 6, dates: "2020-2025", fav: "Patenga", notes: "Port city vibes" },
    { name: "Khagrachari", division: "Chittagong", visited: true, count: 2, dates: "2022", fav: "Alutila Cave", notes: "Mysterious terrain" },
    { name: "Comilla", division: "Chittagong", visited: true, count: 4, dates: "2019-2023", fav: "Shalban Vihara", notes: "Ancient archeology" },
    { name: "Feni", division: "Chittagong", visited: true, count: 3, dates: "2021", fav: "Muhuri Dam", notes: "Transit node" },
    { name: "Noakhali", division: "Chittagong", visited: true, count: 2, dates: "2022", fav: "Nijhum Dwip", notes: "Coastal islands" },
    { name: "Brahmanbaria", division: "Chittagong", visited: true, count: 1, dates: "2021", fav: "Titas River", notes: "Riverlands" },
    { name: "Habiganj", division: "Sylhet", visited: true, count: 2, dates: "2022", fav: "Satchari", notes: "Forest trail" },
    { name: "Sunamganj", division: "Sylhet", visited: true, count: 2, dates: "2023", fav: "Tanguar Haor", notes: "Water kingdom" },
    { name: "Munshiganj", division: "Dhaka", visited: true, count: 5, dates: "2020-2024", fav: "Padma Bridge", notes: "River cruising" },
    { name: "Manikganj", division: "Dhaka", visited: true, count: 3, dates: "2021-2023", fav: "Baliati Palace", notes: "Zamindar estates" },
    { name: "Narsingdi", division: "Dhaka", visited: true, count: 2, dates: "2020", fav: "Wari-Bateshwar", notes: "Ancient roots" },
    { name: "Faridpur", division: "Dhaka", visited: true, count: 2, dates: "2022", fav: "River banks", notes: "Padma node" },
    { name: "Gopalganj", division: "Dhaka", visited: true, count: 1, dates: "2023", fav: "Tungipara", notes: "Historic log" },
    { name: "Rajbari", division: "Dhaka", visited: true, count: 1, dates: "2022", fav: "Podda River", notes: "Transit" },
    { name: "Tangail", division: "Dhaka", visited: true, count: 4, dates: "2021-2024", fav: "Atia Mosque", notes: "Saree & heritage" },
    { name: "Kishoreganj", division: "Dhaka", visited: true, count: 2, dates: "2023", fav: "Nikli Haor", notes: "Haor highway" },
    { name: "Barisal", division: "Barisal", visited: true, count: 2, dates: "2022", fav: "Floating Market", notes: "Venice of Bengal" },
    { name: "Bhola", division: "Barisal", visited: true, count: 1, dates: "2023", fav: "Monpura", notes: "Island node" },
    { name: "Jhalokati", division: "Barisal", visited: true, count: 1, dates: "2022", fav: "Guava Market", notes: "Water channels" },
    { name: "Patuakhali", division: "Barisal", visited: true, count: 2, dates: "2024", fav: "Kuakata", notes: "Sunrise & Sunset" },
    { name: "Bagerhat", division: "Khulna", visited: true, count: 2, dates: "2021", fav: "60 Dome Mosque", notes: "UNESCO Site" },
    { name: "Khulna", division: "Khulna", visited: true, count: 2, dates: "2021-2024", fav: "Sundarbans Gateway", notes: "Mangrove base" },
    { name: "Jessore", division: "Khulna", visited: true, count: 1, dates: "2020", fav: "Benapole", notes: "Border district" },
    { name: "Satkhira", division: "Khulna", visited: true, count: 1, dates: "2022", fav: "Sundarbans West", notes: "Coastal forest" },
    { name: "Kushtia", division: "Khulna", visited: true, count: 2, dates: "2023", fav: "Lalon Akhra", notes: "Cultural hub" },
    { name: "Pabna", division: "Rajshahi", visited: true, count: 2, dates: "2022", fav: "Hardinge Bridge", notes: "Iconic structure" },
    { name: "Rajshahi", division: "Rajshahi", visited: true, count: 3, dates: "2021-2024", fav: "Padma Garden", notes: "Silk & mango city" },
    { name: "Natore", division: "Rajshahi", visited: true, count: 2, dates: "2022", fav: "Uttara Gano Bhaban", notes: "Royal palace" },
    { name: "Bogra", division: "Rajshahi", visited: true, count: 2, dates: "2023", fav: "Mahasthangarh", notes: "Ancient citadel" },
    { name: "Sirajganj", division: "Rajshahi", visited: true, count: 3, dates: "2022", fav: "Bangabandhu Bridge", notes: "Jamuna gateway" },
    { name: "Mymensingh", division: "Mymensingh", visited: true, count: 3, dates: "2021-2024", fav: "Agricultural Univ.", notes: "Old Brahmaputra" },
    { name: "Sherpur", division: "Mymensingh", visited: true, count: 1, dates: "2023", fav: "Gajani Avakash", notes: "Border hills" },
    { name: "Netrokona", division: "Mymensingh", visited: true, count: 1, dates: "2024", fav: "Birishiri", notes: "Ceramic hills" }
];

/* Dynamic Photo Archive Aggregator */
const photoGalleryData = [
    { title: "Sunset at Cox's Bazar", location: "Sugandha Beach", date: "2025-12-01", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
    { title: "Above the Cloud Ocean", location: "Nilgiri, Bandarban", date: "2024-09-10", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" },
    { title: "Starlight Camping", location: "Sajek Valley", date: "2025-05-18", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80" },
    { title: "Reflective Waters", location: "Ratargul Forest", date: "2024-11-05", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { title: "Colonial Grandeur", location: "Kolkata, India", date: "2023-10-10", url: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80" },
    { title: "Missing Log Entry", location: "Unexplored Zone", date: "2026-01-01", url: "" } // Example for placeholder fallbacks
];

/* State Tracking */
let previousSectionId = "home";
let currentLightboxIndex = 0;

/* ==========================================================================
   2. APP INITIALIZATION & DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initCanvasGalaxy();
    loadProfileData();
    renderDestinations(destinationsData);
    renderCoxsBazarPage();
    renderDistricts();
    renderGallery();
    renderTimeline();
    renderSocialCards();
    initNavigation();
    initGlobalSearch();
    initFilters();
    initStatsObserver();
});

/* Preloader Control */
function initPreloader() {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.visibility = "hidden", 600);
    }, 1200);
}

/* ==========================================================================
   3. DATA INJECTION FUNCTIONS
   ========================================================================== */
function loadProfileData() {
    const p = CONFIG.profile;
    document.getElementById("home-avatar").src = p.profileImage;
    document.getElementById("profile-avatar").src = p.profileImage;
    document.getElementById("home-name").innerText = p.name;
    document.getElementById("profile-fullname").innerText = p.name;
    document.getElementById("profile-nickname").innerText = `"${p.nickname}"`;
    document.getElementById("home-subtitle").innerText = p.subtitle;
    document.getElementById("home-intro").innerText = p.intro;
    document.getElementById("profile-bio").innerText = p.bio;
    document.getElementById("profile-education").innerText = p.education;
    document.getElementById("profile-profession").innerText = p.profession;
    document.getElementById("profile-passion").innerText = p.passion;
    document.getElementById("profile-fav-dest").innerText = p.favoriteDestination;

    // Dynamically calculate statistics
    const totalVisits = destinationsData.reduce((acc, curr) => acc + curr.visits, 0);
    const visitedDistrictsCount = districtsData.filter(d => d.visited).length;

    document.getElementById("stat-places").setAttribute("data-target", destinationsData.length);
    document.getElementById("stat-districts").setAttribute("data-target", visitedDistrictsCount);
    document.getElementById("stat-trips").setAttribute("data-target", totalVisits);
    document.getElementById("stat-memories").setAttribute("data-target", photoGalleryData.length);
}

/* Helper: Render Safe Image or Futuristic Placeholder */
function getSafeImageHTML(url, altText) {
    if (url && url.trim() !== "") {
        return `<img src="${url}" alt="${altText}" onerror="this.onerror=null; this.parentNode.innerHTML=getPlaceholderHTML();">`;
    }
    return getPlaceholderHTML();
}

function getPlaceholderHTML() {
    return `
        <div class="img-placeholder">
            <i class="fas fa-microchip"></i>
            <span>MEMORY NOT UPLOADED</span>
        </div>
    `;
}

/* Render Journey Cards */
function renderDestinations(items) {
    const grid = document.getElementById("journey-grid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No destinations matching search query.</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card glass-panel";
        const imageContent = getSafeImageHTML(item.photos[0], item.name);

        card.innerHTML = `
            <div class="card-thumb">
                ${imageContent}
                <span class="card-badge">${item.visits} VISITS</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-sub"><i class="fas fa-map-marker-alt"></i> ${item.division}, ${item.country}</p>
                <p class="card-desc">${item.description}</p>
                <div class="card-actions">
                    <button class="holo-btn primary btn-sm" onclick="openDestinationModal('${item.id}')"><i class="fas fa-expand"></i> Explore</button>
                    <button class="holo-btn secondary btn-sm" onclick="openGoogleMap(${item.coordinates.lat}, ${item.coordinates.lng}, '${item.name}')"><i class="fas fa-map"></i> Map</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* Render Cox's Bazar Dedicated Page */
function renderCoxsBazarPage() {
    const cbGrid = document.getElementById("cb-grid");
    cbGrid.innerHTML = "";

    coxsbazarLocations.forEach((loc, idx) => {
        const card = document.createElement("div");
        card.className = "card glass-panel";
        const imageContent = getSafeImageHTML(loc.image, loc.name);

        card.innerHTML = `
            <div class="card-thumb">
                ${imageContent}
                <span class="card-badge">${loc.visits} VISITS</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${loc.name}</h3>
                <p class="card-desc">${loc.desc}</p>
                <div class="card-actions">
                    <button class="holo-btn primary btn-sm" onclick="openCBLocationModal(${idx})"><i class="fas fa-info-circle"></i> Details</button>
                </div>
            </div>
        `;
        cbGrid.appendChild(card);
    });
}

/* Render Bangladesh 41 Districts */
function renderDistricts() {
    const grid = document.getElementById("districts-grid");
    grid.innerHTML = "";

    districtsData.forEach((dist, idx) => {
        const card = document.createElement("div");
        card.className = `glass-panel district-card ${dist.visited ? 'visited' : 'unvisited'}`;
        card.onclick = () => openDistrictModal(idx);

        card.innerHTML = `
            <div class="status-dot"></div>
            <h4 style="font-family: var(--font-heading); color: #fff;">${dist.name}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${dist.division} Division</p>
            <p style="font-size: 0.85rem; margin-top: 8px; color: var(--cyan-glow);">${dist.visited ? `Visited (${dist.count}x)` : 'Unvisited Zone'}</p>
        `;
        grid.appendChild(card);
    });
}

/* Render Photo Gallery */
function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";

    photoGalleryData.forEach((photo, idx) => {
        const item = document.createElement("div");
        item.className = "gallery-item glass-panel";
        item.onclick = () => openLightbox(idx);
        const imageContent = getSafeImageHTML(photo.url, photo.title);

        item.innerHTML = `
            ${imageContent}
            <div class="gallery-overlay">
                <h4 style="font-family: var(--font-heading); color: #fff;">${photo.title}</h4>
                <p style="font-size: 0.8rem; color: var(--cyan-glow);">${photo.location} • ${photo.date}</p>
            </div>
        `;
        grid.appendChild(item);
    });
}

/* Render Timeline */
function renderTimeline() {
    const wrapper = document.getElementById("timeline-wrapper");
    wrapper.innerHTML = "";

    destinationsData.forEach(dest => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.innerHTML = `
            <div class="timeline-node"></div>
            <div class="timeline-content glass-panel" onclick="openDestinationModal('${dest.id}')" style="cursor:pointer;">
                <span class="card-badge">${dest.dates[0] || '2025'}</span>
                <h3 style="font-family: var(--font-heading); margin: 5px 0; color: #fff;">${dest.name}</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${dest.division}, ${dest.country}</p>
            </div>
        `;
        wrapper.appendChild(item);
    });
}

/* Render Social Cards */
function renderSocialCards() {
    const grid = document.getElementById("social-grid");
    const links = CONFIG.socialLinks;
    const socialPlatforms = [
        { name: "Facebook", icon: "fab fa-facebook-f", link: links.facebookURL, desc: "Personal logs & updates" },
        { name: "Instagram", icon: "fab fa-instagram", link: links.instagramURL, desc: "Visual photography stream" },
        { name: "WhatsApp", icon: "fab fa-whatsapp", link: links.whatsappURL, desc: "Direct secure message channel" },
        { name: "Messenger", icon: "fab fa-facebook-messenger", link: links.messengerURL, desc: "Instant holographic chat" }
    ];

    grid.innerHTML = "";
    socialPlatforms.forEach(s => {
        const card = document.createElement("div");
        card.className = "social-card glass-panel";
        card.innerHTML = `
            <div class="social-icon-wrapper"><i class="${s.icon}"></i></div>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="holo-btn primary btn-sm">Visit Profile</a>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   4. SPA NAVIGATION & CONTROLS
   ========================================================================== */
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".viewport-section");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-links");

    function navigateTo(targetId) {
        const currentActive = document.querySelector(".viewport-section.active-section");
        if (currentActive && currentActive.id !== targetId) {
            previousSectionId = currentActive.id;
        }

        sections.forEach(sec => sec.classList.remove("active-section"));
        navLinks.forEach(link => link.classList.remove("active"));

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active-section");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const activeLink = document.querySelector(`.nav-item[href="#${targetId}"]`);
        if (activeLink) activeLink.classList.add("active");

        // Dynamic Back Floating Button logic
        const backBtn = document.getElementById("floating-back");
        if (targetId !== "home") {
            backBtn.classList.remove("hidden");
        } else {
            backBtn.classList.add("hidden");
        }

        navMenu.classList.remove("open");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            navigateTo(targetId);
        });
    });

    mobileToggle.addEventListener("click", () => navMenu.classList.toggle("open"));

    document.getElementById("floating-home").addEventListener("click", () => navigateTo("home"));
    document.getElementById("floating-back").addEventListener("click", () => navigateTo(previousSectionId));
}

/* Global Search Logic */
function initGlobalSearch() {
    const input = document.getElementById("global-search");
    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = destinationsData.filter(d => 
            d.name.toLowerCase().includes(query) ||
            d.division.toLowerCase().includes(query) ||
            d.favoritePlace.toLowerCase().includes(query)
        );
        renderDestinations(filtered);
    });
}

/* Filter Bar Logic */
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");

            if (filter === "all") {
                renderDestinations(destinationsData);
            } else if (filter === "bangladesh") {
                renderDestinations(destinationsData.filter(d => d.country.toLowerCase() === "bangladesh"));
            } else if (filter === "international") {
                renderDestinations(destinationsData.filter(d => d.country.toLowerCase() !== "bangladesh"));
            } else if (filter === "favorite") {
                renderDestinations(destinationsData.filter(d => d.visits >= 4));
            } else {
                renderDestinations(destinationsData.filter(d => d.category === filter));
            }
        });
    });
}

/* Animated Counters on View Scroll */
function initStatsObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll(".counter");
                counters.forEach(c => {
                    const target = +c.getAttribute("data-target");
                    let count = 0;
                    const speed = target / 30;
                    const updateCount = () => {
                        count += speed;
                        if (count < target) {
                            c.innerText = Math.ceil(count);
                            setTimeout(updateCount, 40);
                        } else {
                            c.innerText = target;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsBoard = document.getElementById("stats-board");
    if (statsBoard) observer.observe(statsBoard);
}

/* ==========================================================================
   5. MODAL & LIGHTBOX ENGINES
   ========================================================================== */
const modal = document.getElementById("detail-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

modalClose.onclick = () => modal.classList.remove("active");
window.onclick = (e) => { if (e.target === modal) modal.classList.remove("active"); };

function openDestinationModal(id) {
    const dest = destinationsData.find(d => d.id === id);
    if (!dest) return;

    modalBody.innerHTML = `
        <div style="text-align:center; margin-bottom: 1.5rem;">
            <div style="height: 250px; border-radius: 8px; overflow:hidden; margin-bottom: 1rem;">
                ${getSafeImageHTML(dest.photos[0], dest.name)}
            </div>
            <h2 style="font-family: var(--font-heading); color: var(--cyan-glow);">${dest.name}</h2>
            <p style="color: var(--text-muted);">${dest.division}, ${dest.country}</p>
        </div>
        <p><strong>Total Visited:</strong> ${dest.visits} Times</p>
        <p><strong>Log Dates:</strong> ${dest.dates.join(", ")}</p>
        <p><strong>Favorite Spot:</strong> ${dest.favoritePlace}</p>
        <p style="margin-top: 1rem; line-height: 1.6; color: rgba(255,255,255,0.85);">${dest.description}</p>
        <div style="margin-top: 1.5rem; text-align: center;">
            <button class="holo-btn primary btn-sm" onclick="openGoogleMap(${dest.coordinates.lat}, ${dest.coordinates.lng}, '${dest.name}')"><i class="fas fa-map-marked-alt"></i> Open Google Maps Coordinates</button>
        </div>
    `;
    modal.classList.add("active");
}

function openCBLocationModal(index) {
    const loc = coxsbazarLocations[index];
    if (!loc) return;

    modalBody.innerHTML = `
        <div style="text-align:center; margin-bottom: 1.5rem;">
            <div style="height: 220px; border-radius: 8px; overflow:hidden; margin-bottom: 1rem;">
                ${getSafeImageHTML(loc.image, loc.name)}
            </div>
            <h2 style="font-family: var(--font-heading); color: var(--cyan-glow);">${loc.name}</h2>
        </div>
        <p><strong>Visited:</strong> ${loc.visits} Times</p>
        <p><strong>Logged Dates:</strong> ${loc.dates.join(", ")}</p>
        <p style="margin-top: 1rem; line-height: 1.5;">${loc.desc}</p>
        <div style="margin-top: 1.5rem; text-align: center;">
            <button class="holo-btn primary btn-sm" onclick="openGoogleMapQuery('${loc.name}, Cox\'s Bazar')"><i class="fas fa-search-location"></i> View Location Map</button>
        </div>
    `;
    modal.classList.add("active");
}

function openDistrictModal(index) {
    const dist = districtsData[index];
    if (!dist) return;

    modalBody.innerHTML = `
        <h2 style="font-family: var(--font-heading); color: var(--cyan-glow); margin-bottom: 0.5rem;">${dist.name} District</h2>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">Territorial Division: ${dist.division}</p>
        <p><strong>Exploration Status:</strong> ${dist.visited ? 'EXPLORED' : 'UNVISITED'}</p>
        ${dist.visited ? `
            <p><strong>Visits Count:</strong> ${dist.count} Logged Trips</p>
            <p><strong>Travel Dates:</strong> ${dist.dates}</p>
            <p><strong>Favorite Location:</strong> ${dist.fav}</p>
            <p><strong>Notes:</strong> ${dist.notes}</p>
        ` : '<p style="margin-top:10px; color: var(--text-muted);">This district coordinate has not been logged yet.</p>'}
        <div style="margin-top: 1.5rem; text-align: center;">
            <button class="holo-btn primary btn-sm" onclick="openGoogleMapQuery('${dist.name} District Bangladesh')"><i class="fas fa-map-marked"></i> Search District Map</button>
        </div>
    `;
    modal.classList.add("active");
}

/* Map Links */
function openGoogleMap(lat, lng, name) {
    if (lat && lng) {
        window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    } else {
        openGoogleMapQuery(name);
    }
}

function openGoogleMapQuery(query) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
}

/* Lightbox Functions */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add("active");
}

function updateLightbox() {
    const item = photoGalleryData[currentLightboxIndex];
    if (!item) return;

    if (item.url && item.url.trim() !== "") {
        lightboxImg.src = item.url;
        lightboxImg.style.display = "block";
    } else {
        lightboxImg.style.display = "none";
    }
    lightboxCaption.innerHTML = `<h3>${item.title}</h3><p>${item.location} (${item.date})</p>`;
}

document.getElementById("lightbox-close").onclick = () => lightbox.classList.remove("active");
document.getElementById("lightbox-prev").onclick = () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + photoGalleryData.length) % photoGalleryData.length;
    updateLightbox();
};
document.getElementById("lightbox-next").onclick = () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % photoGalleryData.length;
    updateLightbox();
};

/* ==========================================================================
   6. CANVAS SPACE/GALAXY ANIMATION ENGINE
   ========================================================================== */
function initCanvasGalaxy() {
    const canvas = document.getElementById("galaxy-canvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const numStars = 150;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 243, 255, ${Math.abs(star.alpha)})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#00f3ff";
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
