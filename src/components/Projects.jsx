function Projects() {
    return (
        <div className="left-align">
            <h2 className="bottom-margin">Projects</h2>
            <h3 className="bottom-margin">AWS Resume Challenge | 
                <a href='https://www.petertorres.link' target="_blank" rel="noopener noreferrer"> petertorres.link</a> | 
                December 2024
            </h3>
            <ul>
                <li>Built and deployed a serverless web application using S3 for static website hosting, CloudFront for content delivery, 
                    and Route 53 for custom domain management.
                </li>
                <li>Developed scalable and cost-efficient backend services with AWS Lambda, API Gateway, and DynamoDB, 
                    automating infrastructure provisioning and updates with Terraform for consistent and reproducible deployments.
                </li>
            </ul>
        </div>
    )
}

export default Projects;