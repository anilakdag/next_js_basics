import MeetupList from "@/components/meetups/MeetupList";
import React from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.bolu.bel.tr/wp-content/uploads/2021/03/Is-Merkezi-2.jpg",
    address: "Bolu Merkez",
    description: "First meetup",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
