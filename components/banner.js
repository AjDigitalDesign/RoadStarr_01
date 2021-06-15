import react from 'react'
import Link from 'next/link';
import {Container} from 'react-bootstrap';

export default function Banner(){
    return (
        <>
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">WELCOME TO ROADSTARR</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">ROADSTARR aims to be one of the largest and leading car towing company in the greater Twin Cities area. Our goal is to provide a first-class service with customer satisfaction as our main priority.
                        </p>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}