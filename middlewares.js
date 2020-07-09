import multer from "multer";
import routes from "./routes";

<<<<<<< HEAD
const multerVideo = multer({ dest: "uploads/videos/" });
=======
const multerVideo = multer({ dest: "videos/" });
>>>>>>> e807a8aa41902ad36b5eb0c95fc8be355526b440

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenicated: true,
    id: 1
  };
  next();
}

export const uploadVideo = multerVideo.single("videoFile");