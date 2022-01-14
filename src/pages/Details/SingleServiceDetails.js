import React from 'react';

const SingleServiceDetails = (props) => {

    const { name, image, description } = props?.department;
    
    return (
        <section className="" style={{marginTop:"20vh"}}>
            <article className="row">
                <aside className="col-lg-6">
                    <img style={{marginLeft:"480px"}} width="450"  src={image} alt="" />
                </aside>
                <aside className="col-lg-6">
                    <aside style={{paddingLeft:"100px"}}>
                          <h2>{name}</h2>
                          <p></p>
                    </aside>
                </aside>
            </article>
        </section>
    );
};

export default SingleServiceDetails;