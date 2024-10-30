export default function blogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>Nav Layout</nav>
      {children}
    </section>
  );
}
