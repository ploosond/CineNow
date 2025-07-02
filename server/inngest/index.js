import { Inngest } from "inngest";
import User from "../api/models/user.model.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

const syncUser = inngest.createFunction(
  { id: "sync-user-from-clerk" }, // ←The 'id' is an arbitrary string used to identify the function in the dashboard
  { event: "clerk/user.created" }, // ← This is the function's triggering event
  async ({ event }) => {
    const user = event.data; // The event payload's data will be the Clerk User json object
    const { id, first_name, last_name, email_addresses, image_url } = user;
    const createUser = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      image: image_url,
    };

    await User.create(createUser);
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser];
