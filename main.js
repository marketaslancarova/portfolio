document.addEventListener("DOMContentLoaded", function () {
  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: false, // Displays navigation dots
    anchors: ["firstPage", "secondPage", "thirPage", "fourthPage"],
    sectionsColor: ["#1a1a1a", "##1a1a1a"],
  });
});
