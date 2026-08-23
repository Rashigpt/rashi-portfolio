export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-32 text-center">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Frontend Developer
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Rashi
        </h1>
        <p className="max-w-lg text-lg leading-8 text-muted-foreground">
          I build clean, fast, user-focused web experiences.
        </p>
      </main>
    </div>
  );
}
