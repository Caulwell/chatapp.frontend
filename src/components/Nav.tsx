


const Nav = () => {

    return (
        <div className="container mx-auto p-3 px-6 bg-white min-w-full">
            <div className="flex items-center justify-between">
                <div>
                    <img
                      className="mx-auto h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                </div>
                <button className="p-1 px-4 text-white bg-indigo-700 rounded-full hover:bg-indigo-700">Leave Room</button>
            </div>
        </div>
    )
}

export default Nav;