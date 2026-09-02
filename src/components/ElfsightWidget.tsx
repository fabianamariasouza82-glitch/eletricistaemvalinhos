import { useEffect } from "react";

export default function ElfsightWidget() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-e9c0473b-c85e-42a8-b62e-e65bd89c7969"
      data-elfsight-app-lazy
    ></div>
  );
}
