import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 479.861 479.861"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d={`M463.953,130.43V95.569c0-1.444-0.624-2.817-1.712-3.767c-1.088-0.95-2.531-1.383-3.964-1.188l-24.191,3.299V75.658
      	c0-1.551-0.719-3.014-1.947-3.96c-1.228-0.947-2.827-1.27-4.325-0.875l-187.883,49.45L52.047,70.822
      	c-1.5-0.395-3.097-0.072-4.325,0.875c-1.228,0.946-1.947,2.409-1.947,3.96v18.256l-24.191-3.299
      	c-1.431-0.194-2.876,0.238-3.964,1.188c-1.088,0.949-1.712,2.323-1.712,3.767v34.861C7.071,130.831,0,138.125,0,147.059v245.478
      	c0,9.19,7.477,16.667,16.667,16.667h223.253c0.002,0,0.003,0,0.005,0c0.002,0,0.004,0,0.006,0s0.004,0,0.006,0
      	c0.002,0,0.003,0,0.005,0h223.253c9.19,0,16.667-7.477,16.667-16.667V147.059C479.861,138.125,472.79,130.831,463.953,130.43z
      	 M453.953,101.298v268.668l-133.452,18.202l109.858-28.914c2.197-0.578,3.728-2.564,3.728-4.835V104.007L453.953,101.298z
      	 M424.086,350.564l-179.156,47.152v-268.42l179.156-47.152V350.564z M55.775,82.144l159.245,41.912v228.868c0,2.761,2.239,5,5,5
      	s5-2.239,5-5V126.688l9.911,2.609v268.42l-9.911-2.609v-12.166c0-2.761-2.239-5-5-5s-5,2.239-5,5v9.534L55.775,350.564V82.144z
      	 M25.908,101.298l19.867,2.709v250.412c0,2.271,1.531,4.257,3.728,4.835l109.858,28.914L25.908,369.966V101.298z M10,392.537
      	V147.059c0-3.419,2.589-6.242,5.908-6.62V374.33c0,2.5,1.847,4.616,4.324,4.954l146.041,19.919H16.667
      	C12.991,399.203,10,396.213,10,392.537z M469.861,392.537c0,3.676-2.991,6.667-6.667,6.667H313.588l146.041-19.919
      	c2.477-0.338,4.324-2.454,4.324-4.954V140.438c3.32,0.378,5.908,3.201,5.908,6.62V392.537z M74.091,119.126
      	c0.74-2.661,3.498-4.217,6.157-3.477l122.668,34.124c2.661,0.74,4.217,3.497,3.477,6.157c-0.615,2.212-2.625,3.661-4.814,3.661
      	c-0.444,0-0.895-0.059-1.343-0.184L77.568,125.283C74.907,124.543,73.351,121.787,74.091,119.126z M206.393,190.07
      	c-0.615,2.212-2.625,3.661-4.814,3.661c-0.444,0-0.895-0.059-1.343-0.184L77.568,159.423c-2.661-0.74-4.217-3.497-3.477-6.157
      	c0.74-2.66,3.498-4.217,6.157-3.477l122.668,34.124C205.577,184.653,207.133,187.409,206.393,190.07z M206.393,224.208
      	c-0.615,2.212-2.625,3.661-4.814,3.661c-0.444,0-0.895-0.059-1.343-0.184L77.568,193.561c-2.661-0.74-4.217-3.497-3.477-6.157
      	c0.74-2.66,3.498-4.218,6.157-3.477l122.668,34.124C205.577,218.791,207.133,221.548,206.393,224.208z M206.393,258.347
      	c-0.615,2.212-2.625,3.661-4.814,3.661c-0.444,0-0.895-0.059-1.343-0.184L77.568,227.7c-2.661-0.74-4.217-3.497-3.477-6.157
      	c0.74-2.66,3.498-4.217,6.157-3.477l122.668,34.124C205.577,252.93,207.133,255.687,206.393,258.347z M206.393,292.487
      	c-0.615,2.212-2.625,3.661-4.814,3.661c-0.444,0-0.895-0.059-1.343-0.184L77.568,261.84c-2.661-0.74-4.217-3.497-3.477-6.157
      	c0.74-2.661,3.498-4.216,6.157-3.477l122.668,34.124C205.577,287.07,207.133,289.826,206.393,292.487z M206.393,326.625
      	c-0.615,2.212-2.625,3.661-4.814,3.661c-0.444,0-0.895-0.059-1.343-0.184L77.568,295.978c-2.661-0.74-4.217-3.497-3.477-6.157
      	c0.74-2.66,3.498-4.217,6.157-3.477l122.668,34.124C205.577,321.208,207.133,323.965,206.393,326.625z M268.357,155.93
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.739,5.417,0.816,6.157,3.477c0.74,2.661-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,159.592,268.973,158.143,268.357,155.93z M268.357,190.07
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.738,5.417,0.816,6.157,3.477c0.74,2.66-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,193.731,268.973,192.282,268.357,190.07z M268.357,224.208
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.739,5.417,0.816,6.157,3.477c0.74,2.66-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,227.87,268.973,226.421,268.357,224.208z M268.357,258.347
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.738,5.417,0.816,6.157,3.477c0.74,2.66-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,262.009,268.973,260.56,268.357,258.347z M268.357,292.487
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.738,5.417,0.816,6.157,3.477c0.74,2.66-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,296.148,268.973,294.699,268.357,292.487z M268.357,326.625
      	c-0.74-2.66,0.816-5.417,3.477-6.157l122.668-34.124c2.656-0.738,5.417,0.816,6.157,3.477c0.74,2.66-0.816,5.417-3.477,6.157
      	l-122.668,34.124c-0.448,0.125-0.899,0.184-1.343,0.184C270.982,330.287,268.973,328.838,268.357,326.625z`}
    />
  </svg>
);

export default SVG;
