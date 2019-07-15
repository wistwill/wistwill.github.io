
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '哦豁~页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         document.title = '哈哈~骗你的 ~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
