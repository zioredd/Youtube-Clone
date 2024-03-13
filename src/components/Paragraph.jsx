import React, { useState } from "react";

const Paragraph = ({ text, limit }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p className="whitespace-pre-line">
        {showMore ? text : text.slice(0, limit)}
        {text.length > limit && !showMore && (
          <span>
            ...{" "}
            <button
              className="text-[#939393] hover:text-blue-700"
              onClick={toggleShowMore}
            >
              Read more
            </button>
          </span>
        )}
        {text.length > limit && showMore && (
          <span>
            {" "}
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={toggleShowMore}
            >
              Read less
            </button>
          </span>
        )}
      </p>
    </div>
  );
};

export default Paragraph;
