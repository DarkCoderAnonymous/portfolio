export default function Head() {
  return (
    <>
      {/* Primary favicon (SVG) - modern browsers */}
      <link rel="icon" href="/favicon.svg" />
      {/* Fallbacks: PNG and the original JPG */}
      <link rel="icon" type="image/png" href="/images/Muhammad Afzaal.jpg" />
      <link rel="apple-touch-icon" href="/images/Muhammad Afzaal.jpg" />
      {/* Prevent Vercel default icon in some previews by being explicit */}
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
