import { LoginDummyChats } from "../dummy/Chats"
import ChatCard from "../shared/ChatCard"
import FeatureList from "../shared/FeatureList"


const Right = () => {
  return (
    <div className="bg-base flex-1 h-screen flex flex-col p-8 justify-between">

      <div>
           <div>
                <h1 className="text-ink-muted mb-4 text-xl">Already inside</h1>
            </div>

            <div className=" flex flex-col gap-6">
                {LoginDummyChats.map((item,index)=>{
                  return(
                    <ChatCard key={index}  userName={item.userName} text={item.text}/>
                  )
                  
                })}
            </div>

      </div>

     

      <div>
          <FeatureList/>
      </div>

    </div>
  )
}

export default Right