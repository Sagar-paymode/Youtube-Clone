import React,{useState} from 'react';
import '../RecommendedVideos.css'
import VideoCard from './VideoCard';

const RecommendedVideoCards = (props) => {


  return (
    <div className='recommendedVideos' >
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos" >
        <VideoCard
          title= "Meta Tags | Adding SEO Support | Server Server Side Rendering with React and Redux"
          views = '446 views'
          timestamp='1 year ago'
          channelImage="https://yt3.ggpht.com/9Rkg2oisyTZIJEK9s3l4DdHVkVnHgmbiQSSn2TncwHElC0iVe3zUOVZkpXfXVaavqQfTHRz8QJw=s68-c-k-c0x00ffffff-no-rj"
          channel='improve your skill'
          image="https://i.ytimg.com/vi/mtap-nd24u4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAE_fn8Q56AbPKZlV6mNP014SxNuQ"
        />
        <VideoCard
          title= "Eutelsat HOTBIRD 13G Mission"
          views = '240,401 views '
          timestamp=' Nov 3, 2022'
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu9_iCJfM9h_wUHrq6UjvStb_W9oqJa-rvcFh_kvTxQ=s88-c-k-c0x00ffffff-no-rj"
          channel='SpaceX'
          image="https://i.ytimg.com/vi/McV40hM7aI8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_KfgvUnCBY9NKoH5Qo1-byxGSVg"
        />
        <VideoCard
          title= "The Science of Interstellar: an Illustration of a Century of Relativity with Kip Thorne"
          views = '237,962 views '
          timestamp=' Dec 18, 2015'
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu-pBBKnNHvSUpbodAICmEXLEgiHTraosa-FudeT=s88-c-k-c0x00ffffff-no-rj"
          channel='Science & Cocktails'
          image="https://i.ytimg.com/vi/lM-N0tbwBB4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQttkqENeisMbpXbuI4CRfIbBtJw"
          />
        <VideoCard
            title= "Hindi News LIVE: देश-दुनिया की बड़ी खबरें | Namaste Bharat LIVE | Big News Headlines LIVE | Top News"
            views = '89K views'
            timestamp=' Streamed 18 hours ago'
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu-rvKUMp0A-hpichIAgjGnd_rEDfficElmjN32Kq-Q=s88-c-k-c0x00ffffff-no-rj"
            channel='ABP NEWS'
            image="https://i.ytimg.com/vi/Zo5dTH8Ksvo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFuyJ9tCe0ezCrqGJROIvmHjKGew"
        />
        <VideoCard
            title= "Bhool Bhulaiyaa (Full Movie) Akshay Kumar, Vidya Balan, Shiney A, Paresh R, Priyadarshan | Bhushan K"
            views = '115M views'
            timestamp='  9 months ago'
            channelImage="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
            channel='T-Serie'
            image="https://i.ytimg.com/vi/jzYxbnHHhY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC82KQ8o0E-hF-sGvaVS544oCNTKw"
        />
        <VideoCard
            title= "EP 13 Complete Guide Shri Kedarnath Dham Yatra | Sonprayag to Kedarnath JI 17 km"
            views = '7M views'
            timestamp='3 years ago'
            channelImage="https://yt3.ggpht.com/DweKUuI9BW0VbfYhL0FEk3RoSUUuVO87lwKjfBDZ9Ke3l7XgzK6bjxXUPxTu1sMQrNCmWknLv-4=s88-c-k-c0x00ffffff-no-rj"
            channel='visa2explore'
            image="https://i.ytimg.com/vi/ZluP0497uEY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWF9WoWVT9sb1Ry9tUzhPBPOmT2Q"
        />
        <VideoCard
            title= "Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | Amitabh Bhattacharya"
            views = '295M views'
            timestamp='3 months ago'
            channelImage="https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s88-c-k-c0x00ffffff-no-rj"
            channel='Sony Music India'
            image="https://i.ytimg.com/vi/BddP6PYo2gs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkH6mntazw0BSfrHhPwTiqmBIZuQ"
        />
        <VideoCard
            title= "T20 World Cup 2022: Team India Rides On Suryakumar Yadav's Brilliance"
            views = '5K views '
            timestamp=' 2 days ago'
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu9j_aiKypFzgykgIVZOA7n1HRKZc1jchZ8ewswbBU4=s88-c-k-c0x00ffffff-no-rj"
            channel='NDTV'
            image="https://i.ytimg.com/vi/0icBCIzluv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASDVx9Gxk3ukRKs9u41hlgf9oqZw"
        />
        <VideoCard
            title= "Stock Market Updates: Top Highlights From Today's Trading Session | Markets Today | CNBC-TV18"
            views = '815 views'
            timestamp='1 day ago'
            channelImage="https://yt3.ggpht.com/JySEhLOv8Llm0VZBxo5iCttTVg80ttt90xTxhBGm7XSXiEuPA_0liFIiBpokEonD8pvdKy0r=s88-c-k-c0x00ffffff-no-rj"
            channel='CNBC-TV18'
            image="https://i.ytimg.com/vi/KJrb8hrzmdQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFtm1yeJBN5P3uWMQt5a16wf29hA"
        />
        <VideoCard
            title= "Google Keynote (Google I/O ‘22)"
            views = '1.2M views'
            timestamp='Streamed 5 months ago'
            channelImage="https://yt3.ggpht.com/ytc/AMLnZu_31rROBnB8bq9EJfk82OnclHISQ3Hrx6i1oWLai5o=s88-c-k-c0x00ffffff-no-rj"
            channel='Google'
            image="https://i.ytimg.com/vi/nP-nMZpLM1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7sOVIOaFtS22iIS59mwPt5KDGpg"
        />
        <VideoCard
            title= "Tesla Model S First Impressions | Gagan Choudhary"
            views = '1M views'
            timestamp='1 year ago'
            channelImage="https://yt3.ggpht.com/qmeI-Kh6-S6qndIEdrBgBQyVvG9PTgKWnIqtGlAalMtbwmStLxqtf3rom7iui2paZzC9VlQGv68=s88-c-k-c0x00ffffff-no-rj"
            channel='Gagan Choudhary'
            image="https://i.ytimg.com/vi/Q07EUWbP-Lk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs1bMjQ4FItJxD-zrsPQdjPM7O7w"
        />

      </div>
    </div>
  )
}

export default RecommendedVideoCards
