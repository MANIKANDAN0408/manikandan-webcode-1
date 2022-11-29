let videoCardContainer = document.querySelector('.video-container');

let api = 'AIzaSyCAKsTfDlCnK8H4CCOg1plcAbmBx9chCUw';

let video = 'https://www.googleapis.com/youtube/v3/videos?';

let channel = 'https://www.googleapis.com/youtube/v3/channels?';


fetch(video + new URLSearchParams({

      key: api,
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 50,
      regionCode: 'IN'

}))

.then(res => res.json())
.then(data => {

    data.items.forEach(item => {
        getChannelIcon(item);

    })
}) 

.catch(err => console.log(err));

const getChannelIcon = (video_data) => {

    fetch(channel + new URLSearchParams({
        key: api,
        part: 'snippet',
        id: video_data.snippet.channelId

    }))

    .then(res => res.json())

    .then(data => {

        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;

        makeVideoCard(video_data);

    })
}

const makeVideoCard = (data) => {

    videoCardContainer.innerHTML += `

    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">

        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">

        <div class="content">

            <img src="${data.channelThumbnail}" class="channel-icon" alt="">

            <div class="info">

                <h4 class="title">${data.snippet.title}</h4>

                <p class="channel-name">${data.snippet.channelTitle}</p>

            </div>
        </div>
    </div>

    `;

    console.log(data)
}



              const searchInput = document.querySelector('.search-bar');

              const searchBtn = document.querySelector('.search-btn');

              let searchLink = "https://www.youtube.com/results?search_query=";

              searchBtn.addEventListener('click', () => {

    if(searchInput.value.length){

        location.href = searchLink + searchInput.value;
    }
})

  
    const noofsubscribers= document.getElementById('Subscriberid');

    const channelviewCount = document.getElementById('views');

    const videosCount = document.getElementById('videocount');
    
   
    let getdata = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${'UC_x5XG1OV2P6uZZ5FSM9Ttw'}&key=$AIzaSyCAKsTfDlCnK8H4CCOg1plcAbmBx9chCUw`)

        .then(response => {

            return response.json()
        })

        .then(data => {
            console.log(data);

            noofsubscribers.value = data["items"][0].statistics.noofsubscribers;

            channelviewCount.value = data["items"][0].statistics.channelviewCount;

            videosCount.value = data["items"][0].statistics.videosCount;
            
            
        })
    }
   getdata();