window.onload = function () {
  const calculateAge = () => {
    let ageInMilliseconds = new Date() - new Date("1995-01-03");
    const age = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
    const ageSpan = document.getElementById("age-value");    
    ageSpan.innerHTML = age;
  };
  calculateAge();
};
