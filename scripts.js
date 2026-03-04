import { menuCategories, testimonials } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-glass');
        } else {
            navbar.classList.remove('nav-glass');
        }
    });


    const menuGrid = document.getElementById('menu-grid');
    menuCategories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card group cursor-pointer reveal-up';
        card.innerHTML = `
            <div class="relative overflow-hidden rounded-3xl h-64 mb-6">
                <img src="${cat.image}" alt="${cat.title}" class="w-full h-full object-cover transition-transform duration-500">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <h3 class="text-2xl font-serif mb-2">${cat.title}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">${cat.description}</p>
        `;
        menuGrid.appendChild(card);
    });


    const testContainer = document.getElementById('testimonial-container');
    testimonials.forEach(t => {
        const div = document.createElement('div');
        div.className = 'bg-white p-10 rounded-[32px] shadow-sm border border-gray-50 reveal-up';
        div.innerHTML = `
            <div class="flex gap-1 mb-6 text-[#D4AF37]">
                ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
            </div>
            <p class="text-lg italic text-gray-700 mb-8">"${t.text}"</p>
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-[#accent] flex items-center justify-center font-bold text-[#1B4332]">
                    ${t.name.charAt(0)}
                </div>
                <div>
                    <h5 class="font-bold">${t.name}</h5>
                    <p class="text-xs text-gray-400 uppercase tracking-widest">${t.role}</p>
                </div>
            </div>
        `;
        testContainer.appendChild(div);
    });
    lucide.createIcons(); // Re-run for dynamic content


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal-up').forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });
    });


    document.getElementById('next-test').addEventListener('click', () => {
        gsap.to('#testimonial-container', { x: -20, duration: 0.2, repeat: 1, yoyo: true });
    });
    
    document.getElementById('prev-test').addEventListener('click', () => {
        gsap.to('#testimonial-container', { x: 20, duration: 0.2, repeat: 1, yoyo: true });
    });
});
