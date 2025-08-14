import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import EventCard from "./EventCard";
import { useState } from "react";
import RegistrationModal from "./RegistrationModel";
import type { Id } from "../../convex/_generated/dataModel";

const EventsPage = () => {
  const events = useQuery(api.events.getPublishedEvents);
  const [selectedEventId, setSelectedEventId] = useState<Id<"events"> | null>(null);

  // Loader while fetching
  if (events === undefined) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <div className="relative">
          <h1></h1>
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-blue-100 rounded-full animate-spin border-t-blue-600"></div>
          {/* Inner ring with slower spin */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-300 animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-blue-700">
          Loading Events
        </h2>
        <p className="text-blue-500 mt-1">
          Please wait while we fetch upcoming events...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">
          Upcoming Events
        </h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No upcoming events found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onRegister={() =>
                  setSelectedEventId(event._id as Id<"events">)
                }
              />
            ))}
          </div>
        )}
      </div>

      {selectedEventId && (
        <RegistrationModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}
    </div>
  );
};

export default EventsPage;
