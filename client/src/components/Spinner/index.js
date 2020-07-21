import React from 'react'
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="rgb(0, 120,212)" height="100" width="100" />
    </div>
  )
}
