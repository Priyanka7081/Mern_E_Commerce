import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user)
            return res.json({ message: "User exist", success: false });
        const hashPass = await bcrypt.hash(password, 10)

        user = await User.create({ name, email, password: hashPass });
        res.json({ message: "User register successfully...!", user, success: true });

    } catch (error) {
        res.json({ message: error.message })

    }
};

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) return res.json({ message: "User Not Find", success: false })
        const validPassword = await bcrypt.compare(password, user.password);
        if (InvalidPassword) return res.json({
            message: 'Invalid Credential',
            success: false
        });
        res.json({message:`Welcom ${user.name}`,success:true,user})

    } catch (error) {
        res.json({message:error.message})

    }
}