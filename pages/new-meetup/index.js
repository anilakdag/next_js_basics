import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

export default function NewMeetupPage() {
  function addMeetupHandler() {

  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
