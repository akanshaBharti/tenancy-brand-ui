import React, { useEffect, useState } from "react";
import downloadIcon from "assets/image/Owners/download-cloud.svg";
import uploadIcon from "assets/image/Owners/upload.svg";
import viewIcon from "assets/image/Owners/eye.svg";
import useGetOwnerLeaseManagement from "pages/Protected/Owner/data/useGetLeaseManagement";
import {
  showErrorToast,
  showSuccessToast,
} from "components/toaster/toastHelper";
import Loader from "components/Loader/Loader";
import UploadLeaseAgreement from "./UploadLeaseAgreement";
import usePatchUploadAgreement from "pages/Protected/Owner/data/usePatchUploadAgreement";
import DownloadAgreement from "./DownloadAgreement";
import ViewAgreement from "./ViewAgreement";

const TenantLeaseManagement = () => {
  const [isUploadAgreementDialogOpen, setIsUploadAgreementDialogOpen] =
    useState(false);
  const [isDownloadAgreementDialogOpen, setIsDownloadAgreementDialogOpen] =
    useState(false);
  const [isViewAgreementDialogOpen, setIsViewAgreementDialogOpen] =
    useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [uploadAgreement, setUploadAgreement] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [data, isError, isLoading, getLeaseDetails] =
    useGetOwnerLeaseManagement();
  const [patchData, patchIsError, patchIsLoading, patchUploadAgreement] =
    usePatchUploadAgreement();

  useEffect(() => {
    getLeaseDetails();
  }, []);

  useEffect(() => {
    if (patchData) {
      showSuccessToast("Agreement Uploaded Successfully");
      setIsUploadAgreementDialogOpen(false);
      // setTimeout(() => {
      //   setIsUploadAgreementDialogOpen(false);
      // }, 500);
    }
  }, [patchData]);

  useEffect(() => {
    if (patchIsError) {
      showErrorToast("Try Again");
      // showErrorToast("try Again");
      setIsUploadAgreementDialogOpen(true);
    }
  }, [patchIsError]);

  const handleOpenAgreementDialog = (tenantId) => {
    setIsUploadAgreementDialogOpen(true);
    setTenantId(tenantId);
  };

  const handleOpenDownloadDialog = (item) => {
    setIsDownloadAgreementDialogOpen(true);
    setSelectedDocument(item);
  };

  const handleOpenViewDialog = (item) => {
    setIsViewAgreementDialogOpen(true);
    setSelectedDocument(item);
  };

  const handleClose = () => {
    setIsUploadAgreementDialogOpen(false);
    setIsDownloadAgreementDialogOpen(false);
    setIsViewAgreementDialogOpen(false);
  };

  const uploadLeaseAgreement = () => {
    const formData = new FormData();
    formData.append("tenant_id", tenantId);
    formData.append("agreement_file", uploadAgreement);
    patchUploadAgreement(formData);
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className="mb-16 bg-blue-100 min-h-screen ">
        <h4 className="font-semibold text-2xl text-darkBlue mb-6">
          Lease Agreement
        </h4>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <table className="min-w-full bg-white ">
            <thead className="bg-gray-100">
              <tr className="text-sm font-medium text-gray-600 ">
                <th className="px-4 py-2 text-left rounded-tl-lg">
                  Tenant's Name
                </th>
                <th className="px-4 py-2 text-left">Agreement</th>
                <th className="px-4 py-2 text-left">Upload</th>
                <th className="px-4 py-2 text-left rounded-tr-lg">More Info</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.total_count === 0 ? (
                <div className="px-4 py-2 text-[0.9rem] text-red-500">
                  No Agreement Details Available
                </div>
              ) : (
                data?.data?.results?.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 text-sm text-darkBlue"
                  >
                    <td className="px-4 py-2">{item.tenant_name}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <img
                          src={downloadIcon}
                          alt="Download"
                          className="w-5 h-5"
                        />
                        <button
                          onClick={() =>
                            handleOpenDownloadDialog(item.agreement_file)
                          }
                          className="text-blue-500 hover:underline"
                        >
                          Download
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <img
                          src={uploadIcon}
                          alt="Upload"
                          className="w-5 h-5"
                        />
                        <button
                          onClick={() =>
                            handleOpenAgreementDialog(item.tenant_id)
                          }
                          className="text-blue-500 hover:underline"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <img src={viewIcon} alt="View" className="w-5 h-5" />
                        <button
                          onClick={() =>
                            handleOpenViewDialog(item.agreement_file)
                          }
                          className="text-blue-500 hover:underline"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {isUploadAgreementDialogOpen && (
          <UploadLeaseAgreement
            patchIsLoading={patchIsLoading}
            uploadLeaseAgreement={uploadLeaseAgreement}
            onClose={handleClose}
            open={isUploadAgreementDialogOpen}
            uploadAgreement={uploadAgreement}
            setUploadAgreement={setUploadAgreement}
          />
        )}
        {isDownloadAgreementDialogOpen && (
          <DownloadAgreement
            selectedDocument={selectedDocument}
            onClose={handleClose}
            open={isDownloadAgreementDialogOpen}
          />
        )}

        {isViewAgreementDialogOpen && (
          <ViewAgreement
            selectedDocument={selectedDocument}
            onClose={handleClose}
            open={isViewAgreementDialogOpen}
          />
        )}
      </div>
    </>
  );
};

export default TenantLeaseManagement;
