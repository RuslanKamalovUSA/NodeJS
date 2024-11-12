const express = require('express');
const path = require('path');
const fs = require('fs');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// let str = `<div>
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>`;

// let employees = [
// 	{
// 		surname: 'surname1',
// 		name:    'user1',
// 		salary:  1000,
// 	},
// 	{
// 		surname: 'surname2',
// 		name:    'user2',
// 		salary:  2000,
// 	},
// 	{
// 		surname: 'surname3',
// 		name:    'user3',
// 		salary:  3000,
// 	},
// ];

let secret = 'qwerty';

let titles = {
    index:    'главная страница',
	about:    'о нас',
	conctacs: 'контакты',
	price:    'наш прайс'
}

let app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(secret))

app.engine('hbs', engine({ 
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {
        toUpperCase: function(str) {
            return str.toUpperCase();
        },
        format: function() {
            return this.name + ' ' + this.surname;
        }, 
        printData: function(obj) {
            return obj.name + obj.cost + obj.amount
        },
        printDate: function() {
            
        } 
    }
  }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const date = Date.now()
    const newDate = Date.now() - Number(req.cookies.date)

    console.log(typeof req.cookies.counter)
    let counter = req.cookies.counter;
    let userName = req.cookies.userName;
   
    res.cookie('date', date)
    res.cookie('counter', counter)

    res.render('partials/form', {
        cookie: req.cookies.userName,
        time: Math.round(newDate/1000),
        counter: counter
    })
})

app.post('/', (req, res) => {
    let userName = req.body.name

    res.cookie('userName', userName , {
        path: '/',
        maxAge: 1000 * 60 * 60,
        secure: true
        
    })
    res.render('partials/form', {
        query: req.query
    })  
})

// app.get('/second/', (req, res) => {
//     console.log(req.cookies.checkedMain)
//     res.render('partials/form', {
//         cookies: req.cookies
//     })
// })

// app.get('/thirth', (req, res) => {
//     res.clearCookie('checkedMain')
//     console.log(req.cookies.checkedMain)

//     res.render('partials/form', {
//         cookies: req.cookies.checkedMain
//     } )
// })
app.post('/', (req, res) => {
    console.log(req.body.test)
    res.send(req.body.test)
    // if (req.body.radio === 'man') {
    //     res.send('man')
    // } else {
    //     res.send('woman')
    // }

})
// app.get('/target/', function(req, res) {
//     let a = Number(req.query.test1);
//     let b = Number(req.query.test2);
//     let c = Number(req.query.test3);
//     let result = a + b + c
    
//     res.send(result.toString())
// })

// app.get('/', (req, res) => {
//     res.render('main', {
//         img: function(src) {
//             return '<img src="' + src + '"'
//         },
//         link: function(href, ancor) {
//             return '<a href="' + href + '">' + ancor + '</a>'
//         },
//         users: [
// 			{
// 				name: 'name1',
// 				surname: 'surname1'
// 			},
// 			{
// 				name: 'name1',
// 				surname: 'surname1'
// 			},
// 			{
// 				name: 'name1',
// 				surname: 'surname1'
// 			},
// 		],
//         purchases: [
//             {
//                 name: 'purch1',
//                 cost: 1000,
//                 amount: 5
//             },
//             {
//                 name: 'purch2',
//                 cost: 2000,
//                 amount: 6
//             },
//             {
//                 name: 'purch3',
//                 cost: 3000,
//                 amount: 7
//             },
//         ],
//     })
// })

app.get('/page', (req, res) => {
    res.render('main', {
        test: 'data',
        layout: 'admin'
    })
})

app.post('/target/', (req, res) => {
    console.log(req.body)
    res.send(req.body.name + " " + req.body.sity + " " + req.body.country)
})
app.use(express.static('public'))
app.listen(3002, () => {
    console.log('3002')
})
// app.get('/', function(req, res) {
// 	res.render('page1');
// });

// app.get('/page/1/', function(req, res) {
// 	res.render('page1');
// });

// app.get('/page/2/', function(req, res) {
// 	res.render('page2');
// });

// app.get('/page/3/', function(req, res) {
// 	res.render('page3');
// });

// app.get('/page/4/', function(req, res) {
// 	res.render('page4');
// });

// app.get('/page/5/', function(req, res) {
// 	res.render('page5');
// });

// app.get('/index', function(req, res) {
//     res.render('index', {title: titles.index} )
// })

// app.get('/about', (req, res) => {
//     res.render('about', {title: titles.about })
// })

// app.get('/contacts', (req, res) => {
//     res.render('contacts', {title: titles.conctacs})
// })

// app.get('/price', (req, res) => {
//     res.render('price', {title: titles.price})
// })

// app.get('/page/', (req, res) => {
//     res.render('page', {text1: '<div>aaa</div>', text2: 'bbb', text3: 'ccc', text4: 'ddd', text5: 'eee', path: '/pic/img.webp', link: "www.youtube.com"})
// })
// app.get('/page/:page/', function(req, res) {
//     if (fs.access((__dirname + req.params.page), fs.constants.F_OK, (err) => {
//         if (err) {
//             console.log('error')
//         } else {
//             return
//         }
//     })) {
//         res.render(req.params.page);
//     }
//     else {
//         res.status(404).render('404')
//     }
    
// });



// app.get('/test/:num', function(req, res) {
//     let num = req.params.num
//     if (req.params.num instanceof Date) {
//         res.send('good it is date')
//     } else {
//         res.status(404).send('not Date')
//     }
// })

// app.get('/', function(req, res) {
//     res.send('<h1>hello world</h1>')
//     console.log(req.path);
// })

// app.get('/dir/page.html', function(req, res) {

//     console.log(req.url); 
//     console.log(req.originalUrl); 
//     console.log(req.query); 
//     console.log(req.query.get1); 
//     console.log(req.protocol); 
//     console.log(req.secure); 
//     console.log(req.headers); 
//     console.log(req.acceptsLanguages); 
//     console.log(req.ip); 

// })

// app.get('/test/:num1/:num2/:num3', function(req, res) {
//     let result = Number(req.params.num1) + Number(req.params.num2) + Number(req.params.num3)
//     res.send(`${result}`)
// })

// // app.get('/test/:num1/:num2?/', function(req, res) {
// //     res.send('Hello World')
// // 	console.log('works')
// // });


// app.get('/page1/', function(req, res) {
//     res.sendFile(__dirname + '/root/page1.html')
// })
// app.get('/page2/', function(req, res) {
//     res.sendFile(__dirname + '/root/page2.html')
// })

// app.get('/page3/', function(req, res) {
//     res.sendFile(__dirname + '/root/page3.html')
// })
// app.get('/dir', function(req, res) {
//     res.type('text/html')
//     res.redirect(302, '/')
// })

// app.get('/test', function(req, res) {
//     res.send(employees.map(el => {

//     }))
// })

// app.get('/page/:num/', function(req, res) {
//     let path = __dirname + '/root/' + req.params.num +  '.html';

//     fs.access(path, fs.constants.F_OK).then(() => {
//         res.sendFile(path);
//     }).catch(() => {
//         res.status(404).send('not found')
//     })
// })

// const cityRouter = express.Router()
// const countryRouter = express.Router()

// cityRouter.get('/show/:id', function(req, res) {

// })
// cityRouter.get('/edit/:id', function(req, res) {

// })

// app.use('/city/', cityRouter)

// countryRouter.get('list', function(rewq, res) {

// })
// countryRouter.get('show', function(rewq, res) {

// })
// countryRouter.get('edit', function(rewq, res) {

// })

// app.use('/country', countryRouter)
// app.get('/page/:num/', async function(req, res) {
// 	let path = __dirname + '/pages/' + req.params.num 
// 		+ '.html'; 
	
// 	try {
// 		await fs.access(path, constants.F_OK);
// 		res.sendFile(path);
// 	} catch(err) {
// 		res.status(404).send('not found');
// 	}
// });
app.use(express.static(__dirname + '/public/'))

// app.use(function(req, res) {
//     res.status(404).send('page not found')
// })


// app.listen(3002, function() {
// })

