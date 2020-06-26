export const getJoin = (req, res) => {
  res.render('join', { pageTitle : 'Join' });
}

export const postJoin = (req, res) => {
  console.log(req.body);
  res.render('join', { pageTitle : 'Join' });
}

export const login = (req, res) => res.render('login');
export const logout = (req, res) => res.render('logout');
export const users = (req, res) => res.render('users');
export const userDetail = (req, res) => res.render('userDetail');
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile'});
export const changePassword = (req, res) => res.render('changePassword');