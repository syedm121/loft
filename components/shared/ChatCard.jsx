const ChatCard = ({userName,text}) => {
  return (
    <div className="flex flex-row gap-2 items-center">

            <div className="p-2 h-10 w-10 text-center bg-blue-600  rounded-full text-white">
                  <h4>{userName[0]}</h4>
            </div>
            <div className="flex flex-col ">
                  <div className="text-ink-muted text-sm">
                       <h4>{userName}</h4>
                  </div>
                  <div>
                      <p className="text-xs font-normal text-ink-secondary">{text}</p>
                  </div>
            </div>

    </div>
  )
}

export default ChatCard