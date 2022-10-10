import { verify } from "jsonwebtoken";
import { serialize } from "cookie"

export default function logoutHandler(req, res) {

    const { userToken } = req.cookies;

    if(!userToken) return res.status(401).json({ error: "no token"});

    try {
        verify(userToken, 'spiderVerse')
        const serialized = serialize('userToken', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        });
        res.setHeader('Set-Cookie', serialized)
        return res.status(200).json('Logout successfully')
    } catch (error) {
        return res.status(401).json({ error: "Invalid token"})
    }
}