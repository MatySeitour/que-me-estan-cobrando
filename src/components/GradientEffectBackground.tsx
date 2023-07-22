export const GradientEffectBackground = (): JSX.Element => {
  return (
    <div className="absolute left-0 top-0 z-0 h-96 w-full">
      <div className="relative flex h-full w-full place-items-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:left-[50%] after:top-0 after:-z-20 after:h-32 after:w-[34rem] after:-translate-x-1/2 after:bg-gradient-conic after:from-[#2D5FFF]/20 after:via-[#39f2aea5]/20 after:blur-2xl after:content-['']" />
    </div>
  );
};
