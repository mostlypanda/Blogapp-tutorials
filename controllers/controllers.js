const Blog=require('../model/model');

exports.getall=(req,res)=>{

}

exports.create=(req,res)=>{
    const newblog=new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    newblog.save().then((blog)=>{
        res.status(201).json({"msg":"created","blog":blog});
    }).catch((err)=>{
        if(err) return res.status(500).json(err);
    })
}