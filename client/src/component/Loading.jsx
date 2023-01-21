import React from "react";

function Loading() {
  return (
    <div
      class="spinner-border position-absolute top-50 start-50  "
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loading;
