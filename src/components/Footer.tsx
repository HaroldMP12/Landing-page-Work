import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="text-black p-5">
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2023 All rights reserved.</p>
        <div className="flex items-center">
          <p>Hecho con</p>
          <AiFillHeart className="text-red-500 mx-1" />
          <p>por mi :)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;