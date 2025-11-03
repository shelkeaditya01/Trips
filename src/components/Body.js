import { useState,useEffect } from "react";
import Card from "./Card";



const Body = () =>{
    
    const[placeData,setPlaceData]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async () => {
        const url = "https://www.ixigo.com/itinerary-planner/api/explore?origin=bangalore&offset=30&limit=15&travelMonth=SEP";

        const data = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        const json = await data.json();
    
        console.log(json);

        setPlaceData(json?.data?.destinations);
        setLoading(false);
        console.log(placeData);
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
            <section className="mt-6 sm:mt-8 relative overflow-hidden rounded-3xl ring-1 ring-gray-200 shadow-sm bg-gradient-to-br from-green-50 to-white">
                <div className="p-6 sm:p-10">
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">Find your next escape</h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">Search destinations, compare budgets, and book with confidence.</p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        <input className="w-full sm:w-80 rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Search destinations" />
                        <select className="w-full sm:w-48 rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Any month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                        <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 font-medium shadow-sm">Search</button>
                    </div>
                </div>
            </section>

            <div className="pt-6 pb-6">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Explore destinations</h2>
                <p className="mt-1 text-sm text-gray-600">Handpicked getaways with indicative budgets and weather tags.</p>
            </div>

            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
                            <div className="h-44 sm:h-48 bg-gray-200 animate-pulse" />
                            <div className="p-4">
                                <div className="h-5 w-3/5 bg-gray-200 rounded animate-pulse" />
                                <div className="mt-3 h-4 w-2/5 bg-gray-200 rounded animate-pulse" />
                                <div className="mt-4 h-9 w-full bg-gray-200 rounded-lg animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && placeData?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        placeData.map((place,index)=>(
                            <Card key={index} placeIn={place}></Card>
                        ))
                    }
                </div>
            )}

            {!loading && (!placeData || placeData.length === 0) && (
                <div className="mt-10 flex items-center justify-center">
                    <div className="text-center bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-8 max-w-md">
                        <div className="mx-auto h-28 w-28">
                            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                                <circle cx="60" cy="60" r="56" fill="#ecfdf5" stroke="#a7f3d0" />
                                <path d="M40 80c8-10 18-16 22-18l18-8-8 18c-2 4-8 14-18 22-7 6-18 4-24-2s-8-17 2-24z" fill="#10b981" opacity="0.9"/>
                                <circle cx="75" cy="42" r="8" fill="#34d399" />
                            </svg>
                        </div>
                        <div className="mt-4 text-2xl font-semibold">No destinations found</div>
                        <div className="mt-2 text-gray-600 text-sm">Try refreshing or check back later.</div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Body;