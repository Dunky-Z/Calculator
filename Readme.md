## 功能
- 简易四则运算
## 实现过程
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
上个做法需要对每一个按钮都绑定一个事件函数。代码冗余，并且耦合度高。
- 初始化时，为每个按钮绑定事件（采用input标签）
- 考虑文本框为空或者为0的异常情况

### 非数字按钮
- 用switch，匹配每个按钮

### 实现四则运算
用Number

### 实现小数点
- 小数点只能有一个  

可以用indexOf判断是否存在小数点
### 实现退位键
每按一次退位键，数字少一位，最后显示为0

### 实现正负号
每次按下让当前数乘以-1

## 界面 

![20200416172406](https://raw.githubusercontent.com/Dunky-Z/MarkdownImageBed/master/img/20200416172406.png)