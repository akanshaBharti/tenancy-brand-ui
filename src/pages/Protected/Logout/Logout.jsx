import { AuthStateContext } from "App";
import WhiteButton from "components/Button/WhiteButton";
import YellowButton from "components/Button/YellowButton";
import DialogBox from "components/DialogBox";
import React, { useContext, useEffect, useState } from "react";
import usePostLogout from "../data/usePostLogout";
import { useNavigate } from "react-router-dom";

const Logout = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthStateContext);
  const [logOutClicked, setLogOutClicked] = useState(false);

  const [, , , postLogout] = usePostLogout();

  useEffect(() => {
    if (logOutClicked) {
      postLogout();
      localStorage.clear();
      setIsAuthenticated(false);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logOutClicked, navigate, setIsAuthenticated]);

  return (
    <div>
      <DialogBox
        showYellowButton={false}
        showCancelButton={false}
        show={open}
        onClose={onClose}
        title="Log Out"
        titleFont="text-[1.2rem]"
        padding="p-0"
        heading="bg-gradient-to-r from-[#D4F7FC80] via-[#A0E4F180] to-[#A0E4F180] px-[1rem] pt-[1rem] pb-[0.1rem] rounded-t-2xl border-b"
      >
        <div className="text-center bg-[#E7E6E6] pb-[3rem] pt-[2rem] rounded-b-2xl ">
          <h4>Are you sure you want to Log Out?</h4>
          <div className="px-[12rem] mt-[1rem] flex justify-center items-center gap-[1rem]">
            <WhiteButton
              onClick={onClose}
              px={"px-[2rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Cancel"
            />
            <YellowButton
              onClick={() => setLogOutClicked(true)}
              px={"px-[1rem]"}
              py={"py-[0.3rem]"}
              rounded={"rounded-lg"}
              name="Log Out"
            />
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default Logout;
