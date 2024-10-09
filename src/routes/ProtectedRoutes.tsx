import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// Fonction utilitaire pour s'assurer que le contexte est disponible
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

const ProtectedRoutes = () => {
  const { user, loading } = useUserContext();

  if (loading) {
    return <div>Loading...</div>; // Personnalisez le loader
  }

  if (!user) {
    return <Navigate to="/signin" />; // Rediriger vers login si non connecté
  }

  return <Outlet />;
};

export default ProtectedRoutes;
