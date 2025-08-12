import Image from "next/image"
import Img1 from '../../public/school pics/1.jpg';

export default function HomeKeyFeaturePage(){
    return(
        <div className="bg-medium p-10">

            <div className="flex flex-col items-center ">
                <h1>Key Features</h1>
                <p>Your Future Journey</p>
            </div>
            <div className=" flex-between mt-10   ">

                <div className="container1 ">

                    <h1 className="ml-[30%]">Faith</h1>
                    <br />
                    <p className="text-center">We build strong faith and self confidence in our pupils</p>

                </div>
                <div className="container1">
                    {/* <h1 className="ml-[30%]">Discipline</h1> */}
                    {/* <br /> */}
                    {/* <p className="text-center">We make their life disciplined and directional</p> */}
                    <Image src={Img1} alt='about-image'  className="h-64 rounded-lg" />
                </div>
                <div className="container1">
                    <h1 className="ml-[30%]">Unity</h1>
                    <br />
                    <p className="text-center">Students learn team managment and leadership qualities</p>
                    
                </div>
            </div>

        </div>
    )
}