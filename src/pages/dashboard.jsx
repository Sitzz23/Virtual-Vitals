import React from 'react'
import Sidebar from "../components/sidebar"
import SelectBox , { getRes } from "../components/selectBox"

export default function Dashboard() {

  return (
	<div className="flex">
			<div>
				<Sidebar />
			</div>

			<div className="flex">
			{/* Dashboard div above */}


				<div className="flex flex-col sidebar-icon p-6 m-4">
					{/* Input and result div above */}
					
					<div className="flex flex-col ">
						{/* Input div above */}

						<h1 className="p-4 ">Welcome Back party!</h1>

					<div className="flex flex-col">
                <div className="flex my-4">

                    <SelectBox className="bg-white px-2 py-4 "/>
                    <SelectBox />
                    <SelectBox />
                </div>

                <div className="flex my-4"> 
                    <SelectBox />
                    <SelectBox />
                    <button onClick={getRes} className="bg-slate-100 p-2 rounded-lg mx-4">Get Started</button>
                </div>
					</div>
						
					</div>

					<div>
					</div>

				</div>


				<div>
					{/* Presciption div above */}

				</div>


			</div>
      
	</div>
  )

}
