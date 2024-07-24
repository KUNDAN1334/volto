// PublicUi routes that are nonContentRoutes, and should not be members of isCmsUi
// You can include either RegEx or a string representing the ending of the
// nonContentRoute eg. '/add' will match '/foo/bar/add'
export const publicNonContentRoutes = [
  '/login',
  '/logout',
  '/sitemap',
  '/register',
  '/search',
  '/change-password',
  '/contact-form',
  '/register',
  /\/passwordreset\/.*$/,
  '/passwordreset',
];
