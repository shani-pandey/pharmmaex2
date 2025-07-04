import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+9oQjw7E/g1zc1U+AMvyTG2xXr5sj" crossorigin="anonymous"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
