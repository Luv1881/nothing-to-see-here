import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);

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
            fontFamily: "monospace",
            fontSize: 24,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#93a0b0",
            marginBottom: 32,
          }}
        >
          Luv Gupta — Writing
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 80,
            letterSpacing: "-0.015em",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {meta.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
