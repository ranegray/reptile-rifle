export default function manifest() {
  return {
    name: "GOLEM",
    short_name: "GOLEM",
    description:
      "Humanoids engineered for industrial deployment with intelligent and predictable behavior.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
