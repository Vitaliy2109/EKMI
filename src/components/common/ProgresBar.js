import { useState, useEffect } from "react";
export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollY / totalHeight) * 100;
      setProgress(progress);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
}
