export const checkAdminStatus = async () => {
    if (localStorage.getItem('isAdmin') === 'true') {
        try {
          const response = await fetch('https://fadlhassan-1bb6131358de.herokuapp.com/api/validate-admin');
          const data = await response.json();
    
          return data.isAdmin;
        } catch (error) {
          console.error('Error validating admin status:', error);
          return false;
        }
      } else {
        return false;
      }
}