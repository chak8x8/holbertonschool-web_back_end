class AppController {
    static getHomepage(req, res) {
        res.set('Content-Type', 'text/plain');
        res.send('Hello Holberton School!');
    }
}

export default AppController;