import { useEffect, useState } from "react";
import { getUser } from "../api/playgroundBackend";

const Userlist = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    education: string;
    links: string;
  }
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    // Fetch user with ID 1
    getUser().then(setUser);
  }, []);

  return (
    <div>
      <p className="text-5xl font-bold text-blue-600 p-2 font-Poppins text-center">
        User List:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {user.map((data: any) => (
          <div
            key={data?.id}
            className="bg-pink-50 border border-pink-300 rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105"
          >
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {data?.name}
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {data?.email}
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Education:</span>{" "}
                {data?.education}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">links:</span> {data?.links}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
