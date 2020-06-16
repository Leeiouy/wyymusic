 export function debounce(func, wait, immediate) {
     let timeout;
     return function () {
         /* Event对象是触发事件的时候传递给事件处理函数的一个对象，执行debounce函数就等于执行return的匿名函数， 触发事件时候就会将e传入这个匿名函数*/
         let arg = arguments;
         // 因为函数再settimeout执行，this指向window，这里要保存this，还原this指向
         let _this = this
         clearTimeout(timeout);
         if (immediate) {
             let callNow = !timeout;
             //  第一次进来，！timeout为true，timeout赋值了一个定时器，立即执行
             //  第二次进来，timeout是有值的，不会立即执行，除非在定时器结束，将timeout设为null
             // 你每次触发事件，计时器都会触发重新计时，一直300ms一直300ms,计时器里面的代码反复不执行，settime就等于一直是有值
             timeout = setTimeout(() => {
                 timeout = null
             }, wait);
             if (callNow) func.apply(_this, arg)
         } else {
             timeout = setTimeout(function () {
                 // apply,第一个参数是改变this指向，后面的是实参列表
                 func.apply(_this, arg)
             }, wait);
         }
     }
 }