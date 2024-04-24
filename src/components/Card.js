import React, {useState} from 'react';

const Card = ({cardInfo}) => {

    const [takeCard , setTakeCard]= useState(true)
    const [cardTake , setCardTake] = useState(false)

    const handleClick = ()=> {
        setTakeCard(cardTake)
        setCardTake(takeCard)
    }

    return (
        <div className='card'  onClick={handleClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='cardImg'/>
            <h2 className='cardTitle'>{ cardInfo.name }</h2>
            <p className='cardDescription'>{cardInfo.username}</p>
            {
                takeCard===true&&(
                    <div>
                        <h3>{cardInfo.address.city}</h3>
                        <p>{cardInfo.email}</p>
                        <span> {cardInfo.phone}</span>
                    </div>
                )
            }
        </div>
    );
};
export default Card;