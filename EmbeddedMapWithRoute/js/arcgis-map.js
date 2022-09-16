require(["esri/Map", "esri/views/MapView", "esri/widgets/Fullscreen", "esri/layers/RouteLayer"], (Map, MapView, Fullscreen, RouteLayer) => {

    // Get the route layer
    const routeLayer = new RouteLayer({
        portalItem: {
            id: "98b6935b28d544c69ec12c937780f08c"
        }
    });

    // Create an empty map
    const map = new Map({
        basemap: "topo-vector"
    });

    // Add the map to the home page
    const view = new MapView({
        container: "viewDiv",
        map: map
    });

    // Add a fullscreen widget
    const fullscreen = new Fullscreen({
        view: view
    });
    view.ui.add(fullscreen, "top-right");

    // Get the route information from the route layer
    routeLayer.load().then(function (routeResult) {

        // Get the directions as text
        var directions = routeLayer.directionPoints.map(d => d.displayText).join('</br></br>');
        document.getElementById("routeDirections").innerHTML = directions;
        var lastStop = routeLayer.directionPoints.at(-1);
        document.getElementById("routeStop").innerHTML = lastStop.name;
        document.getElementById("directionsSection").style = "display:block";

        // Get all route graphics and add to the map
        var routeGraphic = routeResult.routeInfo.toGraphic();
        var startGraphic = routeLayer.stops.items.at(0).toGraphic();
        var endGraphic = routeLayer.stops.items.at(-1).toGraphic();
        view.graphics.addMany([routeGraphic, startGraphic, endGraphic]);

        // Change the map extent
        view.goTo(routeGraphic);

    });
});