const path = require('path');
const fs = require('fs');

const http = require('http');

// const zlib = require('zlib')
// const { Transform } = require('stream')


const PORT = 3002;

http.createServer(async (req, res) => {
    if (req.url !== 'favicon/ico') {
        res.write('responce')
        res.end()
    }
   
}).listen(PORT)

// function getMimeType(path) {
//     let mimes = {
//         html: 'text/html',
//         jpeg: 'image/jpeg',
//         jpg:  'image/jpeg',
//         png:  'image/png',
//         svg:  'image/svg+xml',
//         json: 'application/json',
//         js:   'text/javascript',
//         css:  'text/css',
//         ico:  'image/x-icon',
//         txt:  'text/plain', // Добавим поддержку .txt файлов
//         xml:  'application/xml', // Добавим поддержку XML
//     };

//     // Получаем расширение файла
//     let ext = path.split('.').pop();

//     // Если расширение присутствует в объекте mimes, возвращаем его
//     if (ext && mimes[ext]) {
//         return mimes[ext];
//     } else {
//         return 'text/html'; // По умолчанию возвращаем бинарные данные
//     }
// }

// http.createServer(async (req, res) => {
//     if (req.url !== '/favicon.ico') {
//         let text;
//         let status;
//         let path = 'root' + req.url;
//         if (path[path.length - 1] !== '/') {
//             path += '/'
//         }

//         try {
//             if ((await fs.promises.stat(path)).isDirectory()) {
//                 path += 'index.html'
//                 console.log(path)
//             }
//             status = 200;
//             text = await fs.promises.readFile(path, 'utf8');

//         } catch (err) {
//             status = 404;
//             text = await fs.promises.readFile('root/404.html', 'utf8')
//             res.writeHead(404, {'Content-type':'text/html'});
//             res.write(text)
//             res.end()
//             return
//         }
       
//         res.writeHead(status, {'Content-type': getMimeType(path) });
//         res.write(text);
//         res.end();
//     }
// }).listen(PORT)


// let obj = {
// 	'/page1': '1',
// 	'/page2': '2',
// 	'/page3': '3',
// }

// const server = http.createServer(async (req, res) => {
    
//     let found = false;

//     try {
//         if (req.url === '/favicon.ico') {
//             let favicon = await fs.promises.readFile('src/favicon.png')
//             res.setHeader('Content-type', 'image/png')
//             res.statusCode = 200
//             res.write(favicon)
//             found = true;
//             res.end()
//             return
//         }else if (req.url === '/img.webp') {
//             let image = await fs.promises.readFile('src/img.webp')
//             res.setHeader('Content-type', 'image/webp')
//             res.statusCode = 200
//             res.write(image)
//             found = true;
//             res.end()
//             return
//         } else if (req.url === '/styles.css') {
//             let styles = await fs.promises.readFile('styles.css')
//             res.setHeader('Content-type', 'text/css' )
//             res.statusCode = 200;
//             res.write(styles)
//             found = true;
//             res.end()
//             return
//         } else if (req.url === '/app.js') {
//             let script = await fs.promises.readFile('app.js')
//             res.setHeader('Content-type', 'application/javascript')
//             res.statusCode = 200
//             res.write(script)
//             found = true;
//             res.end()
//             return
//         } else {
//             for (let [key, value] of Object.entries(obj)) {
//                 if (req.url === key) {
//                     let page = await fs.promises.readFile(`public/page${value}.html`)
//                     res.setHeader('Content-Type', 'text/html')
//                     res.statusCode = 200
//                     res.write(page)
//                     found = true;
//                     break;
//                 } 
//             }
//         }
            
    
//         if (!found) {
//             let page404 = await fs.promises.readFile(`public/404.html`)
//             res.setHeader('Content-Type', 'text/html')
//             res.statusCode = 404
//             res.write(page404)
//         }
        
//         res.end();
        

