import React, {useState} from "react";
import s from "../Content/Users/MyUsers.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);  // количество страниц
    let pages = [];                                                         // здесь создадим массив этих страинц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let size = 5;                                                            // размер части
    let part = Math.ceil(pagesCount / size);                             //колич частей на которые разбиваем pagesCount
    let [currentPart, setCurrentPart] = useState(1);               //применяем хук для локального стейта
    let leftLimit= (currentPart - 1) * size + 1;                             //крайнее левое значение в промежутке
    let rightLimit= currentPart * size;                                     //крайнее правое значение в промежутке

    return (
        <div>
            {currentPart>1 && <button onClick={()=> {setCurrentPart(currentPart - 1)}}> prew </button>}

            {pages
                .filter(p=> p>= leftLimit&& p<= rightLimit).map(p=>{
                    return <span  className={props.currentPage === p ? s.active : ''}
                                 onClick={() => props.onChangePage(p)}>{p+ ' '}</span>
                })

            }
            {currentPart<part && <button onClick={()=> {setCurrentPart(currentPart + 1)}}> next </button>}
        </div>
    )

}


export default Paginator;

