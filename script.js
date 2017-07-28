var htmlButton = document.getElementById("HTML");
var cssButton = document.getElementById("CSS");
var jsButton = document.getElementById("JS");
var jqButton = document.getElementById("JQ");


htmlButton.addEventListener('mouseenter', buttonChange);
cssButton.addEventListener('mouseenter', buttonChange);
jsButton.addEventListener('mouseenter', buttonChange);
jqButton.addEventListener('mouseenter', buttonChange);


function buttonChange() {
    htmlButton.className = "";
    cssButton.className = "";
    jsButton.className = "";
    jqButton.className = "";
    this.className = "hoveredAbility";
};

htmlButton.addEventListener('mouseleave', buttonOriginal);
cssButton.addEventListener('mouseleave', buttonOriginal);
jsButton.addEventListener('mouseleave', buttonOriginal);
jqButton.addEventListener('mouseleave', buttonOriginal);

function buttonOriginal() {
    this.className = "";
};

htmlButton.addEventListener('touchstart', toggleTouch);
cssButton.addEventListener('touchstart', toggleTouch);
jsButton.addEventListener('touchstart', toggleTouch);
jqButton.addEventListener('touchstart', toggleTouch);

function toggleTouch() {
    if (this.className === ""){
    this.className = "hoveredAbility";}
    else {
        this.className = "";
    }
};


htmlButton.addEventListener('focus', focusToggle);
cssButton.addEventListener('focus', focusToggle);
jsButton.addEventListener('focus', focusToggle);
jqButton.addEventListener('focus', focusToggle);

function focusToggle() {
    htmlButton.className = "";
    cssButton.className = "";
    jsButton.className = "";
    jqButton.className = "";
    this.className = "hoveredAbility";
};

htmlButton.addEventListener('onblur', focusNormal);
cssButton.addEventListener('onblur', focusNormal);
jsButton.addEventListener('onblur', focusNormal);
jqButton.addEventListener('onblur', focusNormal);

function focusNormal() {
    this.className = "";
};




