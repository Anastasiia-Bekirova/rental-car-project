import { useParams } from 'react-router-dom';


const CarPage = () => {
  const { id } = useParams(); 
  return (<div>
    <h1>Car Page { id }</h1>
  </div>);
};

export default CarPage;