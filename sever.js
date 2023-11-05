const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require("fs")
const cors = require('cors');



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());









app.use(cors()); // Включение CORS
function add(obj) {
    fs.readFile('./bd/posts.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка читання файлу: ' + err);
        } else {
            try {
                const dataArray = JSON.parse(data);

                dataArray.push(obj);

                const updatedData = JSON.stringify(dataArray);

                fs.writeFile('./bd/posts.json', updatedData, (err) => {
                    if (err) {
                        console.error('Помилка запису в файл: ' + err);
                    } else {
                        console.log('Об\'єкт був успішно доданий до масиву та оновлено в файлі db.json');
                    }
                });
            } catch (parseError) {
                console.error('Помилка розбору JSON: ' + parseError);
            }
        }
    });
}
console.log(2631972356157555555757575757575757575757575757575757575)

async function get() {
    return new Promise((resolve, reject) => {
        fs.readFile('./bd/posts.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Помилка читання файлу: ' + err);
                reject(err);
            } else {
                try {
                    const dataArray = JSON.parse(data);
                    resolve(dataArray);
                } catch (parseError) {
                    console.error('Помилка розбору JSON: ' + parseError);
                    reject(parseError);
                }
            }
        });
    });
}

app.get('/get/posts', (req, res) => {
    get().then((posts)=>{
        res.json(posts);    
    })

});
app.post('/push/post', (req, res) => {
    try {
add(req.body)
    }
    catch (e) {
        res.status()
    }
});
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
