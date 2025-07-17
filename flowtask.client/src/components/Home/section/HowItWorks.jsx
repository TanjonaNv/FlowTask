const guideData = [
    {
        id: 0,
        title: 'Sign Up',
        imgPath: '/sign_up.jpg',
        descri: 'Create your account in seconds'
    },
    {
        id: 1,
        title: 'Add Tasks',
        imgPath: '/achieve_goals.jpg',
        descri: 'Create your daily to-dos'
    },{
        id: 2,
        title: 'Track Progress',
        imgPath: '/achieve_goals.jpg',
        descri: 'Stay on top of your work'
    },{
        id: 3,
        title: 'Achieve Goals',
        imgPath: '/achieve_goals.jpg',
        descri: 'Focus and get things done'
    },
]

function StepCard({title, imgPath, descri, step}){
    return(
        <div className="shadow-2xl w-[300px] rounded-[10px] flex flex-col items-center text-center p-[8px] lg:w-[350px]">
            <h1 className="font-inter text-2xl"><span className="underline">Step {step +1}:</span> {title}</h1>
            <img 
                src={imgPath} 
                className="w-[300px]"
                alt="step_image" 
            />
            <p id="more" className="text-lg">{descri}</p>
        </div>
    )
}

const HowItWorks = () => {
    const listStep = guideData.map(item => 
    <StepCard key={item.id} step={item.id} title={item.title} imgPath={item.imgPath} descri={item.descri} />
)
  return (
    <div className="mt-[50px] flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold">How It Works?</h1>
        <div className="flex flex-wrap justify-center h-auto mt-[50px] gap-x-[60px] gap-y-[40px] w-auto xl:gap-x-[30px] lg:gap-x-[40px] lg:w-auto">
            {listStep}
        </div> 
    </div>
  )
}

export default HowItWorks