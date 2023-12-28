import ServiceDetail from "./ServiceDetail"

const Services = ()=>{
    const listServices =[
        {
            icon:"bi-gem fs-1 text-primary",
            name:"Sturdy Themes",
            text:"Our themes are updated regularly to keep them bug free!"
        },
        {
            icon:"bi-laptop fs-1 text-primary",
            name:"Up to Dat",
            text:"All dependencies are kept current to keep things fresh."
        },
        {
            icon:"bi-globe fs-1 text-primary",
            name:"Ready to Publish",
            text:"You can use this design as is, or you can make changes!"
        },
        {
            icon:"bi-heart fs-1 text-primary",
            name:"Made with Love",
            text:"Is it really open source if it is not made with love?"
        },
    ]

    const rederService = listServices.map((service,index) =>{
        return (
            <ServiceDetail service={service}/>
        )
    })
    return(
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    {rederService}
                   
                </div>
            </div>
        </section>
    )
}
export default Services;