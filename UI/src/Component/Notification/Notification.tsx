import React, { useEffect, useState } from "react";

function Notification({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible && (
        <div
          className="relative px-4 py-3 text-green-700 bg-green-100 border border-green-400 rounded"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {message}</span>
        </div>
      )}
    </div>
  );
}

export default Notification;
