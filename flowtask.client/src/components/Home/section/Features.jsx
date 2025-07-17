const featureData = [
    {
        id: 0,
        title: "Task Management",
        iconPath: '/progress.jpg',
        description: "Create, edit, and complete tasks with ease."
    },
    {
        id: 1,
        title: "Progress Tracking",
        iconPath: "/progress.jpg",
        description: "Visualize your productivity at a glance."
    },
    {
        id: 2,
        title: "Smart Filters",
        iconPath: '/progress.jpg',
        description: "Filter by status, or due date."
    }
    
]

function Feature({title, iconPath, description}){
    return(
        <div className="flex flex-col items-center shadow-2xl p-[5px] rounded-[10px] w-[330px] text-center sm:w-[400px]">
            <h3 className="font-inter text-[1.3rem]">{title}</h3>
            <img 
                src={iconPath} 
                alt="icon" 
                className="h-[300px]"
            />
            <p className="">{description}</p>
        </div>
    )
}
const Features = () => {

   const featureItem = featureData.map(item => 
    <Feature key={item.id} title={item.title} iconPath={item.iconPath} description={item.description}/>
   )

  return (
    <div className="flex flex-col items-center h-auto w-full xl:h-screen">
        <h1 className="text-4xl font-bold">Features</h1>
        <div className="flex flex-wrap justify-center gap-y-[16px] gap-x-[40px] mt-[50px] after:content-[''] after:w-[400px]">
            {featureItem}
        </div>      
    </div>
  )
}

export default Features

