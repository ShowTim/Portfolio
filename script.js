var htmlButton = document.getElementById("HTML");
var cssButton = document.getElementById("CSS");
var jsButton = document.getElementById("JS");
var jqButton = document.getElementById("JQ");


htmlButton.addEventListener('mouseenter', buttonChange);
cssButton.addEventListener('mouseenter', buttonChange);
jsButton.addEventListener('mouseenter', buttonChange);
jqButton.addEventListener('mouseenter', buttonChange);


function buttonChange() {
    this.className = "hoveredAbility";
};

htmlButton.addEventListener('mouseleave', buttonOriginal);
cssButton.addEventListener('mouseleave', buttonOriginal);
jsButton.addEventListener('mouseleave', buttonOriginal);
jqButton.addEventListener('mouseleave', buttonOriginal);

function buttonOriginal() {
    this.className = "";
};

htmlButton.addEventListener('touchstart', buttonChange);
cssButton.addEventListener('touchstart', buttonChange);
jsButton.addEventListener('touchstart', buttonChange);
jqButton.addEventListener('touchstart', buttonChange);

htmlButton.addEventListener('touchend', buttonOriginal);
cssButton.addEventListener('touchend', buttonOriginal);
jsButton.addEventListener('touchend', buttonOriginal);
jqButton.addEventListener('touchend', buttonOriginal);
