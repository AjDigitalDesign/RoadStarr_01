import React from 'react';
import Link from 'next/link';


export default function Contact(){
    return(
        <>
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">For Immediate Roadside Assistance Contact <b>ROADSTARR</b></p>
                    </div>
                </div>
                
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>
                            <Link href="tel: (484) 561-0228">
                                <a>(484) 561-0228</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}