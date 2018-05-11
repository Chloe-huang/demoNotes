方法：
1.scrollTop():获取scroll top offset。;
```
$(".content").scrollTop()
```
2. scrollTop(100):设置scroll top offset。;


Tips: 1.只有有滚动条的元素，才能获取到offset值；
      2.必须设置高度才能出现滚动条，或者定位拉开；
      3.自由向下排列的页面，只能获取或者设置document的scrollTop()，<B style="color:red">但是</B>会出现非预期的问题：document保存的位置不精确，归位失败。（特别是document的高度不和文档一样高时）