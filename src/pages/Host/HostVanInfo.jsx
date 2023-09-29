import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vans } = useOutletContext();
  console.log(vans[0].price);
  return (
    <section>
      <h4>Name: {vans[0].name}</h4>
      <h4>Category: {vans[0].type}</h4>
      <h4>Description: {vans[0].description}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
};

export default HostVanInfo;
