  $(document).ready(function(e){
    $('.search-case').click(function(e){
      $('.site-search').toggleClass('search-show');
      $(this).toggleClass('icon-close');
    })
    $(function() {
      // 调用
      $('.module-banner').myscroll({
          picElem: $('#move'), //图片父级
          ctrlElem: $('#ctrl'), //控制条父级(包括小圆点和左右箭头)
          isLibs: true, //是否创建底部小圆点(样式均可自定义调整),默认向lib添加单独类名，详情见调用后dom结构
          isArrows: true, //是否创建左右箭头(样式均可自定义调整)
          autoPlay: true, //是否自动播放
          playTime: 2000, //自动播放间隔时间
          playSpeed: 700, //图片切换速度
          effect: 'left' //轮播的改变方式 top(向上) left(向左) fade(淡入淡出)
      });
  })
  })
