
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

console.log (elements + ' \n' + checkedValues + ' \n' + theme + ' \n' +
textFirst + ' \n' + textEmail + ' \n' + textPhone + ' \n' + textQuest)
}
let list_no_select = Array.from(document.getElementsByClassName("no_select"));
        list_no_select.forEach((element) => {
            element.addEventListener("click", f);
        });