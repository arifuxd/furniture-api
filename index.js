const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log(`the app is live`));

app.get("/tshirt", (req, res) => {
  res.status(200).send([
    {
      label: "Furniture",
      value: 1,
      backgroundColor: "#ff7979",
      icon: "table-furniture",
    },
    { label: "Cars", value: 2, backgroundColor: "#ffbe76", icon: "car" },
    {
      label: "Cameras",
      value: 3,
      backgroundColor: "#7bed9f",
      icon: "camera-iris",
    },
    {
      label: "Games",
      value: 4,
      backgroundColor: "#badc58",
      icon: "gamepad-variant",
    },
    {
      label: "Clothings",
      value: 5,
      backgroundColor: "#686de0",
      icon: "tshirt-crew",
    },
    {
      label: "Sports",
      value: 6,
      backgroundColor: "#30336b",
      icon: "basketball",
    },
    {
      label: "Movies & Music",
      value: 7,
      backgroundColor: "#70a1ff",
      icon: "movie-open",
    },
    {
      label: "Books",
      value: 8,
      backgroundColor: "#ff7f50",
      icon: "book-open-variant",
    },
    { label: "Other", value: 9, backgroundColor: "#95afc0", icon: "apps" },
  ]);
});
