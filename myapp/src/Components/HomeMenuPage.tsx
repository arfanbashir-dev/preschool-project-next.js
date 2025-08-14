import Image from "next/image"
import Img6 from '../../public/SchoolPics/six.jpg'
import Img7 from '../../public/SchoolPics/seven.jpg'
import Img12 from '../../public/SchoolPics/twelve.jpg'
import Img13 from '../../public/SchoolPics/thirteen.jpg'

export default function HomeMenuPage(){
    return(
        <div className="bg-white p-10">
        

        <div className="flex flex-col justify-center items-center bg-dark m-20 rounded-lg p-10">

            <div className="flex flex-col justify-center items-center">
                <h1 className="">Give your child the best possible start</h1>
                <br />
                <p className=" w-[700px]">
                    Our children learn in an environment where they feel represented and included. 
                    Our broad and creative curriculum challenges pupils to think critically, develop curiosity,
                    confidence, and independence, ensuring that they are prepared for whatever they encounter, 
                    in school and beyond.
                </p>

            </div>


            <div className="flex-center gap-10 p-10">
                
                <div className="container2 p-3 bg-white text-black rounded-lg w-[500px] flex-center gap-10">
                    <div>
                        <Image src={Img6} alt='img1' className="w-40 h-40 rounded-lg" />
                    </div>
                    <div>
                        <h1>Pre School</h1>
                        <p>3 - 4 years old</p>
                    </div>

                </div>
                <div className="container2 p-3 bg-white text-black rounded-lg w-[500px] flex-center gap-10">
                    <div>
                        <Image src={Img7} alt='img1' className="w-40 h-40 rounded-lg" />
                    </div>
                    <div>
                        <h1>Reception</h1>
                        <p>4 - 5 years old</p>
                    </div>

                </div>

            </div>




            <div className="flex-center gap-10 p-10">
                
                <div className="container2 p-3 bg-white text-black rounded-lg w-[500px] flex-center gap-10">
                    <div>
                        <Image src={Img12} alt='img1' className="w-40 h-40 rounded-lg" />
                    </div>
                    <div>
                        <h1>Pre Prep</h1>
                        <p>5 - 6 years old</p>
                    </div>

                </div>
                <div className="container2 p-3 bg-white text-black rounded-lg w-[500px] flex-center gap-10">
                    <div>
                        <Image src={Img13} alt='img1' className="w-40 h-40 rounded-lg" />
                    </div>
                    <div>
                        <h1>Prep</h1>
                        <p>6 - 7 years old</p>
                    </div>

                </div>

            </div>





        </div>

    </div>
    

    )
}
