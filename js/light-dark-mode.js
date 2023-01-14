// https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
// Return the system level color scheme, but if something's in local storage, return that
// Unless the system scheme matches the the stored scheme, in which case... remove from local storage
function getPreferredColorScheme(){
  let systemScheme = 'light';
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    systemScheme = 'dark';
  }
  let chosenScheme = systemScheme;

  if(localStorage.getItem("scheme")){
    chosenScheme = localStorage.getItem("scheme");
  }

  if(systemScheme === chosenScheme){
    localStorage.removeItem("scheme");
  }

  return chosenScheme;
}

// Write chosen color scheme to local storage
// Unless the system scheme matches the the stored scheme, in which case... remove from local storage
function savePreferredColorScheme(scheme){
  let systemScheme = 'light';

  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    systemScheme = 'dark';
  }

  if(systemScheme === scheme){
    localStorage.removeItem("scheme");
  }
  else {
    localStorage.setItem("scheme", scheme);
  }

}

// Get the current scheme, and apply the opposite
function toggleColorScheme(){
  let newScheme = "light";
  let scheme = getPreferredColorScheme();
  if (scheme === "light"){
    newScheme = "dark";
  }

  applyPreferredColorScheme(newScheme);
  savePreferredColorScheme(newScheme);


}

// Apply the chosen color scheme by traversing stylesheet rules, and applying a medium.
function applyPreferredColorScheme(scheme) {

  for (var i = 0; i <= document.styleSheets[0].rules.length-1; i++) {
    rule = document.styleSheets[0].rules[i].media;

    if (rule && rule.mediaText.includes("prefers-color-scheme")) {

      switch (scheme) {
        case "light":
          rule.appendMedium("original-prefers-color-scheme");
          if (rule.mediaText.includes("light")) rule.deleteMedium("(prefers-color-scheme: light)");
          if (rule.mediaText.includes("dark")) rule.deleteMedium("(prefers-color-scheme: dark)");
          break;
        case "dark":
          rule.appendMedium("(prefers-color-scheme: light)");
          rule.appendMedium("(prefers-color-scheme: dark)");
          if (rule.mediaText.includes("original")) rule.deleteMedium("original-prefers-color-scheme");
          break;
        default:
          rule.appendMedium("(prefers-color-scheme: dark)");
          if (rule.mediaText.includes("light")) rule.deleteMedium("(prefers-color-scheme: light)");
          if (rule.mediaText.includes("original")) rule.deleteMedium("original-prefers-color-scheme");
          break;
        }
    }
  }

  // Change the toggle button to be the opposite of the current scheme
  document.getElementById("schemeToggler").text = (scheme === "dark" ? "☀️" : "🌘" );
}

applyPreferredColorScheme(getPreferredColorScheme());
