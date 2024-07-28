import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 25.4921306,
  lng: 81.8637441,
};

const HowToReach = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQqvOc9SVCs-mIPxUPgxX9DKHgEO2__U0&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "MNNIT Allahabad",
      });
    }
  }, [isScriptLoaded]);

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        How to reach MNNIT Allahabad
      </h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">By Road</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
          MNNIT Allahabad is well-connected by road. You can take a bus or drive
          to Allahabad (now Prayagraj) from major cities in Uttar Pradesh and
          neighboring states. The campus is situated approximately 10 kilometers
          from the city center. Taxis, auto-rickshaws, and local buses are
          available from various parts of the city to reach the campus.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">By Train</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
          Allahabad Junction (now Prayagraj Junction) is the nearest major
          railway station, located about 8 kilometers from MNNIT. It is a
          significant hub on the Indian Railways network, with frequent trains
          from Delhi, Kolkata, Mumbai, Chennai, and other major cities. From the
          station, you can hire a taxi or an auto-rickshaw, or take a city bus
          to reach the campus.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">By Air</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
          The nearest airport is Prayagraj Airport (Bamrauli Airport), located
          approximately 20 kilometers from the MNNIT campus. This airport has
          limited flights but connects to major cities like Lucknow, Varanasi,
          Delhi, and Mumbai. From the airport, you can hire a taxi to reach
          MNNIT.
        </p>
      </div>
      <div className="flex justify-center">
        {isScriptLoaded ? (
          <div id="map" style={containerStyle}></div>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default HowToReach;
