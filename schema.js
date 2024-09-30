const Joi=require('joi');

//defining schema using joi package for server side validation
module.exports.menuSchema=Joi.object({ //menu schema has an object named menu
    menu:Joi.object({ //menu is object with 
        name:Joi.string().required(),
        description:Joi.string().required(),
        category:Joi.string().required(),
        subcategory:Joi.string().required(),
        price:Joi.number().required().min(0),
        spice_level:Joi.string().allow('',null),
        image:Joi.string()
    }).required()
})

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        customer:Joi.string(),
        image: Joi.string(),
        review:Joi.string().required(),
        rating:Joi.number()
    }).required()
})