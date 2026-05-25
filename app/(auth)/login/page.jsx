import Left from "@/components/login-components/Left"
import Right from "@/components/login-components/Right"



const page = () => {
  return (
    <div className="bg-rail flex-1">

            <div className="flex flex-row justify-between">

                        <Left/>
                        <Right/>
            </div>

    </div>
  )
}

export default page