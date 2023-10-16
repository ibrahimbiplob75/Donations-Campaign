const getStoredDonation=()=>{
    const storeDonation=localStorage.getItem("donation");
    if(storeDonation){
        return JSON.parse(storeDonation);
    }
    return [];
}

const addDonation=id=>{
    const storeDonation=getStoredDonation();
    const exists=storeDonation.find(jobID => jobID==id)
    if(!exists){
        storeDonation.push(id);
        localStorage.setItem('donation',JSON.stringify(storeDonation));
    }
}

export{getStoredDonation,addDonation}