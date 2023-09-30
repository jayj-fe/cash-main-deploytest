//@ts-nocheck
import React, { useEffect, useState } from "react";
import Image from "next/image";
const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  objectFit = "contain",
  fallbackSrc = "/asset/icons/main_logo.png",
}) => {
  const loaderProp = ({ src }) => {
    return src;
  };
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
  }, [src]);
  return (
    <Image
      onError={setError}
      loader={loaderProp}
      src={error ? fallbackSrc : src}
      width={width}
      height={height}
      objectFit={objectFit}
      alt={alt}
    />
  );
};

export default ImageWithFallback;
