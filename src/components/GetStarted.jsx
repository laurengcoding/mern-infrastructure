export default function GetStarted() {
    return (
        <div className="flex flex-col justify-center items-center lg:flex flex-col py-8 justify-center items-center">
            <h3 className="text-3xl font-bold pb-8">Get Started</h3>
            <div className="space-x-12">
                <button className="bg-amber-50 border-solid border-black border-2 rounded py-5 px-7 lg:hover:bg-lime-100">Concepts of Music</button>
                <button className="bg-amber-50 border-solid border-black border-2 rounded py-5 px-7 lg:hover:bg-lime-100">Ear Training</button>
                <button className="bg-amber-50 border-solid border-black border-2 rounded py-5 px-7 lg:hover:bg-lime-100">Traditional Notation</button>
            </div>
        </div>
    )
}