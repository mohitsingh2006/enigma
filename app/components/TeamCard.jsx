import Image from 'next/image';

const TeamCard = ({ name, role, image, bio }) => {
    return (
        <div className="bg-black rounded-lg shadow-md px-8 py-10 text-center border border-red-400">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                    width={112}
                    height={112}
                    src={image} 
                    alt={`${name} photo`} 
                    className="w-full h-full object-cover" 
                    />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-md text-red-400 mb-2">{role}</p>
            <p className="text-md text-gray-800 dark:text-gray-300">{bio}</p>
        </div>
    );
};

export default TeamCard;