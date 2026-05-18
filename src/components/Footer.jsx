import { useEffect, useState } from "react";

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    browser: "",
    platform: "",
  });

  useEffect(() => {
    const info = {
      browser: navigator.userAgent,
      platform: navigator.platform,
    };

    localStorage.setItem(
      "systemInfo",
      JSON.stringify(info)
    );

    setSystemInfo(info);
  }, []);

  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      <p>
        <strong>Browser:</strong>{" "}
        {systemInfo.browser}
      </p>

      <p>
        <strong>Platform:</strong>{" "}
        {systemInfo.platform}
      </p>
    </footer>
  );
}

export default Footer;