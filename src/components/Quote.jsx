//done_Resp
import IMG from "../assets/quote3.jpg";
const Quote = () => {
  return (
    <div className="flex flex-col gap-4 px-8 h-screen w-full bg-slate-300 justify-center items-center bg-[url(../assets/quote3.jpg)] bg-cover bg-center">
      <div className="flex flex-col gap-2">
        <img src="IMG" alt="" />
        <p className="text-3xl font-semibold max-w-lg">
          The customer Servicces i receieved is exceptional. The suport Team
          went Above and beyond to address my concern
        </p>
        <h3 className="text-gray-900 font-bold">Anonymous Willifind</h3>
        <span className="text-gray-600 text-sm">CEO, Anonymous</span>
      </div>
    </div>
  );
};

export default Quote;
