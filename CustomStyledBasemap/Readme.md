# Custom Styled Vector Basemap

This sample app shows the use of a Custom Styled Vector Basemap.
![Custom Styled Vector Basemap app](../images/customstyledbasemap.png)
<br>
<br>
So how do you create and use a styled vector basemap?
<br>
First you create a custom styled vector basemap using the [MapStyler](https://apps.arcgisonline.nl/mapstyler/) or by hand (https://www.youtube.com/watch?v=IY8TmN607b4&ab_channel=EsriEvents). When you're happy with the MapStyler result click "opslaan" (save).
![Create a styled vector basemap using the MapStyler](images/save_map.png)
<br>
<br>
When you save the map using the MapStyler app you're prompted to sign in. Use your ArcGIS Platform account for this! The custom styled basemap will now be saved there.
![Sign in to save your styled basemap](images/signin_mapstyler.png)
<br>
<br>
Navigate to https://developers.arcgis.com and sign in with your ArcGIS Platform account. Add a new API key and click the button "Add items" at "Content and Items".
![Add the styled map to an API key](images/add_to_api_key.png)
<br>
<br>
Choose the styled basemap you just saved in the MapStyler and click "Add 1 item".
![Choose the styled vector basemap created using the MapStyler](images/add_to_api_key_detail.png)
<br>
<br>
Navigate to https://www.arcgis.com and sign in with your ArcGIS Platform account. Go to "My Content" and find the styled basemap you just saved in the MapStyler. Copy the item id you find in the url.
![Copy item id](images/item_in_organisation.png)
<br>
<br>
Open your favorit IDE, use the code from this repo and paste the copied item id at the "portalItem:id". Also add the API key you've just created.
![Copy item id](images/add_to_code.png)
<br>
<br>
Lean back and enjoy the miracle you've just created ;)
<br>
<br>
View this example live:
[here](https://esrinederland.github.io/CoolMaps/CustomStyledBasemap/index.html)
