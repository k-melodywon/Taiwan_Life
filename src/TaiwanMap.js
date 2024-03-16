import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TaiwanMap = () => {
  const mapStyle = {
    width: '100%',
    height: '600px',
  };

  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 대만 지도의 GeoJSON 파일의 URL을 설정
      const response = await fetch('URL_TO_TAIWAN_GEOJSON_FILE');
      const data = await response.json();
      setGeoJsonData(data);
    };

    fetchData();
  }, []);

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        // 마우스 오버 이벤트 처리
        // 원하는 작업을 수행하세요 (예: 스타일 변경 또는 팝업 표시)
      },
      mouseout: (e) => {
        // 마우스 아웃 이벤트 처리
        // 원하는 작업을 수행하세요 (예: 스타일 변경 또는 팝업 숨기기)
      },
    });
  };

  return (
    <MapContainer center={[23.69781, 120.96052]} zoom={7} style={mapStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoJsonData && <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />}
    </MapContainer>
  );
};

export default TaiwanMap;
