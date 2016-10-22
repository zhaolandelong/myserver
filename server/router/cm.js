const express = require('express');
const router = express.Router();

// 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });
// 定义网站主页的路由
router.get('/get', function(req, res) {
  var data = [
    {
      ask:{
        name:'cm',
        txt:'道德经第一章',
        time:1477114773123
      }
    },{
      ask:{
        name:'cm',
        txt:'道可道非常道',
        time:1477114773123
      },
      ans:{
        name:'zldl',
        txt:'名可名非常名',
        time:1477115773123
      }
    },{
      ask:{
        name:'cm',
        txt:'无名天地之始',
        time:1477114773123
      },
      ans:{
        name:'zldl',
        txt:'有名万物之母',
        time:1477115773123
      }
    },{
      ask:{
        name:'cm',
        txt:'故常无欲以观其妙',
        time:1477114773123
      },
      ans:{
        name:'zldl',
        txt:'常有欲以观其徼',
        time:1477115773123
      }
    },{
      ask:{
        name:'cm',
        txt:'二者同出而异名',
        time:1477114773123
      },
      ans:{
        name:'zldl',
        txt:'同谓之玄',
        time:1477115773123
      }
    },{
      ask:{
        name:'cm',
        txt:'玄之又玄',
        time:1477114773123
      },
      ans:{
        name:'zldl',
        txt:'众妙之门',
        time:1477115773123
      }
    }
  ];
    res.json(data);
});
module.exports = router;
