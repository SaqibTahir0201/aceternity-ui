import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Alert } from "daisyui";

const LogoutButton = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <button onClick={() => setShowLogoutModal(true)}>
        Logout
      </button>
      {showLogoutModal && (
        <div
          status="warning"
          className="alert-fixed mt-2"
          onClose={() => setShowLogoutModal(false)}
        >
          
          <span>Are you sure you want to logout?</span>
          <div className="flex justify-end">
            <button
              className="btn btn-sm"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </button>
            <button className="btn btn-sm btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
