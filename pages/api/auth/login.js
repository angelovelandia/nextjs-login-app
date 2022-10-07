import jwt from 'jsonwebtoken'
import { serialize } from 'cookie';

export default function loginHandler(req, res){
    const { email, password } = req.body;
    if(email == "angelus1623@gmail.com" && password == "admin"){
        const token = jwt.sign({
            email,
            password,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
        }, 'spiderVerse')
        const serialized = serialize('MyTokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 24 * 30,
            path: '/'
        });
        res.setHeader('Set-Cookie', serialized)
        return res.json('Login successfully')
    }

    return res.status(401).json({error: 'Invalid email or password'});
    
}