//     } catch (err) {
//         console.log(err)
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<h1>Внутренняя ошибка сервера</h1>');
//     }
    
// })

// server.listen(PORT)



//скопировать данные из одного большого файла в другой
// fs.writeFileSync('files/file8.txt', '')
// const readStream = fs.createReadStream('files/file7.txt', 'utf-8')
// const writeStream = fs.createWriteStream('files/file8.txt', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
// })

// readStream.pipe(writeStream)


//Запишите в файл столбец чисел от одного до миллиона.
//fs.writeFileSync('files/file7.txt', '')
// const writeStream = fs.createWriteStream('files/file7.txt')
// for (let i = 0; i < 1000000; i++) {
//     writeStream.write(`${i}\n`)
// }

// writeStream.end(() => {
//     console.log('operation finished')
// })
// 
// Дан массив имен файлов. Переберите этот массив циклом и создайте файлы с этими именами, записав при создании в каждый файл случайное число. После этого в цикле прочитайте содержимое всех файлов и найдите сумму их чисел. Запишите ее в новый файл.
// async function func() {
//     try {
//         let sum = []
//         let names = ['file4.txt', 'file5.txt', 'file6.txt'];
//         for (let i = 0; i < names.length; i++) {
//             await fs.promises.writeFile(`files/${names[i]}`, Math.random().toString())
//             sum[i] = await fs.promises.readFile(`files/${names[i]}`, 'utf-8')
//         }
        
//         let r = sum.map(el => Number(el)).reduce((a, b) => a + b, 0)
//         await fs.promises.writeFile('files/fileWithRes.txt', r.toString())
//         } catch (err) {
//         console.log(err)
//     }
//  }

// func()

//прочитать значения из файлов и сложить записать в другой файл        
// async function func() {
//     try {
//         let value1 = await fs.promises.readFile('files/file1.txt', 'utf-8')
//         let value2 = await fs.promises.readFile('files/file2.txt', 'utf-8')
//         let value3 = await fs.promises.readFile('files/file3.txt', 'utf-8')
//         let res = Number(value1.toString()) + Number(value2.toString()) + Number(value3.toString());
//         await fs.promises.writeFile('files/res.txt', res.toString())
//         let n = await fs.promises.readFile('files/res.txt', 'utf-8')
//         console.log(n)
//     } catch (err) {
//         console.log(err)
//     }
// }

// func()

//Вычислить сумму из файлов
// let arr = []
// arr.push(fs.promises.readFile('files/file1.txt', 'utf-8'))
// arr.push(fs.promises.readFile('files/file2.txt', 'utf-8'))
// arr.push(fs.promises.readFile('files/file3.txt', 'utf-8'))

// Promise.all(arr).then(data => {
//     console.log(data)
//     let res = data.map(el => Number(el.toString())).reduce((a, b) => a + b, 0)
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// })

//Дан файл с числом. Запишите в этот файл квадрат этого числа.
// fs.readFile('files/file1.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('couldn not read the file')
//         return
//     }
//     let value = Math.pow(Number(data.toString()), 2).toString()
//     fs.writeFile('files/file1.txt', value, (err) => {
//         if (err) {
//             console.log('could not write file')
//             return
//         }
//         console.log('done')
//     })
// })

//Даны три файла с числами. Выведите в консоль сумму этих чисел.
// fs.readFile('files/file1.txt', 'utf-8', (err, data) => {
//     let res = [];
//     if (err) {
//         console.error('could not read file 1')
//     } 
//     console.log(data)
//     res.push(data)
//     fs.readFile('files/file2.txt', 'utf-8', (err, data) => {
//         if (err) {
//             console.error('could not read file 2')
//         } 
//         console.log(data)
//         res.push(data)
//         fs.readFile('files/file3.txt', 'utf-8', (err, data) => {
//             if (err) {
//                 console.error('could not read file 3')
//             } 
//             console.log(data)
//             res.push(data)
//             let r = res.map(el => Number(el.toString())).reduce((a, b) => a + b, 0)
//             console.log(r)
            
