'use client';

const LocationCard = ({city,address,details}) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{city}</h3>
            <p className="text-red-400 mb-1">{address}</p>
            <p className="text-gray-300">{details}</p>
        </div>
    );
};

export default LocationCard;