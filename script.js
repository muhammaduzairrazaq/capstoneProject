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

// const companiesLogo = [
//   { img: 'assests/cmp1.PNG' },
//   { img: 'assests/cmp2.PNG' },
//   { img: 'assests/cmp3.PNG' },
//   { img: 'assests/cmp4.PNG' },
//   { img: 'assests/cmp5.PNG' },
//   { img: 'assests/cmp6.PNG' },
// ];

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

// const displayCompanies = () => {
//   let companies = '';
//   for (let i = 0; i < companiesLogo.length; i += 1) {
//     companies += `<div class="com card p-3 shadow-lg border-0">
//         <div class="card-body">
//             <img src="${companiesLogo[i].img}" alt="">
//         </div>
//     </div>`;

//     companies += '\n';
//   }

//   return companies;
// };

const toggleBtn = document.getElementById('toggleBtn');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

document.getElementById('coursesIntro').innerHTML = displayCourses(0, 6);
document.getElementById('coursesInter').innerHTML = displayCourses(6, 12);
document.getElementById('coursesAdva').innerHTML = displayCourses(12, 18);

// document.getElementById('companiesCont').innerHTML = displayCompanies();
