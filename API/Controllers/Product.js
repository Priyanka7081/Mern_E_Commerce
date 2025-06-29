
import { Products } from "../Models/Product.js";


//add product
export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    await Products.create({
         title, description, price, category, qty, imgSrc });
    res.json({ message: "Product added successfully...!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get product
export const getProducts = async(req,res)=>{
  let product = await Products.find().sort({createdAt:-1})
  res.json({message:'All products',product})
} 
//find product by id
export const getProductById = async(req,res)=>{
  const id = req.params.id;
  let product = await Products.findById(id)
  if(!product) return res.json({message:'Invalid Id'})
  res.json({message:'specific product',product});
} 