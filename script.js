function copyText(text) {
   navigator.clipboard.writeText(text);
   alert('Copied!');
};

let isUnderConstruction = true;

if (isUnderConstruction == true) {
   alert("The page is under construction right now, come back later!")
   window.location.href = "about:blank"
}