//         })
//     })
// })

// С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10.
// for (let i = 0; i < 10; i++) {
//     fs.appendFile(`files/f${i}.txt`, `${i}`, (err, data) => {
//         if (err) {
//             console.error(`can not create file ${i}`, err)
//         } else {
//             console.log(`file ${i} created`)
//         }
//     })
// }

// Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа.
// Проверьте, что код после метода readFile будет выполнен раньше, чем будет прочитан файл.

// const value = fs.readFile('files/file1.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error(err)
//         return
//     } else {
//         console.log(Math.pow(Number(data.toString()), 2))
//     }
// })

// console.log('done')

// Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
// fs.readFile('files/file4.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('file does not exist', err)
//     } else {
//         console.log(data)
//     }
// })

//обработка ошибки
// try {
//     let data = fs.readFileSync('files/file4.txt')
// } catch (err){
//     console.log(err, 'error')
// }

//сложить три числа из разных файлов
// const value1 = fs.readFileSync('files/file1.txt')
// const value2 = fs.readFileSync('files/file2.txt')
// const value3 = fs.readFileSync('files/file3.txt')
// console.log(value1, value2, value3)
// let result = Number(value1.toString()) + Number(value2.toString()) + Number(value3.toString())
// console.log(result)
// fs.appendFileSync('files/res.txt', result.toString())

//Дан файл, в тексте которого записано некоторое число. Напишите скрипт, который прочитает число из файла, прибавит к нему единицу и запишет новое число обратно в файл.
// let text = fs.readFileSync('files/file1.txt')
// let data = 1 + Number(text.toString())
// console.log(data)
// fs.writeFileSync('files/file1.txt', data.toString())

//fs.writeFileSync('files/file1.txt', data)
//Дан файл с текстом. Запустите таймер, который каждые 5 секунд в конец этого файла будет записывать восклицательный знак.

// const intervalId = setInterval(() => {
//     let text = fs.readFileSync('files/file1.txt')
//     fs.writeFileSync('files/file1.txt', text + '!')
// }, 5000)

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 10000)

//С помощью цикла для каждого элемента объекта создайте файл, именем которого будет свойство элемента, а текстом - значение свойства.
// let obj = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// }

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, value)
//     fs.writeFileSync(`files/${key}`, `${value}`)
// }

//Сделайте два файла, текстом которых будут некоторые числа. Напишите скрипт, который прочитает числа из файлов и выведет в консоль сумму этих чисел.
// const readStream1 = fs.createReadStream('files/numbers1.txt');
// const readStream2 = fs.createReadStream('files/numbers2.txt');

// function sum() {
//     let number1 = 0;
//     let number2 = 0;
//     let finished1 = false;
//     let finished2 = false;
//     let res = null;
//     readStream1.on('data', chunk => {
//         number1 = chunk.toString()
//         console.log(number1)
//     })
//     readStream1.on('end', () => {
//         console.log('finish')
//         finished1 = true;
//     } )
//     readStream2.on('data', chunk => {
//         number2 = chunk.toString()
//         console.log(number2)
//     })
//     readStream2.on('end', () => {
//         finished2 = true;
//         console.log('finish')
//         if (finished1 === true && finished2 === true) {
//             res = Number(number1) + Number(number2)
//             console.log('res', res)
//         }
//     } )

    
//     console.log('res', res)
//     return  res
// }

// sum()



// Пайпинг потоков
// Задание: Напиши программу, которая считывает данные из одного файла, сжимает их и записывает в другой файл с помощью метода pipe().
// const readStream = fs.createReadStream('files/text.txt')
// const writeStream = fs.createWriteStream('files/text1.txt')

// readStream
//     .pipe(writeStream)
//     .on('finish', () => {
//         console.log('operation completed')
//     })



