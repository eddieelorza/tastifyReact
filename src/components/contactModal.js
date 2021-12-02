import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useForm, ValidationError } from '@formspree/react';
import { ModalFooter } from "react-bootstrap";

function contactModal(props) {
    const [state, handleSubmit] = useForm("xyylryyd");
     function successForm() {
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }
     }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
             CONTACTANOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row g-3">
  <div className="col">
            <form onSubmit={handleSubmit}>
         <div className="mb-3">
         <label htmlFor="email" className="form-label">
             Email address
         </label>
         <input type="email" className="form-control" id="email" name="email"placeholder="name@example.com"/>
         </div>
         <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        
        />
         <div className="mb-3">
         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
         <textarea className="form-control" id="message" name="message" rows="3" />
         <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
         </div>
         <Modal.Footer> 
             { state.submitting ?     
         <Button className="col-md-5 mx-auto "variant="outline-danger" disabled={state.succeeded } type="submit">
      Mensaje Enviado
    </Button >  : <Button className="col-md-5 mx-auto "variant="danger" disabled={state.submitting} type="submit">
      Enviar
    </Button > }    
 
    
     {/* <Button className="col-md-5 mx-auto "onClick={props.onHide}>Cerrar</Button> */}
        </Modal.Footer>
         </form >
  </div>
  <div className="col">
<h4  className="text-center" >Queremos escucharte</h4>
 
      <p className="text-center">Si tienes alguna duda sobre como funciona nuestro servicio a detalle, puedes llenar el siguiente formulario y te responderemos lo antes posible.

También puedes reportarnos alguna falla dentro del sitio. Nuestro equipo técnico te acompañará en cada paso para que tu experiencia dentro de tastify sea de tu agrado</p>
    
    
  </div>
</div>


        </Modal.Body>
        

        
      </Modal>
    );
  }


export default contactModal;