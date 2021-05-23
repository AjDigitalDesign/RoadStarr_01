import React from 'react';


export default function Services(){
    return(
        <>
            <section class="page-section" id="services">
                <div class="container px-4 px-lg-5">
                    <h2 class="text-center mt-0">At Your Service</h2>
                    <hr class="divider" />
                    <div class="row gx-4 gx-lg-5">
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="mt-5">
                                <div class="mb-2"><i class="fas fa-car"></i></div>
                                <h3 class="h4 mb-2">Tow service</h3>
                                <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="mt-5">
                                <div class="mb-2"><i class="fas fa-car-battery"></i></div>
                                <h3 class="h4 mb-2">Jump Start or Battery Test</h3>
                                <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 text-center">
                            <div class="mt-5">
                                <div class="mb-2"><i class="fas fa-car"></i></div>
                                <h3 class="h4 mb-2">Tire Change </h3>
                                <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}