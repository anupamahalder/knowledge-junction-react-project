import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='font-bold text-5xl my-auto text-purple-950'>Knowledge Junction</h1>
            <img src={profile} alt="profile" />
        </div>
    );
};

export default Header;