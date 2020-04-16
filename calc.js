function init() {
    var num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";

    var oButton = document.getElementsByTagName("input");
    for (var i = 0; i < oButton.length; ++i) {
        var btn_num1;
        var operator; //运算符号
        oButton[i].onclick = function() {
            if (isNumber(this.value)) {
                // num.value += this.value * 1;
                if (isNull(num.value)) {
                    num.value = this.value;
                } else {
                    num.value = num.value + this.value;
                }
            } else {
                var btn_num = this.value;

                switch (btn_num) {
                    case "+":
                        btn_num1 = num.value * 1; //将文本框数值暂存
                        num.value = 0;
                        operator = "+";
                        break;
                    case "-":
                        btn_num1 = num.value * 1;
                        num.value = 0;
                        operator = "-";
                        break;
                    case "*":
                        btn_num1 = num.value * 1;
                        num.value = 0;
                        operator = "*";
                        break;
                    case "/":
                        btn_num1 = num.value * 1;
                        num.value = 0;
                        operator = "/";
                        break;
                    case "c":
                        num.value = "0";
                        break;
                    case ".":
                        num.value = dec_number(num.value);
                        break;
                    case "←":
                        num.value = back(num.value);
                        break;
                    case "+/-":
                        num.value = sign(num.value);
                        break;
                    case "=":
                        switch (operator) {
                            case "+":
                                num.value = btn_num1 + Number(num.value);
                                break;
                            case "-":
                                num.value = btn_num1 - Number(num.value);
                                break;
                            case "*":
                                num.value = btn_num1 * Number(num.value);
                                break;
                            case "/":
                                if (num.value == 0) {
                                    alert("除数不能为0！")
                                    num.value = 0;
                                } else {
                                    num.value = btn_num1 / Number(num.value);
                                }
                                break;
                        }
                        break;
                }
            }
        }
    }
}

/**
 * 正负号
 * @param {} n 
 */
function sign(n) {
    // if (n.indexOf("-") == -1) {
    //     n = "-" + n;
    // } else {
    //     n = n.substr(1, n.length);
    // }
    n = Number(n * -1);
    return n;
}
/**
 * 退位键
 */
function back(n) {
    //每次使数字少一位
    n = n.substr(0, n.length - 1);
    //如果退到最后一位使文本框显示数字0
    if (isNull(n)) {
        n = 0;
    }
    return n;
}
/**
 * 小数点
 */
function dec_number() {
    //查找字符是否存在，如果存在就返回大于0的数，如果不存在就返回-1
    if (n.indexOf(".") == -1) {
        n = n + ".";
    }
    return n;
}
/**
 * 验证文本框是否为空或者0
 * @param {} n 
 */
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