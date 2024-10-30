export default function blogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="text-center">
        <a href="">Nav Layout</a>
      </nav>
      {children}
    </section>
  );
}
