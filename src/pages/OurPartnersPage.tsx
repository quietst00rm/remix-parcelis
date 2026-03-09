import React from "react";
import { Helmet } from "react-helmet-async";
import PartnerDirectory from "@/components/partners/PartnerDirectory";

const OurPartnersPage: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Our Partners | Parcelis</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Explore the Parcelis partner ecosystem — trusted agencies and solution providers that enhance your shipping protection."
        />
        <link rel="canonical" href="https://parcelis.com/our-partners" />
      </Helmet>
      <PartnerDirectory />
    </>
  );
};

export default OurPartnersPage;
