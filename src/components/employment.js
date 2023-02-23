import {dateToString} from '../util/dateUtils'
import '../css/navbar.css'

function Employment({employment}) {

    return (
        <div className='employment-wrapper'>
            <h3>{employment.employer + "."} </h3> 
            <span>{employment.startDate && (employment.startDate)}</span>
            <span> { employment.endDate && (employment.endDate)} </span>
            <ul className='employment-callouts'>
                {employment.callouts && employment.callouts.map((callout, index) =>
               <li key={index} className='employment-callout'>
                    {callout}
                </li>)}
            </ul>  
        </div>
    );
}

export default Employment;