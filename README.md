**"dateFromat"**  is a time string format tool.

For instance, if you wanna get current date's string which format like "2018-10-01".You are only required to do bellow:

```
var now = new Date();
var timeStr = dateFormat(now,"yyyy-mm-dd");
console.log(timeStr) // "2018-02-19"
```
# install
  `npm install date.str.format --save `
# import 
**es6**
```
import dateFormat from "date.str.format";
```
**amd**

```
require("date.str.format",function(dateFormat){
    
})
```
**common.js**

```
var dateFormat = require("date.str.format");
```
**script**
```
<script "./node_modules/date.str.format/index.js">
</script>

```

# usage
 ```
var now = new Date();

 // "2018-02-19 17:44:38"
var timeStr = dateFormat(now,"yyyy-mm-dd HH:MM:SS");
console.log(timeStr)

 // "18/02/19 17:44:38"
var timeStr = dateFormat(now,"yy/mm/dd HH:MM:SS");
console.log(timeStr) 

 // "18/2/19 17:44:38"
var timeStr = dateFormat(now,"yy/m/dd HH:MM:SS");
console.log(timeStr) 

  // "18/2/19"
var timeStr = dateFormat(now,"yy/m/dd");
console.log(timeStr)

// "17:44:38"
var timeStr = dateFormat(now,"HH:MM:SS");
console.log(timeStr);

//"2018/03/04" to "2018-03-04";
now = "2018/03/04";
var timeStr = dateFormat(now,"yyyy-mm-dd");
console.log(timeStr);
```

**year** : yy    like 18

**fullYear** : yyyy  like 2018

**month** : mm like  02

**month** : m like  2

**date** : dd like 01

**dare** : d like 1

**hours** : hh or HH  like 09; h or H like 9
        
**minutes** : MM like  29; M like 9
         
**second** : ss or SS like 08; s or S like 8
