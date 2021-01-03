module.exports=(app)=>{
    const blog=require('../controllers/controllers');

    app.get('/api/blogs',blog.getall);
    app.post('/api/create',blog.create);
    
}