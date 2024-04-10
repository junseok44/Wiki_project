"use client";

import React, { useEffect } from "react";

const useFontAwesome = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    link.rel = "stylesheet";
    link.integrity =
      "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.body.appendChild(link);

    return () => {
      document.body.removeChild(link);
    };
  }, []);
};

export default useFontAwesome;
