const DB = require("./1");
const Async = require("async");
var db;
class Query extends DB{
    constructor(){
        super()
        db = this.handleDisconnect()
    }
    async processTasks(sqlArr,valArr){
        return new Promise((resolve, reject) => {
            var tasks = [
                (callback) => {
                    console.log('task1')
                    // 开启事务
                    db.beginTransaction((err) => {
                        if(err!==null){
                            db = _this.handleDisconnect();
                            db.beginTransaction( (beginTransactionErr) => {
                                callback(null,beginTransactionErr)
                            })
                        }else{
                            callback(null,err)
                        }
                    })
                },
                (task1_res,callback) => {

                    for (var i = 0; i < sqlArr.length; i++) {
                        console.log('task2', task1_res)
                        //处理事务
                        db.query(sqlArr[i], valArr[i], (queryErr, queryInfo) => {
                            if (queryErr) {
                                callback(null, queryErr);
                            } else {
                                callback(null, queryInfo)
                            }
                        })
                        /*db.query(sqlArr,valArr,(queryErr,queryInfo)=>{
                            if(queryErr){
                                callback(null,queryErr);
                            }else{
                                callback(null,queryInfo)
                            }
                        })*/
                    }
                },
                (task2_res,callback) => {
                    console.log('task3',task2_res)
                    // 提交事务
                    db.commit((commitErr,commitInfo)=>{
                        if(commitErr){
                            callback(null,commitErr)
                        }else{
                            callback(null,commitInfo)
                        }
                    });
                }
            ]
            Async.waterfall(tasks,(err,res)=>{
                if(err){
                    // 事务回滚
                    db.rollback();
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    }
}

let db_tran = new Query;

module.exports = db_tran;

