App.js // set search state here, pass down to Container list, pass down to search
    Header.js
        Search.js // passed down search state from App.js
        LoginForm.js (STRETCH DELVERABLE)
    ContainerList.js // import Container.js, include relevant props, map/filter so we can subsequently search for resorts; pass down search state from App.js
        Container.js // structure of each card; how it should look, etc.
        Container.js
        Container.js
            etc., etc.
    BackcountryForum.js
        


*header component structure*
-homepage image when the page renders of a skier, snowboarder, moutain, etc.
-search bar (include magnifying glass icon that opens up to a search bar text input)
-log-in (form submission)

*container component structure*
-drop-down once clicked on; includes:
    -full-page screen shot of each resort (.png inlcuded as a key for each object)
    -recent snowfall (24/36/72 hour forcast)
    -runs open (research how many runs are at each resort for our initial objects)
    -lifts open / lift hours of operation?

*external API's for bonus deliverables*
-weather API for each resort (today's forcast weather API)
    -7-day forcast, including potential snow in inches?

*extras*
-maybe include some posts/readings down below
    -how to avoid altitude sickness, head protection, etc.

