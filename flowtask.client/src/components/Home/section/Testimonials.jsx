import Button from "../../button/Button"
import Quote from "../../Icons/Quote"
import Quote_Rv from "../../Icons/Quote_Rv"

const testimoniesData = [
    {
        id: 0,
        name: "Samantha Lopez",
        role: "Project Manager",
        imagePath: '/perso3.jpg',
        quote: "FlowTask completely transformed the way my team collaborates. Tasks are clearer, deadlines are met, and we have never been more productive!"
    },
    {
        id: 1,
        name: "Emily Zhang",
        role: "UI Designer",
        imagePath: '/perso2.jpg',
        quote: "I love the clean interface and smooth performmance. FlowTask fits right into my daily workflow. Highly recommended for creative professionals!"
    },
    {
        id: 2,
        name: "James Carter",
        role: "Freelance Web Developer",
        imagePath: '/perso1.jpg',
        quote: "I've tried several task tools, but FlowTask is the first one that actually feels intuitive. It helps me stay on track without distractions."
    }
]

function TestimonyCard({name, role, imagePath, quote}){
    return(
        <div className="flex flex-col items-center justify-center w-[350px] md:w-[400px] rounded-[10px] shadow-2xl bg-gray-100">
            <div className="rounded-full border-gray-400 border-[4px] relative bottom-[50px]">
                <img className="w-[100px] rounded-full" src={imagePath} alt="photo" />
            </div>
            <div className="text-center mb-[10px] relative bottom-[40px] p-[5px]">
               <p><Quote/>{quote}<Quote_Rv/></p>
            </div>
            <div className="flex gap-[10px] mb-[10px] items-center relative bottom-[10px]">
                <h3 className="text-indigo-500 font-bold text-[1.1rem]">{name}</h3>
                -<span>{role}</span>
            </div>
        </div>
    )
}
const Testimonials = () => {
    const testimonyList = testimoniesData.map(item =>
        <TestimonyCard key={item.id} name={item.name} role={item.role} imagePath={item.imagePath} quote={item.quote}/>
    )
  return (
  <div className="mt-[100px] w-full">
    <div className="flex flex-col items-center xl:h-[80vh] md:h-auto">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="flex flex-wrap after:content-[''] after:w-[350px] w-full justify-around mt-[100px] gap-y-[80px]">
            {testimonyList}
        </div>
    </div>
    <div className="h-[50vh] w-full text-center font-inter flex flex-col items-center mt-[100px] ">
        <h1 className="text-5xl md:text-6xl font-bold">Ready to boost your productivity?</h1>
        <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] flex item-center flex-row justify-around mt-[50px]">
            <Button 
                name={"Get Started Now"}
                className={"w-40 bg-sky-500 text-white h-12 shadow-2xl rounded-full"} 
            />
            <Button 
                name={"Login"}
                className={"w-40 border-[1px] border-gray-200 shadow-2xl h-12 rounded-full"}
            />
        </div>
    </div>
  </div>
  )
}

export default Testimonials

