console.log("http")

//需要的依赖
var mysql = require("mysql");

//一些工具
const conn = mysql.createConnection({
    host:"localhost",//连接地址
    user:"root",//用户
    password:"123",//密码
    port:"3306",//端口
    database:"jcdatabase",//要连接的数据库
})
//MVC
conn.connect();

// 建立一个变量  存储sql语句
let sql = 'select * from electronics';
// 连接 有一个query方法  用来执行sql语句
conn.query(sql,(err,result) => {
    if(err) throw err;
    console.log(result);
})
//------------------------------查询语句-----------------------------
var getSql = 'select * from electronics where name = ?';
conn.query(getSql,["1.1"],function(err,result) {
    if(err) {
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})


//------------------------------插入语句--------------------------------------------
var  addSql = 'INSERT INTO electronics(name,frequency,result1,result2,result3) VALUES(?,?,?,?,?)';
var  addSqlParams = ['菜鸟工具', '555','23453', '32.555','5535.3333'];
//增
conn.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT NAME:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

//------------------------删除语句----------------------------
let delSql = 'delete from electronics where name = ?';
conn.query(delSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('DELETE NAME:',result);
    console.log('-----------------------------------------------------------------\n\n');
})

// 断开/关闭链接   执行完sql语句就可以关闭连接
conn.end();

var method = "2";
var Sql = "";
switch (method) {
    case "1":
        //查询语句
        Sql = 'select * from electronics where name = ?';
        break;
    case "2":
        //插入语句
        Sql = 'INSERT INTO electronics(name,frequency,result1,result2,result3) VALUES(?,?,?,?,?)';
        break;
    case "3":
        //删除语句
        Sql = 'delete from electronics where name = ?';
        break;
}
