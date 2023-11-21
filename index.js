'use strict';
import express from 'express';
import bodyParser from 'body-parser'; // 뒤에거가 실제 package이름
import cors from 'cors'; //데이터 베이스에 접근하는 거/ 연산하는 거 따로 / etc ...

const serverPort = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));
app.use(cors());

const router = express.Router(); // 라우터는 추가적인 경로를 정해줌  http://172.23.35.32/api/v1/ping --> 숫자 뒤에 붙은것들

const ping = (req, res) =>{
    const result = "pong";
    res.send({result});
    console.log("ping is called");
}

router.route('/ping').get(ping); 
app.use('/test/api/v1', router);
app.listen(serverPort);



