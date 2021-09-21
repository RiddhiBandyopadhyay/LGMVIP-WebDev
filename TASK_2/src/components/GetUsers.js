import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Fetchapi from "./Fetchapi";
import './Style.css';

const GetUsers = () => {
  return (
    <>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a className="navbar-brand" href="#">
                ZIPPY
            </a>
            <form class="d-flex">
                <button class="btn btn-outline-success" type="submit" onSubmit={
                    ""
                }>Get Users</button>
            </form>
        </div>
    </nav>
    </>
  );
};

export default GetUsers;
