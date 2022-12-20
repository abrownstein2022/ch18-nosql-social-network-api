module.exports = function(err){

   if(err?.name === 'MongoServerError'){
        switch(err.code){
            case 11000: return res.status(400).json({ message: 'Duplicate value found.', value: err?.keyValue })

        }
   }
        
    console.log(err);
    res.status(400).json(err);
}