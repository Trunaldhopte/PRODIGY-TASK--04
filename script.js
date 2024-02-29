var tablinks = document.getElementsByClassName("tablink");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname, event) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



//    navigation script // 
function openMenu() {
    const nav2 = document.querySelector(".hide");
    nav2.style.display = "flex";
  }
  function closeMenu() {
    const nav2 = document.querySelector(".hide");
    nav2.style.display = "none";
  }
