// Helper to build SVG icon markup using sprite symbols defined in index.html
const icon = (id, cls = 'ic') =>
  `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

// Sticky navbar
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const setMenu = (open) => {
  mobileMenu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.innerHTML = icon(open ? 'i-close' : 'i-menu');
};
menuBtn.addEventListener('click', () =>
  setMenu(!mobileMenu.classList.contains('open'))
);
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => setMenu(false))
);

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Academics cards
const academics = [
  ['i-book', 'Curriculum Overview', 'A rigorous KNEC-aligned curriculum spanning Sciences, Languages, Humanities and Technicals.'],
  ['i-folder', 'Academic Departments', 'Eight departments led by experienced HODs, each fostering subject mastery and curiosity.'],
  ['i-cap', 'KCSE Performance', 'Consistent improvement in mean grade, with growing numbers of university qualifiers.'],
  ['i-users', 'Teaching Staff', 'TSC-registered professionals committed to mentorship and personal academic support.'],
  ['i-flask', 'Learning Resources', 'Modern science labs, computer lab and well-equipped subject rooms.'],
  ['i-book', 'Library Services', 'A quiet, well-stocked library with curated reference and revision material.'],
];
document.getElementById('academicsGrid').innerHTML = academics
  .map(([i, t, d]) =>
    `<article class="card hover-lift"><div class="icon-box">${icon(i)}</div><h3>${t}</h3><p>${d}</p></article>`
  )
  .join('');

// Student Life
const sl = [
  ['i-music', 'Clubs & Societies', 'Debate, Science, Music, Drama, Journalism and more.'],
  ['i-trophy', 'Sports', 'Hockey, athletics, volleyball, football and ball games.'],
  ['i-sparkles', 'Talent Development', "Discover and nurture each student's unique strengths."],
  ['i-handshake', 'Guidance & Counselling', 'Confidential support and academic mentorship.'],
  ['i-crown', 'Leadership Programs', 'Prefectship, peer mentors and student council training.'],
  ['i-church', 'Spiritual Growth', 'Christian Union, Catholic Action and chapel services.'],
];
document.getElementById('studentLifeGrid').innerHTML = sl
  .map(([i, t, d]) =>
    `<article class="card hover-gold"><div class="icon-box solid">${icon(i)}</div><h3>${t}</h3><p>${d}</p></article>`
  )
  .join('');

// Charter table
const rows = [
  ["Teaching","All Teachers","TSC registration","Free","Daily"],
  ["Inquiries","Reception / Office","Visit, call or email","Free","Immediate"],
  ["Admissions","Deputy Principal","Completed admission form & KCPE slip","As per fees","Within 7 days"],
  ["Academic Reports","Class Teacher","Cleared fees, end of term","Free","End of term"],
  ["KCSE Certificates","Principal's Office","National ID, fees clearance","Free","On collection day"],
  ["Fee Payments","Bursar","Bank slip / mobile money receipt","As invoiced","Immediate"],
  ["Clearance","Bursar & HoDs","Return books, fees cleared","Free","1 day"],
  ["Official Correspondence","Principal","Written request","Free","Within 3 days"],
  ["Guidance & Counselling","Counselling Office","Walk-in or referral","Free","Same day"],
  ["Discipline Cases","Deputy Principal","Parent notification","Free","Within 48 hours"],
  ["Library Services","Librarian","Student ID","Free","Daily"],
  ["Textbook Issuance","Subject Teacher","Class register","Free","Start of term"],
  ["First Aid","School Nurse","Walk-in","Free","Immediate"],
  ["Talent Development","Patrons / HoDs","Sign up in chosen club","Free","Ongoing"],
];
document.querySelector('#charterTable tbody').innerHTML = rows
  .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
  .join('');

// Updates
const updates = [
  ['Mar', '12', 'Form 4 Mock Exams Begin', 'Students sit termly mocks in preparation for KCSE.'],
  ['Feb', '28', 'Inter-school Drama Festivals', 'Our drama team advances to the regional finals.'],
  ['Feb', '14', 'Career Day 2026', 'Alumni and professionals mentor learners on career pathways.'],
];
document.getElementById('updates').innerHTML = updates
  .map(
    ([m, d, t, txt]) => `
  <article class="update">
    <div class="date-block"><div class="m">${m}</div><div class="d">${d}</div></div>
    <div class="update-body"><small>${icon('i-news')} School Update</small><h3>${t}</h3><p>${txt}</p></div>
  </article>`
  )
  .join('');

// Contact form

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Website Contact from ${name}`);

  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  const mailtoLink =
    `mailto:Onochsec@gmail.com?subject=${subject}&body=${body}`;

  window.open(mailtoLink, '_self');
});
//gallery
const buttons = document.querySelectorAll(".more-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const extra = button.previousElementSibling.querySelector(".extra-images");

        extra.classList.toggle("show");

        if(extra.classList.contains("show")){
            button.textContent = "Show Less";
        }else{
            button.textContent = "More Photos";
        }
    });
});
