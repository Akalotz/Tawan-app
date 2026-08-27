"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShopList ({ data }){

    const [keyword,setKeyword] = useState("");

    const filterShops = data.filter(
        (item) => {
            const searchText = keyword.toLowerCase();
            return item.title.toLowerCase().includes(searchText)
            
        }
    );
     const isActive = (act: boolean) => {
        if (act) 
            return <span style={{ color: "green" }}>OPEN</span>;
        return <span style={{ color: "red" }}>CLOSE</span>;
    };
    return (
        <div className="max-w-3sl ma-auto p-6">

        {/* Search */}
        <div className="mb-6">
            
        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Search shop..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

            <div className="mb-4 text-gray-600">
                Found {filterShops.length} Shop(s)
            </div>
            <div className="space-y-4">
                 {
                        filterShops.map(shops => (
                            <div key={shops.id} className="border rounded-ig p-4">
                                <h2 className="fot-semiboid">
                                    {shops.title}
                                </h2>
                                <p>Open Status: {isActive(shops.openStatus)}</p>
                                <Link 
                                href = {`/week07/${shops.id}`}
                                className="inline-block mt-3 bg-blue-600 text-white px4 py-2 rounded"
                                >
                                View Detail
                                </Link>
                            </div>
                        ))
                 }
            </div>

        </div>
    );
        
    
}