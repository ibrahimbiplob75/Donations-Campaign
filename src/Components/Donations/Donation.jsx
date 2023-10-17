import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../Utility/Localstorage';
import DonateList from '../DonateList/DonateList';

const Donation = () => {
    const [showControll, setShowcontrol]=useState(4);
    const Donated=useLoaderData();
    const [donateList , setDonateList]=useState([]);

    
    const No_of_donate=donateList.length;
    localStorage.setItem("Donate_length", No_of_donate);
   
    useEffect(()=>{
        const addedDonateID=getStoredDonation();
        if(Donated.length >0){
            const allDonated=[];

            for(const id of addedDonateID){
                const donate=Donated.find(donate=> donate.id == id);
                if(donate){
                    allDonated.push(donate);
                }
            }

            setDonateList(allDonated);
        }
    },[])
    return (
      <div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-4 md:m-16 lg:6">
          {donateList.slice(0, showControll).map((List) => (
            <DonateList key={List.id} List={List}></DonateList>
          ))}
        </div>
        <div className='text-center'>
          <div className={showControll == donateList.length ? "hidden" : ""}>
            <button
              onClick={() => setShowcontrol(donateList.length)}
              className="btn btn-primary border-none bg-[#009444]"
            >
              see All
            </button>
          </div>
        </div>
      </div>
    );
};

export default Donation;