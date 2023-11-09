
const x = () => {
var elements = document.getElementsByName("com_tion");

for (var i=0, len=elements.length; i<len; ++i){
        if (elements[i].checked) {elements = elements[i].value;        break;
        }
};

var checked = document.querySelectorAll('input[type="checkbox"]:checked');

var checkedValues = Array.from(checked).map(cb => cb.value);
    
var textFirst = document.getElementById("example").value;
var theme = document.getElementById("theme").value;
var textEmail = document.getElementById("email").value;
var textPhone = document.getElementById("tel").value;
var textQuest = document.getElementById("question").value;

if (typeof elements != typeof '') {
    elements = ''
}
}
let list_no_select = Array.from(document.getElementsByClassName("no_select"));
        list_no_select.forEach((element) => {
            element.addEventListener("click", f);
        });



function tst() {
        let theme = document.getElementById("theme");
            let buttons = document.getElementById("buttons");
        
        
            if (theme.getAttribute("href") == "css/style.css"){
                theme.href = "css/darkstyle.css";
                buttons.src = "images/sun.png"
                localStorage.setItem("buttons","css/darkstyle.css");
        
            }
            else{
                theme.href = "css/style.css";
                buttons.src = "images/moon.png"
                localStorage.setItem("buttons","css/style.css");
        
            }
        }