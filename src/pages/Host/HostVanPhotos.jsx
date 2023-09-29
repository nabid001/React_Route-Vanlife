import { useOutletContext } from "react-router-dom";
const HostVanPhotos = () => {
  const { vans } = useOutletContext();

  return (
    <img src={vans[0].imageUrl} alt="car-img" style={{ width: "100px" }} />
  );
};

export default HostVanPhotos;
