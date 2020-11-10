const db_transcation = require("./5");
var method = "2";//1: 查询语句
                 //2：插入语句
                 //3：删除语句
const sql = selMethod(method); //获取方法对应的sql语句
const valArr = getValArr([[1.3,12,15.5,16.5,17.3],[1.3,12,15.5,16.5,17.3]]);//获取sql语句中需要填入的参数
console.log(valArr[0][0]);
const sqlArr = getSqlArr(valArr,sql);//获取语句块
if (method == "2") {//插入时，需要先将数据库内相同名称的数据删除
    sqlArr.push(selMethod("3"))//加入删除语句
    var val = valArr[0][0];
    valArr.push(val);//加入删除name
}

db_transcation.processTasks(sqlArr,valArr).then(res=>{
    console.log('res',res)
}).catch(err=>{
    console.log('err',err)
})

function getValArr(JsonArr) {
    //将插入的值分为n个数组，即[{},{},{}...]
    var valArr = [];
    for (var i = 0; i < JsonArr.length; i++) {
        valArr.push(JsonArr[i]);
    }
    return valArr;
}
function getSqlArr(valArr,sql) {
    //将插入语句sql变为与插值个数对应的数组，即[sql,sql,sql...]
    var sqlArr = [];
    for (var i = 0; i < valArr.length; i++) {
        sqlArr.push(sql);
    }
    return sqlArr;
}
function selMethod(method) {
    var sql = "";
    switch (method) {
        case "1":
            //查询语句
            sql='select * from electronics where name = ?';
            break;
        case "2":
            //插入语句
            sql = 'INSERT INTO electronics(name,frequency,result1,result2,result3) VALUES(?,?,?,?,?)';
            break;
        case "3":
            //删除语句
            sql = 'delete from electronics where name = ?';
            break;
    }
    return sql;
}