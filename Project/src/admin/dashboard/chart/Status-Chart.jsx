
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useSelector } from 'react-redux';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ProductStatus = () => {

  const {order_status}=  useSelector((state)=>state.dashboard)

  const data = {
    labels: order_status?.map((e)=>{
        return e.order_status
    }), 
    datasets: [
      {
        label: 'order_status',
        data: order_status?.map((e)=>{
            return e.count
        }),
        backgroundColor: [
            'rgb(255, 159, 64)',   
            'rgb(34, 197, 94)',     
            'rgb(37, 99, 235)',   
            'rgb(239, 68, 68)',    
            'rgb(156, 163, 175)',  
            'rgb(126, 34, 206)',   
            'rgb(75, 85, 99)',    
          ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  return (
    <div className=" ">
      <div className="w-96 h-96 p-3">
        <Doughnut data={data} options={config} />
      </div>
    </div>
  );
};

export default ProductStatus;
