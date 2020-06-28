const copyrightCurrentYear = document.getElementById("copyrightCurrentYear");

if (copyrightCurrentYear) {
  const currentYear = new Date().getFullYear();
  const copyrightLabel = `© jared potter ${currentYear}`;
  copyrightCurrentYear.innerText = copyrightLabel;
}
