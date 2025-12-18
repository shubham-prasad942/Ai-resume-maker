import { useNavigate } from "react-router-dom";

// Button component
const Button = () => {
  const navigate = useNavigate();
  // function to navigate to the form page
  const openForm = (): void => {
    navigate("/form");
  };
  return (
    <>
      <button
        onClick={openForm}
        className="bg-primary text-white text-sm sm:text-lg rounded-xl px-3 py-1.5 font-bold cursor-pointer active:scale-95"
      >
        Start Building Free
      </button>
    </>
  );
};

export default Button;
