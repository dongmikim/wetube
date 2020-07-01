import routes from '../routes';

export const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};

export const search = (req, res) => {
  console.log(req.query);
  const {
    body: { term: searchingBy }
  } = req;

  res.render('search', { pageTitle: 'Search', searchingBy, videos })
};

export const videoDetail = (req, res) => {
  res.render('videoDetail', { pageTitle: 'videoDetail' });
};

export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'Upload' });
};


export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  // To Do: Upload and save videos
  res.redirect(routes.videoDetail(324903));
};

export const editVideo = (req, res) => res.render('editVideo');
export const deleteVideo = (req, res) => res.render('delete Video');
