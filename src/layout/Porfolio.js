import Projects from "./Projects";
const Portfolio = () =>{
    const listProject =[
        {
            image:"/img/portfolio/fullsize/1.jpg",
            image_src:"/img/portfolio/thumbnails/1.jpg"
        },
        {
            image:"/img/portfolio/fullsize/2.jpg",
            image_src:"/img/portfolio/thumbnails/2.jpg"
        },
        {
            image:"/img/portfolio/fullsize/3.jpg",
            image_src:"/img/portfolio/thumbnails/3.jpg"
        },
        {
            image:"/img/portfolio/fullsize/4.jpg",
            image_src:"/img/portfolio/thumbnails/4.jpg"
        },
        {
            image:"/img/portfolio/fullsize/5.jpg",
            image_src:"/img/portfolio/thumbnails/5.jpg"
        },
        {
            image:"/img/portfolio/fullsize/6.jpg",
            image_src:"/img/portfolio/thumbnails/6.jpg"
        },
    ]
    const rederProJect = listProject.map((project,index) =>{
        return (
            <Projects project={project}/>
        )
    })
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {rederProJect}
                </div>
            </div>
        </div>
    )
}
export default Portfolio;