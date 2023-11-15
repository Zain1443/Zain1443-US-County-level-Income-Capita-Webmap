require([
  "esri/views/MapView",
  "esri/WebMap"
], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "637ff614923c4b6fbac575f7600d72d5"
    },
    basemap: "dark-gray" // Change the basemap to "dark-gray"
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});