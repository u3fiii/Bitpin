// src/components/Advertisements.tsx

import React, { useEffect, useState } from "react";

// Define the types for the advertisement and API response
interface Advertisement {
  id: number;
  title: string;
  body: string;
  button_name: string;
  can_be_closed: boolean;
  enable: boolean;
  end: string;
  for_android: boolean;
  for_web: boolean;
  for_web_app: boolean;
  frequency: string;
  icon: string | null;
  locations: { location: string }[];
  mobile_image: string;
  priority: number;
  start: string;
  type: string;
  url: string;
  video: string | null;
  video_cover: string | null;
  video_url: string;
  web_image: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Advertisement[];
}

const Advertisements: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        // Fetch data using the environment variable
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ApiResponse = await response.json();
        setAdvertisements(data.results);
      } catch (error) {
        // Handle error appropriately
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    fetchAdvertisements();
  }, []);

  if (error) {
    return <div>Error fetching advertisements: {error}</div>;
  }

  return (
    <div>
      <h1>Advertisements</h1>
      {advertisements.length > 0 ? (
        <ul>
          {advertisements.map((ad) => (
            <li key={ad.id}>
              <h2>{ad.title}</h2>
              <p>{ad.body}</p>
              <img src={ad.mobile_image} alt={ad.title} />
              <a href={ad.url}>{ad.button_name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No advertisements available.</p>
      )}
    </div>
  );
};

export default Advertisements;
