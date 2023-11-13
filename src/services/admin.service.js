export const checkAdminStatus = async () => {
    if (localStorage.getItem('isAdmin') === 'true') {
        try {
          const response = await fetch('http://localhost:3001/api/validate-admin',);
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