import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between py-3 px-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='font-bold text-4xl'>Knowledge Junction</h1>
            <img src={profile} alt="profile" />
        </div>
    );
};

export default Header;