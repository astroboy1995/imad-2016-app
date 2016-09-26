var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
  title:' Article-one|heare is the article one',
  heading:'This is article one',
  date:'26th september, 2016',
  content:  
  `<pr>
        This is my first article in my imad console.<br>
                
    </pr>
     <pr>
        And I think I'm learning a lot and having fun.
    </pr>`
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
    
    <head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    
    </head> 
    
    <body>
     <div class="container">
         <div>
            <a href="/">home</a>
         </div>
    
         <h3>
             ${heading}
         </h3>
         <div>
             ${date}
         </div>
         <div>
            ${content}    
        </div>
    </div>
    </body>
    </html>
    `;
    
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
