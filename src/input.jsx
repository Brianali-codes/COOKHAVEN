export default function InputSection(){
        return(
        <div className="flex flex-row border-solid border-2 border-gray-500 justify-between p-7 m-7 rounded-3xl dark:border-white bg-white dark:bg-black">
            <input type="text" placeholder="Search Recipe" className="w-5/6 outline-none dark:text-white bg-white dark:bg-transparent" id="display" />
            <button className="bg-gray-400 p-2 rounded-lg font-mono dark:bg-white text-black">Search Recipe</button>
        </div>
        )
}


