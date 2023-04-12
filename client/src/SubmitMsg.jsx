function SubmitMsg(props) {
  return (
  <div className="msgArea" >
        <div>
          <h3>Submission succesful !</h3>
          <h2>Pickup is at {props.formData.hh} : {props.formData.mm}</h2>
          <h3 style={{fontWeight : 'bold'}}>Pickup Date {props.formData.date}</h3>
          <h3>Drop location {props.formData.drop}</h3>
          <h3>Pickup location {props.formData.pickup}</h3>
        </div>
      </div>
  )
}

export default SubmitMsg;
