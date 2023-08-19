
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

const displayMissoncontainers = () => {
    let misson = ``;
    for (let i=0; i<missionsBox.length; i=i+1)
    {
      misson += `<div class="card p-3 text-center shadow-lg border-0">
      <div class="card-body">
          <i class="${missionsBox[i].icon}"></i>
          <h4 class="card-text mt-4">${missionsBox[i].description}</h4>
      </div>
  </div>`;
  misson += `\n`;
    }
  
    return misson;
  }


const displayCompanies = () => {
    let companies = ``;
    for (let i = 0; i < companiesLogo.length; i += 1) {
      companies += `<div class="com card p-3 shadow-lg border-0">
          <div class="card-body">
              <img src="${companiesLogo[i].img}" alt="">
          </div>
      </div>`;
  
      companies += `\n`;
    }
  
    return companies;
  };

  


  document.getElementById('missionCont').innerHTML = displayMissoncontainers();
  document.getElementById('companiesCont').innerHTML = displayCompanies();
  
