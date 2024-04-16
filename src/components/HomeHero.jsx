export default function HomeHero() {
    return (
        <section className="flex flex-col justify-center items-center bg-[url('./img/instruments.jpg')] bg-cover bg-no-repeat py-20">
        <h1 className="text-5xl font-bold pt-4 pb-14">Music 1 Hub</h1>

        <div className="bg-slate-50/50 h-24 text-center">
          <h3 className="subtitle-text">Master Music Theory</h3>
          <h3 className="subtitle-text">Develop Your Aural Skills</h3>
          <h3 className="subtitle-text">Blitz the HSC</h3>
        </div>
      </section>
    )
}