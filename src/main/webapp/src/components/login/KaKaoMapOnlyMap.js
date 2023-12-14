import React, { useEffect, useState } from "react";
const { kakao } = window;

const KakaoMap = ({ matchingAddress, onAddressSelected }) => {
  const [address, setAddress] = useState(matchingAddress);
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  const onAddressClick = (item) => {
    const selectedAddress = item.road_address_name || item.address_name;
    console.log(address);
    console.log(infowindow);
    setAddress(selectedAddress);
    onAddressSelected(selectedAddress);
    console.log(selectedAddress);
  };

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    const container = document.getElementById("kakaoMap");
    const options = {
      center: new kakao.maps.LatLng(37.498776, 127.029105),
      level: 3,
    };
    //지도 객체 생성
    const map = new kakao.maps.Map(container, options);

    //주소-좌표 변환 객체 생성
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    if (matchingAddress !== "") {
      geocoder.addressSearch(matchingAddress, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">만남 장소</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    }
  }, [matchingAddress]);

  return (
    <div
      id="kakaoMap"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default KakaoMap;
