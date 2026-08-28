/* ==========================================================================
   CONFIGURABLE DATA ARRAYS & SETTINGS
   ========================================================================== */

// 1. Visited Places Data (Easily add or modify destinations)
const visitedPlaces = [
    {
        id: 1,
        name: "Sajek Valley",
        district: "Rangamati",
        description: "Known as the Queen of Hills, surrounded by clouds and breathtaking valley vistas.",
        date: "2025",
        image: "https://via.placeholder.com/600x400",
        lat: 23.3817,
        lng: 92.2938
    },
    {
        id: 2,
        name: "Cox's Bazar Sea Beach",
        district: "Cox's Bazar",
        description: "The longest natural sandy sea beach in the world, stretching over 120 km.",
        date: "2025",
        image: "https://via.placeholder.com/600x400",
        lat: 21.4272,
        lng: 92.0058
    },
    {
        id: 3,
        name: "Jaflong & Ratargul",
        district: "Sylhet",
        description: "A combination of stone streams, tea gardens, and Asia's famous freshwater swamp forest.",
        date: "2024",
        image: "https://via.placeholder.com/600x400",
        lat: 25.1634,
        lng: 92.0179
    },
    {
        id: 4,
        name: "Nilgiri & Chimbuk",
        district: "Bandarban",
        description: "High-altitude cloud points overlooking rolling hill horizons in southern Bangladesh.",
        date: "2024",
        image: "https://via.placeholder.com/600x400",
        lat: 21.8311,
        lng: 92.3686
    },
    {
        id: 5,
        name: "Kaptai Lake",
        district: "Rangamati",
        description: "The largest man-made lake in Bangladesh, featuring tranquil boat routes and island parks.",
        date: "2023",
        image: "https://via.placeholder.com/600x400",
        lat: 22.6533,
        lng: 92.1753
    },
    {
        id: 6,
        name: "Old Dhaka & Heritage",
        district: "Dhaka",
        description: "Rich cultural heritage, historic architecture, bustling lanes, and local cuisine.",
        date: "2026",
        image: "https://via.placeholder.com/600x400",
        lat: 23.7104,
        lng: 90.4074
    },
    {
        id: 7,
        name: "Patenga & Naval Beach",
        district: "Chattogram",
        description: "Coastal port city views, maritime scenery, and sea breezes near the Karnaphuli river entry.",
        date: "2024",
        image: "https://via.placeholder.com/600x400",
        lat: 22.2386,
        lng: 91.7832
    }
];

// 2. Gallery Images
const galleryItems = [
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Sajek Sunrise View" },
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Group Camping at Bandarban" },
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Sunset at Cox's Bazar" },
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Boating in Kaptai Lake" },
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Sylhet Tea Garden Trail" },
    { type: "image", src: "https://via.placeholder.com/800x600", title: "Hiking near Boga Lake" }
];

// 3. Travel Posts Data
const travelPosts = [
    {
        id: 1,
        title: "Top 5 Hiking Guidelines for Bandarban Trails",
        date: "August 15, 2026",
        image: "https://via.placeholder.com/600x400",
        caption: "Key preparation tips regarding fitness, equipment, local permits, and weather safety when trekking hilly terrains."
    },
    {
        id: 2,
        title: "Monsoon Magic in Sylhet: What to Expect",
        date: "July 28, 2026",
        image: "https://via.placeholder.com/600x400",
        caption: "Exploring waterfalls, flooded swamp forests, and vibrant green landscapes during rainy seasons."
    }
];

/* ==========================================================================
   INITIALIZATION & DOM RENDERING
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderVisitedPlaces();
    renderGallery();
    renderPosts();
    initMap();
    initNavigation();
    initLightbox();
});

// Navigation Toggle logic
function initNavigation() {
    const toggleBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// Render Visited Places Cards
function renderVisitedPlaces() {
    const container = document.getElementById("places-container");
    container.innerHTML = visitedPlaces.map(place => `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="${place.image}" alt="${place.name}">
                <span class="card-tag">${place.district}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${place.name}</h3>
                <p class="card-subtitle"><i class="fa-regular fa-calendar"></i> Visited: ${place.date}</p>
                <p class="card-desc">${place.description}</p>
                <button class="btn btn-primary btn-sm" onclick="openLightbox('${place.image}', '${place.name} - ${place.district}')">
                    <i class="fa-solid fa-image"></i> View Photos
                </button>
            </div>
        </div>
    `).join('');
}

// Render Gallery Grid
function renderGallery() {
    const container = document.getElementById("gallery-container");
    container.innerHTML = galleryItems.map(item => `
        <div class="gallery-item" onclick="openLightbox('${item.src}', '${item.title}')">
            <img src="${item.src}" alt="${item.title}">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
    `).join('');
}

// Render Travel Posts
function renderPosts() {
    const container = document.getElementById("posts-container");
    container.innerHTML = travelPosts.map(post => `
        <div class="card">
            <div class="card-img-wrapper">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="card-body">
                <span class="card-subtitle">${post.date}</span>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-desc">${post.caption}</p>
                <a href="#contact" class="btn btn-primary btn-sm">View Post</a>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   INTERACTIVE MAP (Leaflet.js)
   ========================================================================== */

function initMap() {
    const map = L.map('map').setView([23.6850, 90.3563], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    visitedPlaces.forEach(place => {
        const marker = L.marker([place.lat, place.lng]).addTo(map);
        const popupContent = `
            <div style="width: 180px;">
                <img src="${place.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 6px; margin-bottom: 5px;">
                <h4 style="margin: 0; font-size: 1rem;">${place.name}</h4>
                <p style="margin: 2px 0 8px 0; font-size: 0.8rem; color: #666;">${place.district}</p>
                <a href="#visited" style="display: inline-block; padding: 4px 8px; background: #0284c7; color: #fff; text-decoration: none; border-radius: 4px; font-size: 0.75rem;">View Details</a>
            </div>
        `;
        marker.bindPopup(popupContent);
    });
}

/* ==========================================================================
   FULLSCREEN LIGHTBOX
   ========================================================================== */

function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

function openLightbox(src, captionText) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = src;
    caption.innerText = captionText || "";
}
