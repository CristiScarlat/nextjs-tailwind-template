


const SubHeader = () => {
    return (
        <section className="grid gap-2 grid-cols-2 max-w-6xl mt-4 mx-auto bg-slate-700 rounded-md">
            <div>
                <img src="images/subheader/me.jpeg" alt="...me" className="max-w-sm sm:max-w-md w-full rounded-md"/>
            </div>
            <div className="flex justify-center items-center flex-col ">
                <h1 className="animate-bounce text-5xl font-bold pb-2 text-indigo-500">Hey, I'm Cristi</h1>
                <p className="text-white">
                    A software engineer from Romania, With background in electronics,
                    embedded programming and fullstack web development.
                </p>
            </div>
        </section>
    )
}

export default SubHeader;