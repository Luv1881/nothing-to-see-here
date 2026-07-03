import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Luv Gupta — Software Engineer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "100px",
          backgroundColor: "#0a0a0b",
          color: "#f0f0f2",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 120,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Luv Gupta
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#93a0b0",
            marginTop: 32,
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
