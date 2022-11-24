export class VideoService{

    getVideos(){
       return fetch("http://localhost:4000/api/users/videos",
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
           .then(res=>res.json())
           .then(d=>d)

    }

    getVideoByName(data){
        /*return fetch("http://localhost:4000/api/users/videosbyid",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res)
            .then(d=>d)*/

        return fetch("http://localhost:4000/api/users/videosbyid", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.blob())
            .then((blob) =>blob)
        /* {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.mp4`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });*/
    }

}