// const data = fs.readFileSync('files/text.txt')
// console.log(data)

// fs.appendFile('files/text1.txt', 'string', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })

// fs.writeFileSync('files/text1.txt', 'some text', (err) => {
//     if (err) {
//         console.log(err)
//     }
// })



// fs.appendFile(path.resolve(__dirname, 'files/text2.txt'), 'Some text inside file', 'utf-8', (error) => {
//     if (error) {
//         console.log(error)
//     }
// })








// Чтение и сжатие данных
// Задание: Реализуй программу, которая читает текстовый файл, сжимает его с помощью zlib.createGzip() и записывает результат в новый файл с расширением .gz.
// fs.appendFile('file/text3.txt.zp', 'string', (err) => {
//     if (err) {
//         console.error('file existed', 'string', err)
//         return 
//     }
//     console.log('files added')
// })

// const readStream = fs.createReadStream('files/text.txt')
// const writeStream = fs.createWriteStream('files/text3.txt.zp')
// const gzipStream = zlib.createGzip()

// readStream
//     .pipe(gzipStream)
//     .pipe(writeStream)
//     .on('finish', () => {
//         console.log('data ziped')
//     })

// readStream.on('error', () => {console.error('could not read file')})
// writeStream.on('error', () => {console.error('could not write')})



// Использование потоков для обработки данных
// Задание: Напиши программу, которая использует Transform поток для чтения содержимого файла и конвертации всех символов в верхний регистр перед записью в новый файл.
// const readStream = fs.createReadStream('files/text.txt')
// const writeStream = fs.createWriteStream('files/text2.txt')

// const trfmToUpperString = new Transform({
//     transform(chunk, enconding, callback) {
//         const upperChunk = chunk.toString().toUpperCase()
//         this.push(upperChunk)
//         callback()
//     }
// })

// readStream
//     .pipe(trfmToUpperString)
//     .pipe(writeStream);

// writeStream.on('finish', () => {
//     console.log('finish')   
// })



// работа с потоками
// const readStream = fs.createReadStream('files/text.txt');
// const writeStream = fs.createWriteStream('files/text1.txt')
// const compressStream = zlib.createGzip()
// readStream.on('data', chunk => {
//     writeStream.write('\n---------------- CHUNK START --------------\n');
//     writeStream.write(chunk)
//     writeStream.write('\n---------------- CHUNK FINISH -------------\n')
// })

// const handleError = () => {
//     console.log('Error');
//     readStream.destroy()
//     writeStream.end('Finished with error')
// }

// readStream
//     .on('error', handleError)
//     .pipe(compressStream)
//     .pipe(writeStream)
//     .on('error', handleError)







//создание сервера
// const server = http.createServer((req, res) => {
//     if (req.url === '/resource') {
//         if (req.method === 'GET') {
//             res.writeHead(200, {'Content-type': 'plain-text'})
//             res.end('This is GET request')
//         }else if (req.method === 'POST') {
//             res.writeHead(200, { 'Content-type':'plain-text'})
//             res.end('This is POST request')
//         }else {
//             res.writeHead(404, {'Content-type':'plain-text'})
//             res.end('This methos is not supported')
//         }
//     } else if (req.url === '/index.html') {
//         res.writeHead(200, {'Content-type':'multipart/form-data'})
        
//     }
    
//     // if (req.url === '/data') {
//     //     res.writeHead(200, {'Content-type': 'application/json'})
//     //     res.end('{"message": "hello JSON"}')
//     // } else if (req.url === '/contact') {
//     //     res.end('Contact us')
//     // } else {
//     //     res.writeHead(404, {'Content-type': 'plain-text'})
//     //     res.end('404')
//     // }
    
//     //res.end('Hello, World!\n');  
// })



// server.listen(PORT, () => {
//     console.log(`Server started on PORT ${PORT}`)})
