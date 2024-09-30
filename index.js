    const express=require('express');
    const path=require('path');
    const ejsmate=require('ejs-mate');
    //async wrap to wrap async function if any error, like try-catch
    const wrapAsync=require('./utils/wrapAsync.js');
    //custom error object to be thrown for different purpose.
    const ExpressError=require('./utils/ExpressError.js');

    const {menuSchema,reviewSchema}=require('./schema.js');

    var methodOverride = require('method-override')
    const app=express();
    const Menu=require('./models/menu');
    const Review=require('./models/review');

    //to connect to the mongoose
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/tawagrill')
    .then(() => console.log('Connected!'));

    //setting up ejs
    app.set('view engine','ejs');
    app.set('views',path.join(__dirname,'views'));
    app.engine('ejs',ejsmate);// use ejs-locals for all ejs templates:

    // joining static public files.
    app.use(express.static(path.join(__dirname, 'public')));

    //middleware for url encoded form data
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //method-override middleware using
    app.use(methodOverride('_method'));

    const port=8080;

    app.listen(port,()=>{
        console.log('Server is listening in port: ',port);
    })

    // function to use joi package's validate method
    const menuValidation = (req, res, next) => {
        console.log("Request body:", JSON.stringify(req.body, null, 2));
        
        // Validate the entire req.body against menuSchema
        let {error} = menuSchema.validate(req.body.menu);  
        
        if (!req.body.menu) {
            throw new ExpressError(400, 'Menu is not provided');
        } else if (error) {
            // Getting all the error messages from details 
            let errMsg = error.details.map(el => el.message).join(', ');
            throw new ExpressError(400, errMsg);
        } else {
            next();
        }
    }
    
    const reviewValidation=(req,res,next)=>{
        //validate the entire review object
        let {error}=reviewSchema.validate(req.body.review);

        if(!req.body.review){
            throw new ExpressError(400,'Review is not provided');
        }else if(error){
            let errMsg=error.details.map(el=>el.message).join(',');
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
    }


    app.get('/menu',async(req,res)=>{
        let isallReview=false;
        let reviewsHome = await Review.find({}).limit(2); 
        res.render('menu/home.ejs',{isallReview,reviewsHome});
    })

    //create route
    app.get('/menu/new',(req,res,next)=>{
        try{
            res.render('menu/new.ejs');
        }catch(err){
            next(err); //implementing error handling middleware.
        }
    })

    //registration route
    app.get('/registration',(req,res)=>{
        res.render('menu/booking.ejs');
    })
    
    //review route
    app.post('/review',reviewValidation, async (req, res) => {
        try {
            console.log("review");
            let data = req.body.review;
            console.log('data', data);
    
            // Create a new Review document
            let newReview = new Review({
                customer: data.customer,
                image: { url: data.image, filename: data.image },
                rating: data.rating,
                review: data.review
            });
    
            // Save the new Review document
            let savedReview = await newReview.save();
    
            console.log("Saved Review:", savedReview);
    
            // Find the menu document
            let menuDocument = await Menu.findOne({name: data.menuName});
            if (!menuDocument) {
                return res.status(404).send('Menu not found');
            }
    
            // Push the ObjectId of the new review into the menu's reviews array
            menuDocument.reviews.push(savedReview._id);
            await menuDocument.save();
    
            console.log("Updated Menu Document:", menuDocument);
    
            res.redirect("/menu");
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred');
        }
    });


    //show routes
    app.get('/menu/:id',async(req,res)=>{
        let{id}=req.params;
        let data=await Menu.findById(id);
        res.render('menu/show.ejs',{data});
    })

    //new route
    app.post('/menu',menuValidation, wrapAsync(async(req, res,next) => {    

            let menuData = req.body.menu;
            console.log(menuData);

            let menu = new Menu(menuData);
            await menu.save();
            res.redirect('/menu'); // Redirect to a safe route after saving
    }));



    // Route for subcategories
    app.get('/menu/category/:subcategory', async(req, res) => {
        let { subcategory } = req.params;
        subcategory = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
        const datas = await Menu.find({ subcategory });
        res.render('menu/index.ejs', { datas });
    });

    //edit route
    app.get('/menu/:id/edit', async(req, res) => {
        let { id } = req.params;
        let menu = await Menu.findById(id);
        console.log('menu url: ',menu.image.url);
        res.render('menu/edit.ejs', { menu});
    });

    //update route
    app.put('/menu/:id',menuValidation, async(req, res) => {
        let {id}=req.params;
        let menu = req.body.menu;
        if(!menu){
            throw new ExpressError(400,'Send Valid data for testing'); // if menuData is empty when sending through ' postmen ' , this error will occur.
        }
        let updatedUrl=menu.image;
        menu.image={url:updatedUrl};
        menu=await Menu.findByIdAndUpdate(id,menu,{new:true});
        res.render('menu/home.ejs');
    });

    app.delete('/menu/:id',async(req,res)=>{
        let {id}=req.params;
        let deletedData=await Menu.findByIdAndDelete(id);
        res.redirect('/menu');
    })


    //Route for searching the menu
    app.get('/search',async(req,res)=>{
        let menuname=req.query.menuname;
        const menuKeywordArr=menuname.split(' ');
        let datas;
        for(let menuKeyword of menuKeywordArr){
            console.log('MenuKeyWord:',menuKeyword);
            datas = await Menu.find({
                $or: [
                    { name: { $regex: new RegExp('^' + menuKeyword, 'i') } }, // Matches names starting with the keyword
                    { name: { $regex: new RegExp(menuKeyword + '.*', 'i') } } // Matches names containing the keyword
                ]
            });
            if(datas){
                break;
            }
        }

        if(datas.length==0){
            console.log('it worked');
            return res.render('invalidMenu.ejs');

        }
        console.log(datas);
        res.render('menu/index.ejs',{datas});
    })

    app.get('/review',async (req,res)=>{
        let reviews=await Review.find({});
        console.log(reviews);
        const allReview=true;
        res.render("includes/review.ejs",{reviews,allReview});

    })

    /**
     * Error-1 : Page Not Found 
     * This error occurs when all the route provided doesnot match with any route
     */
    app.all('*',(req,res,next)=>{
        next(new ExpressError(404,'Page Not Found'));   
    })


    /**
     * Error handler middleware.
     * Since this is the middleware, you need to call using -> next(err)
     * next(err) calls for next error handling middleware.
     */

    //default error handling middleware
    app.use((err,req,res,next)=>{
        //destructuring custom errors class properties
        let {statusCode=500,message='something went wrong'}=err; //defining default value for statuscode and message because  if some unknown error occurs where i have not thrown custom error then some unknown server may occur.
        res.render('error.ejs',{err,message,statusCode});
    })






