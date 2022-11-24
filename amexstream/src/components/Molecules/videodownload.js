import React, { useState, useEffect } from 'react'

import {VideoService} from "../../services/videoService";

import './videodownload.css'

export const VideoDownload =() =>{

    const [data, setData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState("");
    var videoService=new VideoService()

    useEffect(() => {
        videoService.getVideos().then(value => {
            setData(value)
        });

    }); // eslin

    var handleVideoSelect= (e)=>{
        console.log("Selected Video", e.target.value);
        const videoSel = e.target.value;
        setSelectedVideo(videoSel);
        console.log(selectedVideo);

        var obj={
            "fileName":selectedVideo
        }
        videoService.getVideoByName(obj).then(blob=>{
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            const video=document.querySelector("video");
            video.src = url;
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
        })

    }


    return (
        <div className="App">
            <div className="Container">
                <select
                    name="Videos"  onChange={e => handleVideoSelect(e)}
                    value={selectedVideo} className="selectStyle">
                    <option value="">Select the video</option>
                    {data.map((video, key) => (
                        <option key={key} value={video.fileName}>
                            {video.fileName}
                        </option>
                    ))}
                </select>


            </div>
            <div className="videoStyle">
                <video id="video" width="400" height="200" controls />
            </div>
        </div>
    );

}
