import React from "react";
import Section from "./Section";
import { Helmet } from "react-helmet";

function Gallery() {
  return (
    <>
      <Section />;
      <Helmet>
        <script
          isHydrating={true}
          type="text/javascript"
          src="../js/nicepage.js"
        />
        <script
          isHydrating={true}
          type="text/javascript"
          src="../js/jquery.js"
        />
      </Helmet>
    </>
  );
}

export default Gallery;