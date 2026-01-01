const Logo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <h2 className="text-3xl font-black">
                <span className='text-blue-500'>LEARN</span>
                <span className="text-red-600">ERS</span>
            </h2>
        </div>
    );
};

export default Logo

