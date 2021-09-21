import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './Style.css';

const Fetchapi = () => {
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const { data } = await response.json();
    setMembers(data);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a className="navbar-brand" href="#">
                ZIPPY
            </a>
            <form class="d-flex" onSubmit={(e)=>{
              e.preventDefault();
              setOpen(true);
            }}>
                <button class="btn btn-outline-success" type="submit">Get Users</button>
            </form>
        </div>
    </nav>
      {loading ? (
        <div className = "clip">
          <ClipLoader size={30} color={"9013FE"} loading={loading} />
        </div>
      ) : (
        <div className = "App">
          <div className="container-fluid mt-5">
          <h1>Zippy Team</h1>
            <div className="row text center row-cols-1 row-cols-sm-2 row-cols-md-3">
              {

                open 
                ?
              members.map((curElem, ind) => {
                return (
                  <div key={ind}>
                    <div className="col-10 col-md-4 mt-5">
                      <div className="card p-2">
                        <div className="d-flex align-items-center cardComp">
                          <div className="image">
                            <img
                              src={`${curElem.avatar}`}
                              alt=""
                              className="rounded"
                              width="155"
                            />
                          </div>
                          <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 textLeft">
                              {curElem.first_name} {curElem.last_name}
                            </h4>
                            <br />
                            <span className="textLeft">
                              id : {curElem.id}
                            </span>
                            <div className="p-2 mt-2 d-flex justify-content-between rounded">
                              <span className="textLeft">
                                 {curElem.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })

              : null
            
            }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fetchapi;
