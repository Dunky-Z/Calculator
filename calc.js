function init() {
    var num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";

    var oButton = document.getElementsByTagName("input");
    for (var i = 0; i < oButton.length; ++i) {
        oButton[i].onclick = function() {
            if (isNumber(this.value)) {
                // num.value += this.value * 1;
                if (isNull(num.value)) {
                    num.value = this.value;
                } else {
                    num.value = num.value + this.value;
                }
            } else {
                alert("2");
            }
        }
    }
}
/*验证文本框是否为空或者0*/
function isNull(n) {
    if (n == "0" || n.length == 0) {
        return true;
    } else {
        return false;
    }
}

function isNumber(n) {
    // if (isNaN(n) == false) {
    //     return true; //参数n是数字
    // } else {
    //     return false; //参数n不是数字
    // }
    return !isNaN(n);
}