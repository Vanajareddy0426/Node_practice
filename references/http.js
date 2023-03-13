const http = require('http');

app= http.createServer((req,res) => {
    res.write('Hello world');
    res.end()
})
app.listen(5000, () => console.log('Server running ..'));
