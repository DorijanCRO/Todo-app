import { ButtonB } from "./ButtonStyle";


function Button(props){


    return(
        <>
            <ButtonB onClick={props.remove} remove={props.remove}>Remove</ButtonB>
        </>
    );
}

export default Button;