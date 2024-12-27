import React, { useState, useEffect } from "react";

const DropdownBootcamp = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/categories?populate=*&sort=Category"
        );
        const data = await response.json();
        setBootcamps(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBootcamps();
  }, []);

  return (
    <div className="cursor-default bg-white flex flex-col top-20 left-0 absolute w-full shadow-sm">
      <div className="w-max left-0 p-8 flex flex-row space-x-12">
        <ul className="space-y-5 w-max">
          {bootcamps.map((bootcamp) => (
            <ul key={bootcamp.id} className="space-y-5 w-max">
              <strong className="text-lg underline">{bootcamp.Category}</strong>
              {bootcamp.programs.map((program) => (
                <li key={program.id}>
                  <a
                    className="cursor-pointer hover:underline underline-offset-4"
                    href="#"
                  >
                    {program.Title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownBootcamp;
