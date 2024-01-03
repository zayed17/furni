const Banner = require('../models/bannermodels');

const loadaddbanner = async(req,res)=>{
    try {
        res.render('addbanner')
    } catch (error) {
        console.log(error);
    }
}

const addbanner = async(req,res)=>{
    try {
        const data =  new Banner({
            title:req.body.title,
            description:req.body.description,
            image:req.file.originalname,
            targeturl:req.body.targeturl
        })
        await data.save()
        res.redirect('/admin/banner')
    } catch (error) {
        console.log(error);
    }
}

// const loadbannerinuser = async(req,res)=>{
//     try {
//         const banner = await Banner.find({});
//         res.render('home',banner)
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports ={
    loadaddbanner,
    addbanner
}