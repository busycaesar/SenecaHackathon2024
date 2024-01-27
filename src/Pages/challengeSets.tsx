import React from "react";
import ChallengeSet from "../Components/ChallengeSet/challengeSet";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";

export default function ChallengeSets() {
  return (
    <>
      <h1 className="page-title">
        <strong>Know Your Challenge Sets</strong>
      </h1>
      <div className="center">
        <p className="red-background md:p-10 text-center curved-border">
          The challenge statement will be announced before the Qualifier round. <br></br> Meanwhile, we invite you to visit our social media channels for more updates.
        </p>
        
      </div>
      <div className="center">
      <div className="bg-my-red p-2 flex mx:auto curved-border"><SocialMediaIcons/></div></div>
      
      {/*Delete this below div which has visibility hidden. It is added to the code to keep the footer stick to the bottom of the website.*/}
      <div style={{ visibility: "hidden" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga modi
          similique deserunt velit neque doloremque consequuntur, tempore unde
          praesentium blanditiis voluptatum, at accusamus aliquam facere. Ut
          vitae sunt accusamus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem officiis explicabo cupiditate, tempore modi hic
          culpa odio sunt magnam nulla sit dignissimos consequuntur, quod odit
          quae? Maxime quae natus quam! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam est praesentium dolorem veritatis odit maxime
          quisquam rem hic, illum tenetur minus quia, expedita perspiciatis
          mollitia, consequatur ut impedit id! Assumenda?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga modi
          similique deserunt velit neque doloremque consequuntur, tempore unde
          praesentium blanditiis voluptatum, at accusamus aliquam facere. Ut
          vitae sunt accusamus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem officiis explicabo cupiditate, tempore modi hic
          culpa odio sunt magnam nulla sit dignissimos consequuntur, quod odit
          quae? Maxime quae natus quam! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam est praesentium dolorem veritatis odit maxime
          quisquam rem hic, illum tenetur minus quia, expedita perspiciatis
          mollitia, consequatur ut impedit id! Assumenda? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Saepe, sint. Assumenda perferendis
          fugit quae similique dolores sequi, blanditiis aperiam quo reiciendis
          dolore sed iure enim. Recusandae dignissimos error nostrum deserunt!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut
          accusamus incidunt modi provident, voluptatem, reiciendis maiores
          praesentium distinctio architecto eum quasi ullam nobis cumque id
          expedita impedit doloribus quisquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga modi
          similique deserunt velit neque doloremque consequuntur, tempore unde
          praesentium blanditiis voluptatum, at accusamus aliquam facere. Ut
          vitae sunt accusamus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem officiis explicabo cupiditate, tempore modi hic
          culpa odio sunt magnam nulla sit dignissimos consequuntur, quod odit
          quae? Maxime quae natus quam! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam est praesentium dolorem veritatis odit maxime
          quisquam rem hic, illum tenetur minus quia, expedita perspiciatis
          mollitia, consequatur ut impedit id! Assumenda? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Saepe, sint. Assumenda perferendis
          fugit quae similique dolores sequi, blanditiis aperiam quo reiciendis
          dolore sed iure enim. Recusandae dignissimos error nostrum deserunt!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut
          accusamus incidunt modi provident, voluptatem, reiciendis maiores
          praesentium distinctio architecto eum quasi ullam nobis cumque id
          expedita impedit doloribus quisquam!
        </p>
      </div>
      {/* <ChallengeSet
        title="Lorem ipsum dolor sit amet consectetur"
        subtitle="Lorem ipsum dolor sit amet consectetur"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus, fuga laudantium, vel laborum repellendus nemo dicta ullam ut voluptatibus consectetur. Quasi, dolorem. Qui vero porro architecto quaerat ipsam neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem incidunt? Tenetur iure velit maxime autem sunt, veritatis quam sequi. Tempore incidunt earum vero minus quisquam voluptates cupiditate ducimus provident?"
      /> */}
    </>
  );
}
