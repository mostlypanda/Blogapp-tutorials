module.exports=(app)=>{
    const blog=require('../controllers/controllers');

    app.get('/api/blogs',blog.getall);
    app.get('/api/blog/:blogID',blog.getone);
    app.post('/api/create',blog.create);
    
}