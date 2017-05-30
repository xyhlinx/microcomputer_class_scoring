var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var microcomputer = new Schema({
    name: String,
    id: Number,
    q1: String,
    q2: String,
    q3: String,
    q4: String
});

//設定模型
mongoose.model('microcomputer', microcomputer);
//連接mongodb中的sns資料庫
mongoose.connect('mongodb://127.0.0.1/microcomputer2015');