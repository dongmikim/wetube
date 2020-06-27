import { videos } from '../db';

export const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};

export const search = (req, res) => {
  console.log(req.query);
  const {
    query: { term: searchingBy }
  } = req;

  res.render('search', { pageTitle: 'Search', searchingBy, videos })
};

export const videoDetail = (req, res) => res.render('videoDetail');
export const upload = (req, res) => res.render('upload');
export const editVideo = (req, res) => res.render('editVideo');
export const deleteVideo = (req, res) => res.render('delete Video');
