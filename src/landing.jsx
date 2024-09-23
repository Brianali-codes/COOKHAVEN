import VID from './assets/video1.mp4'
import Post from './assets/food.webp'


function LandingPage(){

    return(
        <div className="video-background" id='Home'>
            <video autoPlay muted loop  poster={Post}>
                <source src={VID} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-overlay w-4/6 p-2 flex flex-col justify-end">
                <h1 className="h11 text-start">COOK HAVEN</h1>
                <br />
                <p className='h9 text-start'>Welcome to RecipeBible – Your Home for Delicious Recipes! Discover the joy of cooking with our collection of easy-to-follow, flavorful recipes designed for every occasion. Whether you’re a seasoned chef or a kitchen beginner, our step-by-step guides make meal preparation simple, fun, and stress-free. From savory dinners to indulgent desserts, healthy bites to quick snacks, we’ve got something for everyone. Get inspired, try something new, and enjoy the taste of homemade meals made with love!</p>
            </div>
         </div>
        )


}


export default LandingPage