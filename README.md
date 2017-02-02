# getUpDown

## ページの位置を検知して、その位置によって関数を実行します。
```JavaScript
var obj = $().getUpDown({
    'up': function() {
        console.log('300pxよりも上にいます');
    },
    'down': function() {
        console.log('300pxよりも下にいます');
    }
}, 300);

$(window).on('scroll', function() {
    obj.update();
});
```

スクロールイベントはthrottleしたほうが良いと思います。

```JavaScript
$(window).on('scroll', $.throttle(500, function() {
    obj.update();
}));
```