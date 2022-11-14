import Alert from 'react-bootstrap/Alert';


function DismissAlert(props) { 
  

  

   
 


    return (
      props.alert && <Alert variant={props.alert.type} >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        
      </Alert>
    );
  

}

export default DismissAlert ;
