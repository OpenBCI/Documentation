import React, { useEffect } from "react";
import Footer from "@theme-original/Footer";

export default function FooterWrapper(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=3292009a-b672-4683-8691-2bf2475a3398";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Footer {...props} />
    </>
  );
}
