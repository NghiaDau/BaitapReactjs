const ServiceDetail = (props) =>{
    const {icon , name, text} = props.service;
    return (
        <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
            <div className="mb-2"><i className={icon} /></div>
            <h3 className="h4 mb-2">{name}</h3>
            <p className="text-muted mb-0">{text}</p>
            </div>
        </div>
    )
}
export default ServiceDetail;