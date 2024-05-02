export default function WelcomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <p>I am welcome layout</p>
      {children}
    </main>
  );
}
