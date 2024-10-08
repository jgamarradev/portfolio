document.addEventListener("DOMContentLoaded", function () {
  const tab1Button = document.querySelector('button[href="#tab-1"]');
  const tab2Button = document.querySelector('button[href="#tab-2"]');
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");

  function showTab1() {
    tab1.classList.add("active");
    tab1.style.display = "block";
    tab2.classList.remove("active");
    tab2.style.display = "none";

    tab1Button.classList.add("active");
    tab2Button.classList.remove("active");
  }

  function showTab2() {
    tab2.classList.add("active");
    tab2.style.display = "block";
    tab1.classList.remove("active");
    tab1.style.display = "none";

    tab2Button.classList.add("active");
    tab1Button.classList.remove("active");
  }

  tab1Button.addEventListener("click", showTab1);
  tab2Button.addEventListener("click", showTab2);

  showTab1();
});
