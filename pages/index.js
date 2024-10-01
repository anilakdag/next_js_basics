import { MongoClient } from "mongodb";
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

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://akdaganil:FJchKcif74DbNYkL@cluster0.mmrotjo.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
