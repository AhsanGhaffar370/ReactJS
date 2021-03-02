import { render } from '@testing-library/react';
import React from 'react';

function Footer(){
    return(
        <footer className="fixed-bottom bg-dark text-white text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div className="container p-5">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-left">
                        <a className="navbar-brand" href="https://mdbootstrap.com/"><i className="fab fa-asymmetrik fa-4x text-white"></i></a>

                        <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                        voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-5">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 1</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 2</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 3</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 4</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-5">
                        <h5 className="text-uppercase mb-0">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 1</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 2</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 3</a>
                        </li>
                        <li>
                            <a href="https://mdbootstrap.com/" className="text-white">Link 4</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            {/* <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> */}
            <div className="text-center p-3 bg-secondary">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        {/* <!-- Copyright --> */}
        </footer>
    );
}

export default Footer;