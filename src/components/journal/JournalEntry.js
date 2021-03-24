import React from 'react'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


// advancedFormat permite usar la fecha ordinal entre otras opciones
const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);


export const JournalEntry = ( {id, date, title, body, url} ) => {
    //console.log(id, date, title, body, url);

    const day = dayjs(date);
    const dispatch = useDispatch();

    //para seleccionar la nota activa
    const handleEntryClick = () => {
        dispatch(
            activeNote( id, {
                date, title, body, url
            })
        );
    }

    return (
        <div className="journal__entry pointer"
             onClick={ handleEntryClick }           
        >
            { //si la url de la imagen existe entonces mostrar &&
                url &&
                <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
                }}
            >
           </div>
            }
            <div className="journal__entry-body" >
                <p className="journal__entry-title" >
                    { title }
                </p>
                <p className="journal__entry-content" >
                    { body } 
                </p>
            </div>

            <div className="journal__entry-date" >
                <span>{day.locale('es').format("dddd")}</span>
                <h4>{day.locale('es').format("D")}</h4>
                <h4>{day.locale('es').format("MMMM")}</h4>

            </div>
            
        </div>
    )
}
