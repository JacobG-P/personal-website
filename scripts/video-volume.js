document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');

    // Select all video elements with the class 'controlled-video'
    const videos = document.querySelectorAll('.controlled-video');
    console.log(`Found ${videos.length} videos with the class 'controlled-video'.`);

    if (videos.length === 0) {
        console.warn('No videos found with the class "controlled-video".');
    }

    videos.forEach((video, index) => {
        // Set the volume to 20%
        video.volume = 0.2;

        // Ensure the video is muted
        video.muted = true;

        // Optional: Log to console for debugging
        console.log(`Video ${index + 1}: Volume set to ${video.volume}, Muted: ${video.muted}`);

        // Optional: Handle autoplay promise
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Autoplay started successfully
                    console.log(`Video ${index + 1} is autoplaying.`);
                })
                .catch((error) => {
                    // Autoplay was prevented
                    console.error(`Autoplay was prevented for Video ${index + 1}:`, error);
                });
        }
    });
});


