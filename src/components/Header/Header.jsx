import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between py-3 px-4 mx-auto border-b-2'>
            <h1 className='font-bold text-4xl'>Knowledge Junction</h1>
            <img src={profile} alt="profile" />
        </div>
    );
};

export default Header;