import { Button } from '../'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[832px] overflow-hidden">
      {/* Background gradient blur effect */}
      <div
        className="absolute left-[20%] top-[40%] w-[60%] h-[50%] rounded-full opacity-80"
        style={{
          background: "radial-gradient(ellipse at center, rgba(253,0,182,0.6) 0%, rgba(255,149,220,0.4) 30%, rgba(255,255,255,0.1) 70%, transparent 100%)",
          filter: "blur(120px)"
        }}
      />

      {/* Additional glow effects */}
      <div
        className="absolute left-[25%] top-[45%] w-[50%] h-[40%] rounded-full opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,51,197,0.5) 0%, rgba(253,0,182,0.3) 50%, transparent 100%)",
          filter: "blur(80px)"
        }}
      />

      {/* Hero image */}
      <img
        src="/images/hero-main-5b069a.png"
        alt="DJ Dynameets"
        className="absolute left-1/2 top-[138px] w-[434px] h-[694px] object-cover transform -translate-x-1/2 z-10"
      />

      {/* Main title - split into two parts */}
      <div className="absolute left-[44px] top-[284px] z-20">
        <h1 className="font-lalezar text-[208px] leading-[0.9] text-white drop-shadow-2xl">
          DYNA
        </h1>
      </div>

      <div className="absolute right-[44px] top-[284px] z-20">
        <h1 className="font-lalezar text-[208px] leading-[0.9] text-white drop-shadow-2xl text-right">
          MEETS
        </h1>
      </div>

      {/* Description text */}
      <div className="absolute right-[44px] top-[675px] w-[458px] z-20">
        <p className="font-poppins text-[14px] leading-[1.6] text-right text-white/90">
          Where rhythm meets refinement, and culture becomes couture.
          <br />
          Dynameets elevates every gathering into an exclusive sonic experience.
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute right-[44px] top-[746px] z-20">
        <Button size="small">
          SIGN UP
        </Button>
      </div>
    </section>
  )
}

export default Hero
