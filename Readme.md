### 整体面板显示
共21个元素，其中文本框需要单独显示。

### 输入框调整
- 禁用键盘输入
- 默认显示为0
- 输入框禁用后为灰色背景，将其调整为白色

### 数字显示
```javascript
function num_1_click() {
    var num = document.getElementById("num");
    var n = num.value;
    //清除前导的数字0
    // if (n == "0") {
    //     n = "1";
    // } else {
    //     n = n + "1";
    // }
    n = n + "1";
    //通过因式转换传入值，去除前导的0
    document.getElementById("num").value = n * 1;
}
```

### 0-9数字显示的代码优化
上个做法需要对每一个按钮都绑定一个事件函数。