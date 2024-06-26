import React, { useState } from "react";

const Tech = () => {
  // Array of channel names
  const channels = ["Technology", "Resources", "Frontend", "Backend", "DSA", "Competitive Programming","Mini Projects","Open Source"];

  
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);

  // Function to handle channel selection
  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <div className=" bg-black mx-auto ">
      <div className="h-screen text-white pt-1">
       
        {channels.map((channel, index) => (
          <div
            key={index}
            className={`py-2 px-4  m-4 cursor-pointer hover:bg-gray-700 ${
              channel === selectedChannel ? "bg-gray-700" : ""
            }`}
            onClick={() => handleChannelSelect(channel)}
          >
            {channel}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Tech;
