import React, { useContext, useEffect, useState } from "react";
import tenancyLogo from "assets/image/tenancyLogo.svg";
import YellowButton from "components/Button/YellowButton";
import { Link, useNavigate } from "react-router-dom";
import barIcon from "assets/image/Search/barIcon.svg";
import InputField from "components/InputFields/inputField";
import previousBtn from "assets/image/VisiterProfile/arrow-left.svg";
import eye from "assets/image/VisiterProfile/eye.svg"
import usePostLogout from "pages/Protected/data/usePostLogout";
import { AuthStateContext } from "App";
import useGetProfile from "pages/Protected/data/useGetProfile";
import usePatchBasicProfileData from "pages/Protected/data/usePatchBasicProfileData";
import { showErrorToast, showSuccessToast } from "components/toaster/toastHelper";
import usePostMobileChangeNum from "pages/Protected/data/usePostMobileChangeNum";
import usePostMobileChangeOtp from "pages/Protected/data/usePostMobileChangeOtp";
import usePostEmailChange from "pages/Protected/data/usePostEmailChange";
import usePostEmailChangeOtp from "pages/Protected/data/usePostEmailChangeOtp";
import usePatchPasswordChange from "pages/Protected/data/usePatchPasswordChange";
import usePatchProfilePic from "pages/Protected/data/usePatchProfilePic";
import useDeleteProfilePic from "pages/Protected/data/useDeleteProfilePic";

