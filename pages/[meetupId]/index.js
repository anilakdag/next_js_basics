import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.bolu.bel.tr/wp-content/uploads/2021/03/Is-Merkezi-2.jpg"
      title="First meetup"
      description="A first meetup description"
      address="Some address 14"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://www.bolu.bel.tr/wp-content/uploads/2021/03/Is-Merkezi-2.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some address 14",
        description: "A first meetup description",
      },
    },
  };
}
