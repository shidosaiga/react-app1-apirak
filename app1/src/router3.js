import React from "react";
// 1. แก้ไขตัวสะกดจาก BrowerRouter เป็น BrowserRouter
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import './navlink.css';
import './products.css';
import Products from './products'
import Home from './home'
import Member from "./member.js";

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal"
                    })}
                >
                    Home
                </NavLink> -&nbsp;
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                >
                    Products
                </NavLink> -&nbsp;
                { }
                <NavLink
                    to="/member"
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                >
                    Member
                </NavLink> -&nbsp;

                { }
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                >
                    Contact
                </NavLink>
            </nav>

            <Routes style={{ margin: '20px' }}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/member" Component={Member} />
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>} />
                <Route path="/*" element={<div style={{textAlign:'center'}}>Error 404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}