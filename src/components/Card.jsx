const Card = ({ name, email, id }) => {
    return (
        <div className='hover:scale-105 bg-violet-400 rounded-md p-3 m-2 inline-block transition-transform ease-in duration-300 border-2 shadow-lg'>
            <img className='m-auto' src={`https://robohash.org/${id}?size=200x200&set=set4`} alt={name} />
            <h2 className='text-2xl font-bold p-2'>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
