const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
// 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });
router.use(require('body-parser').urlencoded({extended: true}));
// 定义网站主页的路由
router.get('/get', function(req, res) {
  User.find({},function(err,docs){
    if(err){
      console.log(err);
      return;
    }
    res.json(docs);
  });
});
router.post('/post',function(req, res){
  var data = req.body;
  if(data){
    new User({ask:data}).save(function(err){
      if(err){
        res.json({code:-1,msg:'save failed'});
      }else{
        res.json({code:200,msg:'save success'});
      }
    });
  }else{
    res.json({code:-1,msg:'save failed'});
  }
});
router.get('/test',function(req,res){
  var data = [
    {
      ask:{
        name:'cm',
        txt:'道德经第一章',
        time:1477114773123
      }
    },{
      ask:{//提问
        name:'cm',//提问者姓名
        txt:'道可道非常道',//提问内容
        time:1477114773123//提问时间戳 单位ms
      },
      ans:{//回答
        name:'zldl',//回答者姓名
        txt:'名可名非常名',//回答内容
        time:1477115773123//回答时间戳 单位ms
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
  for(var i=0;i<data.length;i++){
    new User(data[i]).save(function(err){
      if(err){
        console.log(err);
      }
    });
  }
  res.end();
});
module.exports = router;