const VisiterProfile = () => {
  const navigate= useNavigate()
  const [basicDetails, setBasicDetails] = useState(false);
  const [showPicView, setShowPicView] = useState(null);
  const [passwordDetails, setPasswordDetails]= useState(false);
  const [phoneDetails, setPhoneDetails] = useState(false);
  const [emailDetails, setEmailDetails]= useState(false)
  const [logOutClicked, setLogOutClicked] = useState(false);
  const { setIsAuthenticated } = useContext(AuthStateContext);
  const [errors, setErrors] = useState({});
  const [mobileErrors, setMobileErrors]=useState("");
  const [otp_id, setOtp_id]= useState("");
  const [otpSentEmail, setOtpSentEmail]=useState("")
  const [mobileOtpErrors, setMobileOtpErrors]= useState("")
  const [emailErrors, setEmailErrors]= useState("");
  const [emailOtpErrors, setEmailOtpErrors]=useState("")
  const [passwordErrors, setPasswordErrors]= useState({})
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicError, setProfilePicError] = useState("");

  const [ , , , postLogout] = usePostLogout();

  const [ 
    getProfileData,
    ,
    ,
    getProfile
  ] = useGetProfile();

  const [ 
    patchBasicProfileData,
    patchBasicProfileError,
    ,
    patchBasicProfile
  ] = usePatchBasicProfileData();

  const [ 
    postMobileChangeNumData,
    postMobileChangeNumError,
    ,
    postMobileChangeNum
  ] = usePostMobileChangeNum();

  const [ 
    postEmailChangeData,
    postEmailChangeError,
    ,
    postEmailChange
  ] = usePostEmailChange();

  const [ 
    postEmailChangeOtpData,
    postEmailChangeOtpError,
    ,
    postEmailChangeOtp
  ] = usePostEmailChangeOtp();

  const [ 
    postMobileChangeOtpData,
    postMobileChangeOtpError,
    ,
    postMobileChangeOtp
  ] = usePostMobileChangeOtp();

  const [ 
    patchPasswordChangeData,
    patchPasswordChangeError,
    ,
    patchPasswordChange
  ] = usePatchPasswordChange();

  const [ 
    patchProfilePicData,
    patchProfilePicError,
    ,
    patchProfilePic
  ] = usePatchProfilePic();

  const [ 
    deleteProfilePicData,
    deleteProfilePicError,
    ,
    deleteProfilePic
  ] = useDeleteProfilePic();

  useEffect(()=>{
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
   if(deleteProfilePicData){
    showSuccessToast("Profile Pic Deleted Successfully")
    getProfile()
   }
   if(deleteProfilePicError){
    showErrorToast("Error in deleting profile pic")
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[deleteProfilePicData, deleteProfilePicError])

  useEffect(()=>{
   if(patchProfilePicData){
    showSuccessToast("Profile Pic Updated Successfully")
    getProfile()
   }
   if(patchProfilePicError){
    showErrorToast("Error in updating profile pic")
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[patchProfilePicData, patchProfilePicError])

  useEffect(()=>{
   if(patchPasswordChangeData){
    showSuccessToast("Password Changed Successfully")
    changeToViewPass()
   }
   if(patchPasswordChangeError){
    showErrorToast("Error in changing password")
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[patchPasswordChangeData, patchPasswordChangeError])

  useEffect(()=>{
   if(postEmailChangeData){
    showSuccessToast("OTP sent Successfully");
    if(postEmailChangeData?.data){
      setOtpSentEmail(postEmailChangeData?.data?.otp_id)
    }
   }
   if(postEmailChangeError){
    showErrorToast("Error in Updating Email")
   }
  },[postEmailChangeData, postEmailChangeError])

  useEffect(()=>{
   if(postMobileChangeOtpData){
    showSuccessToast("Mobile Number Updated Successfully")
    changeToViewPhone()
    setOtp_id("")
    getProfile()
   }
   if(postMobileChangeOtpError){
    showErrorToast("Error in Updating Mobile Number")
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[postMobileChangeOtpData, postMobileChangeOtpError])

  useEffect(()=>{
    if(postEmailChangeOtpData){
      showSuccessToast("Email Updated Successfully")
      setOtpSentEmail("")
      changeToViewEmail()
      getProfile()
    }
    if(postEmailChangeOtpError){
      showErrorToast("Error in Updating Email")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[postEmailChangeOtpData, postEmailChangeOtpError])

  useEffect(()=>{
   if(postMobileChangeNumData){
    showSuccessToast("Send An OTP to your Mail/Mobile Num");
    if(postMobileChangeNumData?.data){
      setOtp_id(postMobileChangeNumData?.data?.otp_id)
    }
   }
   if(postMobileChangeNumError){
    showErrorToast("Error in sending OTP")
   }
  },[postMobileChangeNumData, postMobileChangeNumError])

  useEffect(()=>{
   if(patchBasicProfileData){
    showSuccessToast("Basic Profile Data Updated Successfully");
     changingToEdit();
   }
   if(patchBasicProfileError){
    showErrorToast("Error in updating basic profile")
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[patchBasicProfileData, patchBasicProfileError])
  
  useEffect(() => {
    if (logOutClicked) {
      postLogout();
      localStorage.clear();
      setIsAuthenticated(false)
      navigate("/"); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logOutClicked, navigate, setIsAuthenticated]);

  // Profile Pic Form

   // Validation function
   const ValidateProfilePicForm = (file) => {
    console.log('profilePicture', profilePicture)
    if (!file) {
      setProfilePicError("Profile picture is required.");
      return false;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setProfilePicError("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
      return false;
    }

    setErrors("");
    return true;
  };

    // Handle file change
    const handleFileProfilePicChange = (e) => {
      console.log("im heree")
      const file = e.target.files[0];
      setProfilePicture(file);
        handleProfilePicSubmit(e, file)

    };

      // Handle form submission
  const handleProfilePicSubmit = (e, file) => {
    e.preventDefault();
    if (ValidateProfilePicForm(file)) {
      // Here, you can send the profile picture to the backend using FormData
      const formData = new FormData();
      formData.append("profile_picture", file);
      patchProfilePic(formData)
      // Simulating form submission

      // Reset the form
      setProfilePicture(null);
    }
  };

  // Password Change Form

  const [passwordForm, setPasswordForm]= useState({
    old_password:"",
    new_password:"",
    confirm_new_password:""
  })


  // Validation function
  const validatePasswordForm = () => {
    const newErrors = {};

    if (!passwordForm.old_password.trim()) {
      newErrors.old_password = "Old password is required.";
    }

    if (!passwordForm.new_password.trim()) {
      newErrors.new_password = "New password is required.";
    } else if (passwordForm.new_password.length < 6) {
      newErrors.new_password = "New password must be at least 6 characters.";
    }

    if (!passwordForm.confirm_new_password.trim()) {
      newErrors.confirm_new_password = "Confirm new password is required.";
    } else if (passwordForm.new_password !== passwordForm.confirm_new_password) {
      newErrors.confirm_new_password = "Passwords do not match.";
    }

    setPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    // Handle input changes
    const handlePasswordChange = (e) => {
      const { name, value } = e.target;
      setPasswordForm({ ...passwordForm, [name]: value });
    };

      // Form submit handler
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswordForm()) {
      console.log("Password Form Submitted:", passwordForm);
      // Call API or handle backend logic here
      patchPasswordChange(passwordForm)
      setPasswordForm({
        old_password: "",
        new_password: "",
        confirm_new_password: "",
      });
    }
  };
  // Email Form
  const [emailForm, setEmailForm] = useState({
    email: "",
  });

    // Validation function
    const validateEmail = () => {
      if (!emailForm.email.trim()) {
        setEmailErrors("Email is required.");
        return false;
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailForm.email)
      ) {
        setEmailErrors("Enter a valid email address.");
        return false;
      }
      setEmailErrors(""); // Clear error if valid
      return true;
    };

      // Handle input change
  const handleEmailChange = (e) => {
    setEmailForm({ ...emailForm, email: e.target.value });
  };

    // Form submit handler
    const handleEmailSubmit = (e) => {
      e.preventDefault();
  
      if (validateEmail()) {
        console.log("Submitted Email:", emailForm);
        // Call API or handle backend logic here
        // Reset the form
        postEmailChange(emailForm)
      }
    };

  // mobile change  OTP Form

  const [mobileForm, setMobileForm]= useState({
    mobile_number: ""
  })

    // Validation function
    const validateMobileNumber = () => {
      if (!mobileForm.mobile_number.trim()) {
        setMobileErrors("Mobile number is required.");
        return false;
      } else if (!/^[6-9]\d{9}$/.test(mobileForm.mobile_number)) {
        setMobileErrors("Enter a valid 10-digit mobile number starting with 6-9.");
        return false;
      }
      setMobileErrors(""); // Clear error if valid
      return true;
    };

  // Handle input change
  const handleMobileChange = (e) => {
    setMobileForm({ ...mobileForm, mobile_number: e.target.value });
  };

    // Form submit handler
    const handleMobileSubmit = (e) => {
      e.preventDefault();
  
      if (validateMobileNumber()) {
        console.log("Submitted Data:", mobileForm);
        postMobileChangeNum(mobileForm)
        // Call API or handle backend logic here
        // Reset the form
      }
    };

    // EmailChange Otp Form
     
    const [emailChangeOtpForm, setEmailChangeOtpForm] = useState({
      otp: "",
    });

          // Validation function
  const validateEmailOtp = () => {
    if (!emailChangeOtpForm.otp.trim()) {
      setEmailOtpErrors("OTP is required.");
      return false;
    } else if (!/^\d{4}$/.test(emailChangeOtpForm.otp)) {
      setEmailOtpErrors("Enter a valid 4-digit OTP.");
      return false;
    }
    setEmailChangeOtpForm(""); // Clear error if valid
    return true; 
  };

    // Handle input change
    const handleEmailOtpChange = (e) => {
      setEmailChangeOtpForm({ ...emailChangeOtpForm, otp: e.target.value });
    };

        // Form submit handler
        const handleEmailChangeOtpSubmit = (e) => {
          e.preventDefault();
      
          if (validateEmailOtp()) {
            console.log("Submitted OTP:", emailChangeOtpForm);
            // Call API or handle backend logic here
            // Reset the form
            // postMobileChangeOtp({
            //   "otp": mobileChangeOtpForm.otp,
            //    "otp_id":otp_id
            // })
            postEmailChangeOtp({
              "otp":emailChangeOtpForm.otp,
              "otp_id":otpSentEmail
            })
          }
        };


    // mobileChange otp Form

    const [mobileChangeOtpForm, setMobileChangeOtpForm] = useState({
      otp: "",
    });

      // Validation function
  const validateMobileOtp = () => {
    if (!mobileChangeOtpForm.otp.trim()) {
      setMobileOtpErrors("OTP is required.");
      return false;
    } else if (!/^\d{4}$/.test(mobileChangeOtpForm.otp)) {
      setMobileOtpErrors("Enter a valid 4-digit OTP.");
      return false;
    }
    setMobileChangeOtpForm(""); // Clear error if valid
    return true; 
  };

  // Handle input change
  const handleMobileOtpChange = (e) => {
    setMobileChangeOtpForm({ ...mobileChangeOtpForm, otp: e.target.value });
  };

    // Form submit handler
    const handleMobileChangeOtpSubmit = (e) => {
      e.preventDefault();
  
      if (validateMobileOtp()) {
        console.log("Submitted OTP:", mobileChangeOtpForm);
        // Call API or handle backend logic here
        // Reset the form
        postMobileChangeOtp({
          "otp": mobileChangeOtpForm.otp,
           "otp_id":otp_id
        })
      }
    };

  // Basic Profile form
  const [basicProfileForm, setBasicProfileForm]=useState({
    full_name:"",
    father_name:"",
    date_of_birth:"",
    gender:"",
    marital_status:""
  })

  useEffect(()=>{
    if(getProfileData?.data){
      const {date_of_birth, email, father_name, full_name, gender, marital_status, mobile_number, profile_picture}=getProfileData?.data;
      setBasicProfileForm({
        full_name:full_name,
        father_name:father_name,
        date_of_birth:date_of_birth,
        gender:gender,
        marital_status:marital_status
      })
      setMobileForm({
        mobile_number:mobile_number
      })
      setEmailForm({
        email:email
      })
      setShowPicView(profile_picture)
    }
  },[getProfileData])

  const validateForm = () => {
    const newErrors = {};

    if (!basicProfileForm.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    } else if (basicProfileForm.full_name.length < 3) {
      newErrors.full_name = "Full name must be at least 3 characters.";
    }

    if (!basicProfileForm.father_name.trim()) {
      newErrors.father_name = "Father's name is required.";
    }

    if (!basicProfileForm.date_of_birth) {
      newErrors.date_of_birth = "Date of birth is required.";
    }

    if (!basicProfileForm.gender) {
      newErrors.gender = "Gender is required.";
    }

    if (!basicProfileForm.marital_status) {
      newErrors.marital_status = "Marital status is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", basicProfileForm);
      // Reset form (optional)
      patchBasicProfile(basicProfileForm)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicProfileForm({ ...basicProfileForm, [name]: value });
  };


  const changingToEdit = () => {
    setBasicDetails(!basicDetails);
  };

  const changeToViewPass=()=>{
    setPasswordDetails(false)
  }
  const changeToEditPass=()=>{
    setPasswordDetails(true)
  }

  const changeToViewPhone=()=>{
    setPhoneDetails(false)
  }
  const changeToEditPhone=()=>{
    setPhoneDetails(true)
  }
  
  const changeToViewEmail=()=>{
    setEmailDetails(false)
  }
  const changeToEditEmail=()=>{
    setEmailDetails(true)
  }

  return (
    <div className="px-[5rem] py-[1.5rem] bg-[#F7F7F7]">
      {/* header */}
      <div className="flex justify-between">
        <Link to={"/"}>
          <img src={tenancyLogo} className="" alt="logo" />
        </Link>
        <div className="flex gap-[1rem]">
          <YellowButton
            px={"px-[1rem]"}
            py={"py-[0.3rem]"}
            rounded={"rounded-lg"}
            name="List your Property"
          />
          <img src={barIcon} alt="bar img" />
        </div>
      </div>
      <div className="py-[1rem] gap-[1rem] items-center flex">
        <button onClick={() => navigate("/")}>
          <img src={previousBtn} alt="" className="w- h-" />
        </button>
        <p className="text-[#111827] font-[500] m-0">Profile</p>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-12 md:col-span-12 w-[100%] ">
          {basicDetails ? (
            <>
              <div className="bg-white-body rounded-xl border bg-white border-[#E2E8F0] ">
                <form>
                  <div className="md:flex justify-between items-center bg-[#FCE969] px-6 py-[0.7rem] rounded-tl-xl rounded-tr-xl hidden">
                    <h4 className="text-[#334155] text-[1.1rem] font-[500] m-0">
                      Basic Details
                    </h4>
                    <button
                      type="button"
                      className="!border !border-[#111827] rounded-md bg-white-body text-[0.9rem] py-1 px-1.5 text-[#111827]"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      DONE
                    </button>
                  </div>
                  <div className="flex">
                    <div className="flex justify-between w-[100%] gap-2 p-6">
                      <div className="w-[79%]">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                            Name
                          </h4>
                          <div className="w-[38%]">
                          <InputField
                            type="text"
                            name="full_name"
                            value={basicProfileForm?.full_name}
                            onChange={handleInputChange}
                            className="!border !border-[#E2E8F0] rounded-sm w-[100%] text-[#334155] py-1.5 px-1.5 focus:outline-none"
                          />
                          {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-[1rem]">
                          <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                            Father’s Name
                          </h4>
                          <div className="w-[38%]">
                          <InputField
                            type="text"
                            name="father_name"
                            value={basicProfileForm?.father_name}
                            onChange={handleInputChange}
                            className="!border !border-[#E2E8F0] rounded-sm w-[100%] text-[#334155] py-1.5 px-1.5 focus:outline-none"
                          />
                          {errors.father_name && <p className="text-red-500 text-sm">{errors.father_name}</p>}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-[1rem]">
                          <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                            Date of Birth
                          </h4>
                          <div className="relative w-[38%]">
                            <InputField
                              type="date"
                              name="date_of_birth"
                              value={basicProfileForm?.date_of_birth}
                              onChange={handleInputChange}
                              className=" !border !border-[#E2E8F0] rounded-sm w-full text-[#334155] py-1.5 px-3 focus:outline-none"
                            />
                            {errors.date_of_birth && <p className="text-red-500 text-sm">{errors.date_of_birth}</p>}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-[1rem]">
                          <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                            Gender
                          </h4>
                         <div className="w-[38%]">
                         <InputField
                            type="select"
                            name="gender"
                            value={basicProfileForm?.gender}
                            onChange={handleInputChange}
                            options={[
                              { value: "", label: "Select an option" },
                              { value: 1, label: "Male" },
                              { value: 2, label: "Female" },
                              { value: 3, label: "Other" },
                            ]}
                            className="!border !border-[#E2E8F0] rounded-sm w-[100%] text-[#334155] py-1.5 px-1.5 focus:outline-none"
                          />
                          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                         </div>
                        </div>
                        <div className="flex justify-between items-center mt-[1rem]">
                          <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                            Marital Status
                          </h4>
                          <div className="w-[38%]">
                          <InputField
                            type="select"
                            name="marital_status"
                            value={basicProfileForm?.marital_status}
                            onChange={handleInputChange}
                            options={[
                              { value: "", label: "Select an option" },
                              { value: 1, label: "Married" },
                              { value: 2, label: "Unmarried" },
                              { value: 3, label: "Prefer not to disclose" },
                            ]}
                            className="!border !border-[#E2E8F0] rounded-sm w-[100%] text-[#334155] py-1.5 px-1.5 focus:outline-none"
                          />
                          {errors.marital_status && <p className="text-red-500 text-sm">{errors.marital_status}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="w-[16%] flex flex-col items-center gap-2">
                        {showPicView ? (
                          <>
                            <img
                              src={showPicView}
                              alt="Profile"
                              className="w-[200px] h-[200px] overflow-hidden rounded-full"
                            />
                            {profilePicError && <p className="text-red-500 text-sm">{profilePicError}</p>}
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  document.getElementById("picId").click()
                                }
                                className="border border-[#E2E8F0] text-[#334155] py-2 px-[0.7rem] bg-[#FFFFFF] rounded-md"
                              >
                                Update
                              </button>
                              <button
                                type="button"
                                // onClick={deleteProfilePic}
                                onClick={()=>deleteProfilePic()}
                                className="border border-[#E2E8F0] text-[#334155] py-2 px-[0.7rem] bg-[#FFFFFF] rounded-md"
                              >
                                Remove
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-[200px] h-[200px]  border border-[#E2E8F0] rounded-full"></div>
                            {profilePicError && <p className="text-red-500 text-sm">{profilePicError}</p>}
                            <div>
                              <button
                                type="button"
                                onClick={() =>
                                  document.getElementById("picId").click()
                                }
                                className="border border-[#E2E8F0] text-[#334155] py-2 px-[0.7rem] bg-[#FFFFFF] rounded-md"
                              >
                                Add Photo
                              </button>
                            </div>
                          </>
                        )}
                        <InputField
                          type="file"
                          id="picId"
                          className="hidden"
                          onChange={handleFileProfilePicChange}
                          
                          // onChange={profilePicUpdation}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white-body rounded-xl border border-[#E2E8F0] bg-white md:mt-0 mt-[1.5rem]">
                <div className="md:flex justify-between items-center bg-[#FCE969] px-6 py-[0.7rem] rounded-tl-xl rounded-tr-xl hidden">
                  <h4 className="text-[#334155] text-[1.1rem] font-[500] m-0">
                    Basic Details
                  </h4>
                  <button
                    className="!border !border-[#111827] rounded-md bg-white-body text-[0.9rem] py-1 px-1.5 text-[#111827]"
                    onClick={changingToEdit}
                  >
                    EDIT
                  </button>
                </div>
                <div className={`flex justify-between w-[100%] gap-2 p-6 `}>
                  <div className="md:w-[79%]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0">
                      <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                        Name
                      </h4>
                      <div className=" bg-[#F8FAFC] rounded-md py-1 px-1.5 md:w-[38%] text-[#334155] h-[2rem]">
                        {basicProfileForm?.full_name}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mt-[1rem]">
                      <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                        Father’s Name
                      </h4>
                      <div className="bg-[#F8FAFC] rounded-md py-1 px-1.5 md:w-[38%] w-[100%] text-[#334155] h-[2rem]">
                        {basicProfileForm.father_name}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mt-[1rem]">
                      <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                        Date of Birth
                      </h4>
                      <div className=" bg-[#F8FAFC] rounded-md py-1 px-1.5 md:w-[38%] w-[100%] text-[#334155] h-[2rem]">
                        {basicProfileForm.date_of_birth}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mt-[1rem]">
                      <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                        Gender
                      </h4>
                      <div className="bg-[#F8FAFC] rounded-md py-1 px-1.5 md:w-[38%] w-[100%] text-[#334155] h-[2rem]">
                        {basicProfileForm.gender === 1 ? "Male" : basicProfileForm.gender ===2 ? "Female" : "Others" }
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mt-[1rem]">
                      <h4 className="text-[#64748B] text-[1rem] font-[500] m-0">
                        Marital Status
                      </h4>
                      <div className="bg-[#F8FAFC] rounded-md py-1 px-1.5 md:w-[38%] w-[100%] text-[#334155] h-[2rem]">
                        {basicProfileForm.marital_status === 1 ? "Married" : basicProfileForm.gender === 2 ? "Un-Married" : "Others" }
                      </div>
                    </div>
                  </div>
                  {
                    showPicView ?<div className="w-[18%] flex justify-center">
                    <img
                      src={showPicView}
                      alt="Profile"
                      className={`w-[200px] h-[200px] overflow-hidden rounded-full `}
                    />
                  </div> :<div className="w-[200px] h-[200px]  border border-[#E2E8F0] rounded-full"></div>
                  }
                </div>
              </div>
            </>
          )}
          <div className="border border-[#E2E8F0] mt-3 rounded-xl">
          <div className="flex justify-between items-center bg-[#FCE969] px-6 py-[0.5rem] rounded-tl-xl rounded-tr-xl">
            <h4 className="text-[#334155] text-[1.1rem] font-[500] m-0">
              Account Settings
            </h4>
          </div>
          <div
            className={`grid grid-cols-12 p-6 gap-[3rem] bg-white rounded-bl-xl rounded-tr-xl`}
          >
            <div className="col-span-4">
              {passwordDetails ? (
                <form>
                  <div className="md:block hidden">
                    <div>
                      <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                        Current Password
                      </h6>
                      <div className="!border !border-[#E2E8F0] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="password"
                              name="old_password"
                              value={passwordForm.old_password}
                              onChange={handlePasswordChange}
                              className="w-full bg-transparent border-none outline-none text-[#334155]"
                            />
                        <img src={eye} alt="eye" />
                      </div>
                      {passwordErrors.old_password && <p className="text-red-500 text-sm">{passwordErrors.old_password}</p>}
                    </div>
                    <div className="mt-3">
                      <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                        New Password
                      </h6>
                      <div className="!border !border-[#E2E8F0] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="password"
                              name="new_password"
                              value={passwordForm.new_password}
                              onChange={handlePasswordChange}
                              placeholder="********" // Placeholder for the password input
                              className="w-full bg-transparent border-none outline-none text-[#334155]"
                            />
                        <img src={eye} alt="eye" />
                      </div>
                      {passwordErrors.new_password && <p className="text-red-500 text-sm">{passwordErrors.new_password}</p>}
                    </div>
                    <div className="mt-3">
                      <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                        Confirm New Password
                      </h6>
                      <div className="!border !border-[#E2E8F0] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="password"
                              name="confirm_new_password"
                              value={passwordForm.confirm_new_password}
                              onChange={handlePasswordChange}
                              placeholder="********" // Placeholder for the password input
                              className="w-full bg-transparent border-none outline-none text-[#334155]"
                            />
                        <img src={eye} alt="eye" />
                      </div>
                      {passwordErrors.confirm_new_password && <p className="text-red-500 text-sm">{passwordErrors.confirm_new_password}</p>}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        className="bg-[#FFD700] border border-[#FFD700] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={(e) => {
                          handlePasswordSubmit(e);
                        }}
                      >
                        Update Password
                      </button>
                      <button
                        type="button"
                        className="bg-[#FFFFFF] border border-[#94A3B8] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={changeToViewPass}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                    Password
                  </h6>
                  <div className="!border !border-[#E2E8F0] bg-[#F8FAFC] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                    <p className="m-0">****************</p>
                    <div className="flex items-center justify-center gap-1">
                      <img src={eye} alt="eye" />
                    </div>
                  </div>
                  <h6
                    className="m-0 text-[#64748B] text-[0.8rem] mt-1 text-right w-[98%] cursor-pointer hidden md:block"
                    onClick={() => {
                      changeToEditPass();
                    }}
                  >
                    Change Password
                  </h6>
                </>
              )}
            </div>
            <div className="col-span-4">
              {phoneDetails ? (
                <form>
                  <div className="block">
                    <div>
                      <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                        Phone Number
                      </h6>
                      <div className="!border !border-[#E2E8F0]  rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="text"
                              name="mobile_number"
                              value={mobileForm.mobile_number}
                              onChange={handleMobileChange}
                              placeholder="Enter Phone No."
                              className="w-full text-[0.9rem] bg-transparent outline-none"
                            />
                            {mobileErrors && <p className="text-red-500 text-sm mt-1">{mobileErrors}</p>}
                      </div>
                    </div>
                    {otp_id && (
                      <div className="mt-3">
                        <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                          OTP
                        </h6>
                        <div className="!border !border-[#E2E8F0]  rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                            <InputField
                              type="number"
                              name="otp"
                              value={mobileChangeOtpForm.otp}
                              onChange={handleMobileOtpChange}
                              placeholder="Enter OTP."
                              className="w-full text-[0.9rem] bg-transparent outline-none"
                            />
                            {mobileOtpErrors && <p className="text-red-500 text-sm mt-1">{mobileOtpErrors}</p>}
                        </div>
                      </div>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        className="bg-[#FFD700] border border-[#FFD700] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={(e)=>{
                          if(otp_id){
                            handleMobileChangeOtpSubmit(e)
                          }else{
                            handleMobileSubmit(e)
                          }
                        }}
                      >
                        Update Phone
                      </button>
                      <button
                        type="button"
                        className="bg-[#FFFFFF] border border-[#94A3B8] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={changeToViewPhone}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                    Phone Number
                  </h6>
                  <div className="!border !border-[#E2E8F0] bg-[#F8FAFC] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between h-[2rem]">
                    <p className="m-0 text-[0.9rem]">
                      {getProfileData?.data?.mobile_number}
                    </p>
                    <p
                      className="m-0 text-[0.7rem] text-[#111827] cursor-pointer hidden md:block"
                      onClick={changeToEditPhone}
                    >
                      EDIT
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="col-span-4">
              {emailDetails ? (
                <form>
                  <div className="block">
                    <div>
                      <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                        Email Address
                      </h6>
                      <div className="!border !border-[#E2E8F0]  rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="text"
                              name="email"
                              placeholder="Enter Email."
                              value={emailForm.email}
                              onChange={handleEmailChange}
                              className="w-full text-[0.9rem] bg-transparent outline-none"
                            />
                          {emailErrors && <p className="text-red-500 text-sm mt-1">{emailErrors}</p>}
                      </div>
                    </div>
                    {otpSentEmail && (
                      <div className="mt-3">
                        <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                          OTP
                        </h6>
                        <div className="!border !border-[#E2E8F0]  rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                           <InputField
                              type="text"
                              name="otp"
                              placeholder="Enter OTP."
                              value={emailChangeOtpForm.otp}
                              onChange={handleEmailOtpChange}
                              className="w-full text-[0.9rem] bg-transparent outline-none"
                            />
                            {emailOtpErrors && <p className="text-red-500 text-sm mt-1">{emailOtpErrors}</p>}
                        </div>
                      </div>
                    )}
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        className="bg-[#FFD700] cursor-pointer border border-[#FFD700] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={(e)=>{
                          if(otpSentEmail){
                            handleEmailChangeOtpSubmit(e)
                          }else{
                            handleEmailSubmit(e)
                          }
                        }}
                      >
                        Update Email
                      </button>
                      <button
                        type="button"
                        className="bg-[#FFFFFF] cursor-pointer border border-[#94A3B8] text-[#334155] rounded-md px-2.5 py-1.5 w-[48%] text-[0.9rem]"
                        onClick={changeToViewEmail}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  <h6 className="m-0 text-[#64748B] text-[0.8rem] mb-1">
                    Email Address
                  </h6>
                  <div className="!border !border-[#E2E8F0] bg-[#F8FAFC] rounded-sm py-1 px-1.5 w-[98%] text-[#334155] flex items-center justify-between">
                    <p className="m-0 text-[0.9rem]">
                      {getProfileData?.data?.email}
                    </p>
                    <p
                      className="m-0 text-[0.7rem] text-[#111827] cursor-pointer hidden md:block"
                      onClick={changeToEditEmail}
                    >
                      EDIT
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          </div>
        </div>
        <div className="flex justify-center items-center col-span-12 mt-1">
          <p className="m-0 cursor-pointer" onClick={()=>setLogOutClicked(true)}>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default VisiterProfile;
