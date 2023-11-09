import React from "react";
import styles from "../../../css/admin/1상품관리/productNoticeBanner.module.css";

const ProductNoticeBanner = () => {
  const openPopup = () => {
    // 팝업의 너비와 높이
    const popupWidth = 400;
    const popupHeight = 400;

    // 화면의 너비와 높이
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 팝업을 화면 중앙에 위치시키기 위한 x, y 좌표 계산
    const left = screenWidth / 2 - popupWidth / 2;
    const top = screenHeight / 2 - popupHeight / 2;

    // 팝업 열기
    window.open(
      "/admin/productPopup",
      "newWindow",
      `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
    );
  };
  return (
    <div className={styles.descriptionContainer}>
      <button id="submitBtn" className={styles.submitBtnDesign}>
        상품 등록
      </button>
      <div
        id="popupClickProductUpload"
        onClick={openPopup}
        className={styles.popupClickProductUpload}
      >
        <svg
          className={styles.alertImg}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </svg>
        <span>상품 등록시</span>
        <span>유의사항</span>
      </div>
    </div>
  );
};

export default ProductNoticeBanner;
