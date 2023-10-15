
import Donation_categories from '../donations_categories/Donation_categories';



const Home = () => {

  
    return (
      <div className="mt-28 ">
        <div
          className="hero min-h-screen -mt-60 "
          style={{
            backgroundImage: 'url("/public/Resources/donation.jpg")',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>

          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>

              <div className="relative w-1/2 ml-40 mt-20">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input input-bordered w-full pr-16 text-black"
                />
                <button className="btn btn-error text-white text-xl absolute top-0 right-0 rounded-l-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          

          <Donation_categories></Donation_categories>
          
        </div>
        
       
      </div>
      
    );
};

export default Home;