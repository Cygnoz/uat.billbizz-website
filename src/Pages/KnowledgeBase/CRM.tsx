import ChevronRight from "../../assets/icons/ChevronRight";
import LandingComponent from "./LandingComponent";
import DotIcon from "../../assets/icons/DotIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import Footer from "../../components/Footer";
import noImage from '../../assets/images/noImage.png'
type Props = {};

const CRM = ({}: Props) => {
  const [data, setData] = useState<any>([]);
  const { request: getData } = useApi("get", 3001);
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetData = async () => {
    try {
      setLoading(true);
      const url = `${endpoints.GET_SUBCATEGORY}?categoryName=${id}&project=BillBizz`;
      const { response, error } = await getData(url);
      console.log('url',url);
      console.log('res',response);
      console.log('err',error);
      
      if (!error && response) {
        console.log(response.data);      
        setData(response.data.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
    finally {
      setLoading(false); 
    }
  };

  console.log(data[0]?.categoryName?.categoryName,"wertyu");

  useEffect(() => {
    handleGetData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bg-[#f6f6f6]">
      <LandingComponent data={data} setData={setData} />

      <div className="p-14">
        <p className="text-xl font-bold text-[#303F58] flex items-center ">
          <span
            className="text-[#820000]  cursor-pointer "
            onClick={() => navigate("/knowledge-base")}
          >
            Knowledge Base
          </span>{" "}
          <ChevronRight color="#4B5C79" /> {data[0]?.categoryName?.categoryName}
        </p>
      {data.length>0 ?  
      loading?<p>Loading</p>:
      <div className="grid grid-cols-2 gap-4 my-4">
          {
            data.map((item: any, index:number) => (
              <div className="flex bg-white p-2 gap-5 rounded-2xl" key={index}>
                <img src={item.image || noImage} loading="lazy" alt="" className="rounded-2xl h-24 w-44" />
                <div className="space-y-2">
                  <p className="text-base font-bold">{item?.subCategoryName}</p>
                  <div className="flex gap-5">
                  
                    <div className="flex items-center gap-2">
                      <DotIcon color="#9EA9BB" size={10} />
                      <p className="text-[#4B5C79]">{item.articleCount}{" "}Article</p>
                    </div>
                  </div>
                  <button
                    className="text-xs text-[#565148] border border-[#565148] flex items-center justify-center rounded-lg p-1"
                    onClick={() =>
                      navigate(`/knowledge-base/${item?.categoryName?.categoryName}/${item._id}`)
                    }
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}{" "}
        </div>:<div className="flex items-center justify-center text-rose-400 w-full my-10">No Sub Categories Available !</div>}
      </div>
      <Footer/>

    </div>
  );
};

export default CRM;
