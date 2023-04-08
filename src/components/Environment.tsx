import {FC}  from 'react'
import {IEnvProps} from '../interfaces/Interfaces'


 const Environment:FC<IEnvProps> =  ({name,age,qualityCool}) => {
  return (
    <div>
        {`Hey my name is ${name}. I'am ${age} years old , my quality is trash`}
    </div>
  );
}

export default Environment