import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Homepage;