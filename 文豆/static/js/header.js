/**
  项目首页JS主入口
**/    
layui.define(['layer', 'element', 'carousel'], function(exports){
  var layer = layui.layer,
  element = layui.element,
  carousel = layui.carousel;

    //建造实例
  carousel.render({
    elem: '#bann',
    width: '100%', //设置容器宽度
    height: '542px', //设置容器高度
    arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
  });
    
    
    exports('header', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});