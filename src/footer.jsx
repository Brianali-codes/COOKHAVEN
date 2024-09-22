import './App.css'

function Footer(){
    return(

        <div className="foot flex flex-row justify-center gap-7 dark:bg-black " id="FOOTER">
            <div className="flex flex-col justify-center items-center dark:bg-black">
                <p className="RCP dark:text-white">ABOUT THE</p>
                <p className="RCP dark:text-white">RECIPE</p>
                <p className="RCP dark:text-white">BIBLE.</p>
            </div>
            <div className="flex flex-col justify-center items-start w-3/6 dark:bg-black p-5" id='FT2'>
                <p className="text-black dark:text-white">'Recipe Bible' is powered by <a href="https://www.themealdb.com/"><span className="text-blue-500">theMealDb</span></a> an open source database of recipes from around the world.</p>
                <br />
                <p className="text-black dark:text-white">This web application uses React on par with tailwind CSS for styles and, It allows users to either search TheMealDB for specific recipes or returns a random recipe to get some inspiration.</p>
                <br />
                <p className="text-black dark:text-white">Find this Project on Github: <a href="https://github.com/gamerfunky78/RecipeHaven"><span className="text-blue-500">github.com/gamerfunky78/RecipeHaven</span></a></p>
            </div>
            
            
        </div>



    )
}






export default Footer