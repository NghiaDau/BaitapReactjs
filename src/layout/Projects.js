const Projects = (props) => {
    const {image, image_src} = props.project;
    return (
        <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={image} title="Project Name">
                <img className="img-fluid" src={image_src} alt="..." />
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">Category</div>
                    <div className="project-name">Project Name</div>
                </div>
            </a>
        </div>
    )
}
export default Projects;