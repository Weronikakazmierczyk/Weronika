/* Place your JavaScript in this file */
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Weronika Kaźmierczyk</title>
    <link rel="stylesheet" href="styles.css">
<body>
div id="gallery"></div>

    <!-- ✅ Only one script block with JavaScript -->
    <script>
        const spaceId = 'l4a4vd8kuwt6'; 
        const accessToken = 'n47HZf3C2gTDoYf2uKjOGjC778FRzg11qTd6Qsy_B-o';
        const entryId = '1ENIMQ88oMpwY4KPl1vBhq'; // Your Portfolio entry ID

        fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}&include=2`)
            .then(res => res.json())
            .then(data => {
                const galleryContainer = document.getElementById('gallery');
                const galleryItems = data.fields.gallery || [];
                const assets = data.includes?.Asset || [];

                galleryItems.forEach(imageRef => {
                    const asset = assets.find(a => a.sys.id === imageRef.sys.id);
                    if (asset && asset.fields?.file?.url) {
                        const img = document.createElement('img');
                        img.src = 'https:' + asset.fields.file.url;
                        img.alt = asset.fields.title || 'Gallery Image';
                        img.style.width = '200px';
                        img.style.margin = '10px';
                        galleryContainer.appendChild(img);
                    }
                });
            })
            .catch(err => {
                console.error('Error loading gallery:', err);
            });
    </script>
    </body>
    </html>