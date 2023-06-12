import React from "react";

const AccountProfile = () => {
  return (
    <>
      <div className="m-3 ">
        <p className="font-semibold uppercase"> Account Settings </p>
        <div className="border border-slate-200 mt-3 p-5 rounded-lg shadow-md bg-white">
          My Profile
          <div
            tabindex="0"
            className="focus:outline-none h-20 w-20 my-4 lg:mb-0 mr-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_2.png"
              alt="man avatar"
              className="h-full w-full rounded-full overflow-hidden shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfile;
