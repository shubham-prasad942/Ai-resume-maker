import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

// CTA component
const Cta = ({ title, description }) => {
  const navigate = useNavigate();
  const form = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      navigate("/form");
    } else {
      alert("User is not login");
      navigate("/login");
    }
  };
  return (
    <div className="space-y-3.5 px-3 py-10 bg-[#f2defb] rounded mt-2 ">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading text-center">
        {title}
      </h1>
      <p className="text-base sm:text-xl text-[#484744] font-normal leading text-center">
        {description}
      </p>
      <div className="flex items-center justify-center">
        <Button text="Boost Your Career Now" onClick={form} />
      </div>
    </div>
  );
};

export default Cta;
