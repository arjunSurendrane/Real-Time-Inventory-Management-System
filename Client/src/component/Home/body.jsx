import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emptyFolder from "../../assets/out-of-stock.png";

export default function InventoryTable({ socket }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.emit("data");
    socket.on("inventory", ({ data, message }) => {
      console.log({ data, message });
      toast.success(message);
      setData(data);
    });
    return () => {
      socket.off("inventory");
    };
  }, []);

  return (
    <>
      <Toaster />{" "}
      {data.length ? (
        <div>
          <div className="md:mx-14  mt-10  flex justify-between  rounded">
            <table className="table-fixed w-full border-separate border-spacing-1 border border-slate-500 bg-[#7c68ee14] rounded">
              <thead>
                <tr className="text-center">
                  <th className="border border-slate-600 py-2 bg-[#7c68ee53]">
                    No
                  </th>
                  <th className="border border-slate-600 bg-[#7c68ee53]">
                    Name
                  </th>
                  <th className="border border-slate-600 bg-[#7c68ee53]">
                    Description
                  </th>
                  <th className="border border-slate-600 bg-[#7c68ee53]">
                    Quantity
                  </th>
                  <th className="border border-slate-600 bg-[#7c68ee53]">
                    Price
                  </th>
                  <th className="border border-slate-600 bg-[#7c68ee53]">
                    Supplier
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, i) => (
                  <tr key={i} className="text-center cursor-pointer">
                    <td className="border border-slate-700">{i + 1}</td>
                    <td className="border border-slate-700">{data.Name}</td>

                    <td className="border border-slate-700">
                      {data.Description}
                    </td>
                    <td className="border border-slate-700">{data.Quantity}</td>
                    <td className="border border-slate-700">{data.Price}</td>
                    <td className="border border-slate-700">
                      {data.Supplier ? data.Supplier : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid place-content-center mt-20">
          <img src={emptyFolder} alt="" className="w-3/4 h-4/4" />
        </div>
      )}
    </>
  );
}
