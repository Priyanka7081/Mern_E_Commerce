import { Cart } from "../Models/Cart.js";


//AddToCart
export const addToCart = async (req, res) => {
    const { productId, title, price, qty, imgSrc } = req.body

    const userId = "685f70e64329a49c97672396";

    let cart = await Cart.findOne({ userId });

    if (!cart) {

        cart = new Cart({ userId, items: [] })
    }

    const itemIndex = cart.items.findIndex
    ((item) => item.productId.toString() === productId);

    if (itemIndex > -1) {
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price * qty;
    } else {

        cart.items.push({ productId, title, price, qty, imgSrc });
    }

    await cart.save();
    res.json({ message: 'Item added to Cart', cart });
};

//get User Cart
export const userCart = async(req, res)=>{
    
    const userId = "685f70e64329a49c97672396";

    let cart = await Cart.findOne({userId});
    if(!cart) return res.json({message:'Cart not found'})

     res.json({message:"user cart",cart})
}