import React from "react";

export const CloseFriend = ({ user }) => {
  return (
    <div>
      hello{user.profilePicture}
      {user.id}
    </div>
  );
};
export default CloseFriend;
