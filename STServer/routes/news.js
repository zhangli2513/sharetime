/**
 * Created by liuyujing on 2017/9/6.
 */
var defaultInfo = require("../tools/default");
var DBManager = require("../tools/DBManager");

DBManager.createTableNews();

var router = require("express").Router();

//发布的接口
router.post(defaultInfo.ADD_NEWS,function (req,res) {
    console.log(req.body);
    var body = req.body;
    if (body.type&&body.userID&&body.des&&body.startTime&&body.endTime&&body.lat&&body.log){

        DBManager.addNews([body.type,body.userID,body.des,body.startTime,body.endTime,body.price,body.lat,body.log]).then(function (result) {
            console.log(result);
            res.send(defaultInfo.NEWS_ADD_SUCCESS);
        }).catch(function (error) {
            console.log(result);
            res.send(defaultInfo.ERROR_NEWS_ADD_FAIL);
        });

    }else {
        res.send(defaultInfo.ERROR_NOT_VALIDITY_PARAM);
    }
});

//查询所有发布的接口
router.get(defaultInfo.SEARCH_All_NEWS,function (req,res) {
    DBManager.searchAllNews().then(function (result) {
        //成功 有两个状态 
        //1.有数据
        //2.没有数据
        console.log(result);
        defaultInfo.NEWS_SEARCH_SUCCESS.data = result;
        result.length?res.send(defaultInfo.NEWS_SEARCH_SUCCESS):res.send(defaultInfo.ERROR_NEWS_SEARCH_FAIL);

    }).catch(function (error) {
        console.log(error);
        defaultInfo.ERROR_NEWS_SEARCH_FAIL.message = error.message;
        res.send(defaultInfo.ERROR_NEWS_SEARCH_FAIL);
    });
});

module.exports = router;