import Pusher from "pusher-js";

const PUSHER_KEY = import.meta.env.VITE_PUSHER_APP_KEY || "YOUR_PUSHER_APP_KEY";
const PUSHER_CLUSTER = import.meta.env.VITE_PUSHER_APP_CLUSTER || "ap1";

export const pusherClient = new Pusher(PUSHER_KEY, {
    cluster: PUSHER_CLUSTER,
    forceTLS: true,
});