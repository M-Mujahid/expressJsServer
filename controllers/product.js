const getAllProduct = async (req , res ) => {
 res.status(200).json({msg:"I am getAllProducts"});
}

const getAllProductTesting = async (req , res ) => {
    res.status(200).json({msg:"I am getAllProductsTesting"});
   }

   module.exports = {getAllProduct , getAllProductTesting};