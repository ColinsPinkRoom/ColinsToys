import React, { useEffect, useState } from "react";

import "../style/CloudImage.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dqduer2pc",
  },
});

function CloudImage({ link, alt, nameOfClass, widths, heights, transform }) {
  const [isLoaded, setIsLoaded] = useState(false);

  let img = cld.image(link).delivery(format("auto")).delivery(quality("auto"));

  // Apply custom transformations if provided
  if (typeof transform === "function") {
    img = transform(img);
  }

  return (
    <div className="cloud-container" style={{ width: widths, height: heights }}>
      {!isLoaded && <div className="spinner" />}
      <AdvancedImage
        width={widths}
        alt={alt}
        className={`${nameOfClass} ${isLoaded ? "fade-in" : "hidden"}`}
        loading="lazy"
        cldImg={img}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default CloudImage;
