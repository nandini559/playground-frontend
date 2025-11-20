import { useEffect, useState } from "react";
import { getProjects, getUser } from "../api/playgroundBackend";

// ✅ Define TypeScript types
interface User {
  id: number;
  name: string;
  email: string;
  education: string;
  links: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string;
  link: string;
}

const PlaygroundHome = () => {
  // ✅ Provide types for state
  const [user, setUser] = useState<User[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch user with ID 1
    getUser().then(setUser);

    // Fetch all projects
    getProjects().then(setProjects);
  }, []);

  return (
    <div className=" ">
      <div className="grid place-items-center mt-20 ">
        <h3 className="font-bold text-2xl">My API Playground</h3>
        <div className="bg-slate-100 flex gap-4 justify-center p-4">
          <div>
            <p className="font-bold">Profile Info:</p>
            {/* ✅ Use optional chaining to avoid errors if user is null */}
            {user.map((data) => (
              <div>
                <p>Name: {data?.name}</p>
                <p>Email: {data?.email}</p>
                <p>Education: {data?.education}</p>
                <p>Links: {data?.links}</p>
              </div>
            ))}
            <div className="mt-2">
              <button className="bg-blue-500 rounded p-2 text-white mr-2">
                GitHub
              </button>
              <button className="bg-blue-500 rounded p-2 text-white mr-2">
                LinkedIn
              </button>
              <button className="p-2 rounded border bg-slate-300">
                Portfolio
              </button>
            </div>
          </div>

          <div className="grid gap-2">
            <p className="font-bold">Projects:</p>

            {projects.map((p) => (
              <div key={p.id} className="border rounded p-4">
                <p className="font-bold">{p.title}</p>
                <p>{p.description}</p>
                <p>Skills: {p.skills}</p>
                <p>Link: {p.link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHome;
