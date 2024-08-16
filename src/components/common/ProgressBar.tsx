const ProgressBar: React.FC = () => {
    return <div className="h-[5px] flex w-full rounded-full gap-2">
        <div className="w-[70%] h-[5px] bg-white rounded-full">
            <div className="w-[100%] h-[5px] bg-green-950 rounded-full">

            </div>
        </div>
        <div className="w-[30%] h-[5px] bg-white rounded-full"></div>
    </div>
}

export default ProgressBar;