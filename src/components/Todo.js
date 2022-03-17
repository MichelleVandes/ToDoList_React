import React from "react";

function Todo (props) {
    const {details} = props;
    //  const { details, onDelete } = props;
    console.log(details)

    return(
        <li>
            hello
            {details.Todo}
            {/* <button onClick={() onDelete(details.id)}>X</button> */}
        </li>
    )
}
export default Todo