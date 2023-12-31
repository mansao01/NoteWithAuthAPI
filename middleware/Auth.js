import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Access token not found" });
    }

    try {
        req.user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Attach user data to the request
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};


