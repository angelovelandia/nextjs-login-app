import { verify } from "jsonwebtoken";

export default function profileHandler(req, res) {

  const { userToken } = req.cookies;

  if (!userToken) return res.status(401).json({ error: "no token" });

  try {
    const user = verify(userToken, "spiderVerse");
    return res.json(user);
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
