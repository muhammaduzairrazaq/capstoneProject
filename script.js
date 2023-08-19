const cardCourses = [
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },
  {
    title: 'Machine Learning Specialization',
    description: "ome quick example text to build on the card title and make up the bulk of the card's content.",
    link: '',
    img: 'assests/cbk.png',
  },

];

const companiesLogo = [
  { img: 'assests/cmp1.PNG' },
  { img: 'assests/cmp2.PNG' },
  { img: 'assests/cmp3.PNG' },
  { img: 'assests/cmp4.PNG' },
  { img: 'assests/cmp5.PNG' },
  { img: 'assests/cmp6.PNG' },
];

const missionsBox = [
  {description : "Gain world-class education to expand your technical knowledge", icon : "fa-solid fa-user-graduate fa-lg mt-4"},
  {description : "Get hands-on training to acquire practical skills", icon : "fa-solid fa-gears"},
  {description : "Learn from a collaborative community of peers and mentors", icon : "fa-solid fa-people-group"}
]



const displayCourses = (s, e) => {
  let courses = '';

  for (let i = s; i < e; i += 1) {
    courses += `<div class="card shadow-lg border-0 p-0">
    <div class="card-body p-0">
      <div class="container border p-0">
        <img src="${cardCourses[i].img}" width="100%">
      </div>
      <h5 class="card-title p-3">${cardCourses[i].title}</h5>
      <p class="card-text p-3 pt-0">${cardCourses[i].description}</p>
      <div class="container pb-3">
        <a href="${cardCourses[i].link}" class="btn p-3">Enroll for Free</a>
      </div>
    </div>
  </div>`;

    courses += '\n';
  }

  return courses;
};


document.getElementById('coursesIntro').innerHTML = displayCourses(0, 6);
document.getElementById('coursesInter').innerHTML = displayCourses(6, 12);
document.getElementById('coursesAdva').innerHTML = displayCourses(12, 18);


