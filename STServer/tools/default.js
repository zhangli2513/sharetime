/**
 * Created by liuyujing on 2017/9/6.
 */
var defaultInfo = {};

//API

//new API
defaultInfo.NEWS = "/news";
//发布
defaultInfo.ADD_NEWS = "/addNews";
//查询发布的内容
defaultInfo.SEARCH_All_NEWS = "/searchAllNews";



//SQL
//news
//建表
defaultInfo.SQL_CREATE_NEWS_TABLE = "CREATE TABLE `sharetime`.`news` ( `newsID` BIGINT(100) NOT NULL AUTO_INCREMENT , `type` INT NOT NULL DEFAULT '0' , `userID` BIGINT(100) NOT NULL , `des` TEXT NOT NULL , `startTime` BIGINT(100) NOT NULL , `endTime` BIGINT(100) NOT NULL , `price` BIGINT(100) NOT NULL , `lat` DOUBLE NOT NULL , `log` DOUBLE NOT NULL , `isValidity` BOOLEAN NOT NULL DEFAULT FALSE , PRIMARY KEY (`newsID`)) ENGINE = InnoDB; ";

//发布
defaultInfo.SQL_ADD_NEWS = "INSERT INTO `news` (`newsID`, `type`, `userID`, `des`, `startTime`, `endTime`, `price`, `lat`, `log`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?);";

//查询发布内容
defaultInfo.SQL_SEARCH_ALL_NEWS = "SELECT * FROM news";

//error
//news error
defaultInfo.ERROR_NEWS_ADD_FAIL = {
    code:3000,
    message:"发布失败"
};
defaultInfo.NEWS_ADD_SUCCESS = {
    code:2000,
    message:"发布成功"
};

defaultInfo.ERROR_NEWS_SEARCH_FAIL = {
    code:3000,
    message:"未找到对应数据"
};

defaultInfo.NEWS_SEARCH_SUCCESS = {
    code:2000,
    message:"查询成功"
};


//comment
defaultInfo.ERROR_NOT_VALIDITY_PARAM = {
    code:3000,
    message:"未传入指定的参数"
};

module.exports = defaultInfo;
