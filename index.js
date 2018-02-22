;(function (name, definition) {
  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function',
    // 检查上下文环境是否为Node
    hasExports = typeof module !== 'undefined' && module.exports;
 
  if (hasDefine) {
    // AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {
    // 定义为普通Node模块
    module.exports = definition();
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition(); 
  }
})('dateFormat', function () {
      var yearFormat, monthFormat,dateFormat,hourFormat,minFormat,secondFormat;
      var getYear = function(time){
            var year = "";
            if(/y{4}/.test(yearFormat)){
                year = time.getFullYear()
            }else{
                year = (time.getYear()+"").match(/[0-9]{2}$/)[0];
            }
            return year;
          },
           getMonth = function(time){
             var month = time.getMonth() + 1;
             month = /m{2}/.test(monthFormat)?twoBitFormat(month) : month;
             return month;
          },
          getDate = function(time){
             var date = time.getDate() ;
             date = /d{2}/.test(dateFormat)?twoBitFormat(date) : date;
             return date;
          },
          getHour = function(time){
             var hour = time.getHours() ;
             hour = /H{2}|h{2}/.test(hourFormat)?twoBitFormat(hour) : hour;
             return hour;
          },
          getMin = function(time){
             var min = time.getMinutes();
             min = /M{2}/.test(minFormat)?twoBitFormat(min) : min;
             return min;
          },
          getSecond = function(time){
            var second = time.getSeconds() ;
             second = /s{2}|S{2}/.test(secondFormat)?twoBitFormat(second) : second;
             return second;
          },
          twoBitFormat = function(time){
              if(time<10){
                return "0" + time;
              }
              return time;
          };

     var dateFormat =  function(date,formatStr){
        var time = date;
        if("string" == typeof date){
            time =  new Date(date);
        }
          
        yearFormat = formatStr.match(/y+/)
        monthFormat = formatStr.match(/m+/)
        dateFormat = formatStr.match(/d+/)
        hourFormat = formatStr.match(/H+|h+/)
        minFormat = formatStr.match(/M+/)
        secondFormat = formatStr.match(/S+|s+/)
        var year = getYear(time);
        var month = getMonth(time);
        var date = getDate(time);
        var hour = getHour(time);
        var min = getMin(time);
        var second = getSecond(time);
        return formatStr.replace(yearFormat,year)
                        .replace(monthFormat,month)
                        .replace(dateFormat,date)
                        .replace(hourFormat,hour)
                        .replace(minFormat,min)
                        .replace(secondFormat,second);

      }

      return dateFormat;

});
