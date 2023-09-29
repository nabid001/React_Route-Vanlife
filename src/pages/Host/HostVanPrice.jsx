import { useOutletContext } from "react-router-dom";
const HostVanPrice = () => {
  const { vans } = useOutletContext();

  return <h3>${vans[0].price}/day</h3>;
};

export default HostVanPrice;
