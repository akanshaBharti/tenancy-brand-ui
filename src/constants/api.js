export const BASE_API_URL =
  process.env.REACT_APP_API_URL || "https://stage-api.rentra.in";

// LOGIN-SIGNUP-LOGOUT
export const POST_SIGNUP_API_URL = `${BASE_API_URL}/accounts/api/registration/`;
export const POST_SIGNUP_VERIFY_OTP_API_URL = `${BASE_API_URL}/accounts/api/verify-otp/`;
export const POST_LOGIN_API_URL = `${BASE_API_URL}/accounts/api/login/`;
export const POST_LOGOUT_URL = `${BASE_API_URL}/accounts/api/logout/`;

// TENANT
export const GET_TENANT_MAINTENANCE_REQUEST_URL = `${BASE_API_URL}/owner/tenant-maintenance-requests/`;
export const POST_TENANT_MAINTENANCE_REQUEST_URL = `${BASE_API_URL}/owner/maintenance-requests-create/`;
export const GET_TENANT_PROFILE_URL = `${BASE_API_URL}/tenant/tenant-profile/`;
export const POST_TENANT_PROFILE_CONTACT_URL = `${BASE_API_URL}/tenant/contact-information-create/`;
export const PATCH_TENANT_PROFILE_CONTACT_URL = `${BASE_API_URL}/tenant/contact-information-update/`;
export const POST_TENANT_PROFILE_RENTAL_URL = `${BASE_API_URL}/tenant/rental-address/`;
export const PATCH_TENANT_PROFILE_RENTAL_URL = `${BASE_API_URL}/tenant/rental-address-update/`;
export const POST_TENANT_PROFILE_UPLOAD_PAN_URL = `${BASE_API_URL}/tenant/upload-pan-card/`;
export const POST_TENANT_PROFILE_UPLOAD_AADHAR_URL = `${BASE_API_URL}/tenant/upload-aadhar-card/`;
export const PATCH_TENANT_PROFILE_PICTURE_URL = `${BASE_API_URL}/tenant/profile-picture-update/`;
export const DELETE_TENANT_PROFILE_PICTURE_URL = `${BASE_API_URL}/tenant/profile-picture-delete/`;
export const GET_TENANT_RENT_HISTORY_API_URL = `${BASE_API_URL}/tenant/tenant-rent-payments/`;
export const POST_CALLBACK_REQUEST_URL = `${BASE_API_URL}/accounts/api/callback-request/`;


export const GET_PROPERTIES_API_URL = `${BASE_API_URL}/accounts/api/user-properties/`;
export const GET_IDIVIDUAL_PROPERTIES_API_URL = `${BASE_API_URL}/accounts/api/user-properties/:itemId/`;
export const GET_PROFILE_URL = `${BASE_API_URL}/accounts/api/user-profile/`;
export const PATCH_BASIC_PROFILE_URL = `${BASE_API_URL}/accounts/api/user-basic-profile/`;
export const POST_MOBILE_CHANGE_NUM_URL = `${BASE_API_URL}/accounts/api/send-mobile-change-otp/`;
export const POST_MOBILE_CHANGE_OTP_URL = `${BASE_API_URL}/accounts/api/verify-mobile-change-otp/`;
export const POST_EMAIL_CHANGE_URL = `${BASE_API_URL}/accounts/api/send-email-change-otp/`;
export const POST_EMAIL_CHANGE_OTP_URL = `${BASE_API_URL}/accounts/api/verify-email-change-otp/`;
export const PATCH_PASSWORD_CHANGE_URL = `${BASE_API_URL}/accounts/api/change-password/`;
export const PATCH_PROFILE_PIC_CHANGE_URL = `${BASE_API_URL}/tenant/profile-picture-update/`;
export const DELETE_PROFILE_PIC_CHANGE_URL = `${BASE_API_URL}/tenant/profile-picture-delete/`;
export const POST_SCHEDULE_VISIT_URL = `${BASE_API_URL}/accounts/api/schedule-visit/:itemId/`;
export const GET_SCHEDULE_VISIT_URL = `${BASE_API_URL}/accounts/api/scheduled-visits/`;
export const PATCH_SCHEDULE_VISIT_URL = `${BASE_API_URL}/accounts/api/update-schedule-visit/`;


// OWNER
export const GET_OWNER_MAINTENANCE_REQUEST_URL = `${BASE_API_URL}/owner/owner-maintenance-requests/`;
export const GET_OWNER_MANAGE_PROPERTY_URL = `${BASE_API_URL}/owner/properties/`;
export const GET_OWNER_RENT_MANAGEMENT_URL = `${BASE_API_URL}/owner/rent-management/`;
export const GET_OWNER_LEASE_MANAGEMENT_URL = `${BASE_API_URL}/owner/lease-agreements/`;
export const GET_OWNER_TENANT_MANAGEMENT_URL = `${BASE_API_URL}/owner/tenants-management/`;
export const PATCH_OWNER_UPLOAD_AGREEMENT_URL = `${BASE_API_URL}/owner/lease-agreements-upload/`;
export const POST_CREATE_PROPERTY_URL = `${BASE_API_URL}/owner/properties-create/`;
export const GET_OWNER_DASHBOARD_URL = `${BASE_API_URL}/owner/owner-dashboard/`;
export const GET_OWNER_PROFILE_URL = `${BASE_API_URL}/owner/get-profile/`;
export const PATCH_OWNER_PROFILE_URL = `${BASE_API_URL}/owner/contact-info/`;
export const GET_OWNER_PROPERTY_PREVIEW = `${BASE_API_URL}/owner/properties/:id/`;

