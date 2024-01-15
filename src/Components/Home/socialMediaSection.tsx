import React from "react";
import SocialMediaIcons from "../SocialMedia/socialMedia";

export default function SocialMediaSection() {
  return (
    <>
      <h2>
        <strong>Our Social Media</strong>
      </h2>
      <p className="w-full sm:w-10/12 lg:w-1/2">
        Follow us on our social media platforms for all the latest updates on
        the Housing 2024 Hackathon.
      </p>
      <div className="red-background curved-border">
        <SocialMediaIcons />
      </div>
    </>
  );
}
