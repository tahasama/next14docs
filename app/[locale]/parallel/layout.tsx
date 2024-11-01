export default function Layout({
  children,
  team,
  home,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      <section className="grid grid-cols-2 gap-5 m-6">
        {team}
        {home}
      </section>
    </>
  );
}
