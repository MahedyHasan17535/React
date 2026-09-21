import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base-content/70 md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          
            href="#technologies"
            className="brand-gradient-bg btn border-none px-6 text-white"
          <a>
            Explore Technologies
          </a>
          <button className="btn btn-outline px-6">Learn More</button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={bannerImg}
          alt="Illustration of a development stack"
          className="mx-auto w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default Banner;