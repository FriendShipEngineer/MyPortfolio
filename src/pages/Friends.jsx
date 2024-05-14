import { Link } from "react-router-dom";
import { friends } from "../constants";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";
const Friends = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text drop-shadow font-semibold">
          My Friends
        </span>
      </h1>
      <p className="text-slate-500 mt-2 leading-relaxed">I love my friends!</p>
      <div className="flex flex-wrap my-20 gap-16">
        {friends.map((friend) => (
          <div className="lg:w-[400px] w-full" key={friend.name}>
            <div className="block-container w-80 h-80">
              <div className={`btn-back rounded-xl ${friend.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={friend.iconUrl}
                  alt="threads"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {friend.name}
              </h4>
              <p className="mt-2 text-slate-500">{friend.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={friend.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 text-4xl"
                >
                  in
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
      {/*
            
                
            

            
            */}
    </section>
  );
};
export default Friends;
