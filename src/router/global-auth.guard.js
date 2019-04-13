import router from './index';

const isAdmin = {
  loggedIn() {
    return localStorage.getItem('auth');
  },
};

//11/ 11. You can create global guards
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    //1/ 12. Checks if user is logged in, only if requiresAuth occurs in meta
      //1/ 13. Condition with mock service
      if (isAdmin.loggedIn()) {
        //1/ 14. Allows to enter the route
        next();
      } else {
        //4/ 15. Redirects to login page
        next({
          path: '/'
        });
      }
  } else {
    next();
  }
});
