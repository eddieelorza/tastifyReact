import React from 'react';
import '../styles/stepsTastify.scss';
import "bootstrap/dist/css/bootstrap.min.css";

function stepsTastify (){
	return (
       
	  <section className="tastify--steps container mt-5">
        <h3 className="text-center categories__title" >COMO USAR TASTIFY</h3>

        <div className=" row justify-content-evenly mt-4">
            <div className="steps--description text-light p-3 tastify--step_img1">
                 <p>Lorem <span>Lorem</span></p>
            </div>
            <div className="steps--description text-light p-3 tastify--step_img2">
                 <p>Lorem <span>Lorem</span></p>
            </div>
            <div className="steps--description text-light p-3 tastify--step_img3">
                 <p>Lorem <span>Lorem</span></p>
            </div>

           
        </div>
       </section>


	);
}

export default stepsTastify;