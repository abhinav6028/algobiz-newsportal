import FacebookIcon from "../../assets/socialicons/facebook.svg";
import SecondIcon from "../../assets/socialicons/@.svg";
import ThirdIcon from "../../assets/socialicons/Y.svg";
import ClockIcon from "../../assets/socialicons/clock.svg";

const now = new Date();

const formatted = now.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});

const ToolInfoBar = () => {
  return (
    <div className="bg-primary h-12 text-white  px-5 md:px-10 lg:px-16 xl:px-20">
      <div className="flex items-center justify-between max-w-[992px] h-full mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30" ><img src={FacebookIcon} className="w-4 h-4" /></span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30" ><img src={SecondIcon} className="w-4 h-4" /></span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30" ><img src={ThirdIcon} className="w-3 h-3" /></span>
        </div>
        <div className="flex items-center gap-2">
          <span><img src={ClockIcon} className="w-3 h-3" /></span>
          <span>{formatted}</span>
        </div>
      </div>
    </div>
  )
}

export default ToolInfoBar