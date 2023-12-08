import "../../../theme/output.css";
export function BlogItem(props) {
  const {
    item: { title, routePath },
  } = props;
  return (
    <div className="w-100 h-100 flex justify-center items-center  group duration-500 -translate-y-10 scale-100 hover:origin-top-left hover:scale-120 -rotate-12 hover:-rotate-0 hover:translate-x-10  hover:translate-y-1">
      <div className="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
        <a href={routePath} target="_blank" className="text-xl font-bold">
          {title}{" "}
        </a>
        <span className="text-amber-300 font-thin">Frontend Developer</span>
      </div>
    </div>
  );
}
