import { useEffect } from "react";
import { pusherClient } from "../services/pusher"

export const usePusherChannel = (channelName, eventName, callback) => {
    useEffect(() => {
        if (!channelName || !eventName) return;

        const channel = pusherClient.subscribe(channelName);

        channel.bind(eventName, (data) => {
            if (callback) {
                callback(data);
            }
        });

        return () => {
            channel.unbind(eventName);
            pusherClient.unsubscribe(channelName);
        };
    }, [channelName, eventName, callback]);
};