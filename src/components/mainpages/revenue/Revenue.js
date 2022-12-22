import React, { useState } from "react";
import ChartRevenue from "../chartRevenue/ChartRevenue";
import "./revenue.css";
import { BsBarChart, BsCalendar4Week, BsDownload } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function Revenue() {
    return (
        <div class="content-revenue">
            <div class="container-revenue">
                <div className="label-revenue">
                    <button className="next-month"><MdOutlineArrowBackIosNew style={{ fontSize: "28px" }} /></button>
                    <h2>December revenue</h2>
                    <button className="next-month"><MdArrowForwardIos style={{ fontSize: "28px" }} /></button>
                </div>
                <div class="wrapper-element-revenue">
                    <div class="element-revenue">
                        <div class="card-block">
                            <div class="rowr align-items-center">
                                <div class="col-9">
                                    <h4 class="text-c-yellow">$30200</h4>
                                    <h6 class="text-muted m-b-0">
                                        All Earnings
                                    </h6>
                                </div>
                                <div class="col-3 text-right">
                                    <BsBarChart style={{ fontSize: "28px" }} />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-c-yellow">
                            <div class="rowr">
                                <div class="col-9">
                                    <p class="text-white">% change</p>
                                </div>
                                <div class="col-3 text-right">
                                    <FiTrendingUp style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="element-revenue">
                        <div class="card-block">
                            <div class="rowr align-items-center">
                                <div class="col-9">
                                    <h4 class="text-c-yellow">290+</h4>
                                    <h6 class="text-muted m-b-0">
                                        Sold products
                                    </h6>
                                </div>
                                <div class="col-3 text-right">
                                    <ImFileText2 style={{ fontSize: "28px" }} />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-c-green">
                            <div class="rowr">
                                <div class="col-9">
                                    <p class="text-white m-b-0">% change</p>
                                </div>
                                <div class="col-3 text-right">
                                    <FiTrendingUp style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="element-revenue">
                        <div class="card-block">
                            <div class="rowr align-items-center">
                                <div class="col-9">
                                    <h4 class="text-c-yellow">250</h4>
                                    <h6 class="text-muted m-b-0">Orders</h6>
                                </div>
                                <div class="col-3 text-right">
                                    <BsCalendar4Week
                                        style={{ fontSize: "28px" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-c-pink">
                            <div class="rowr">
                                <div class="col-9">
                                    <p class="text-white m-b-0">% change</p>
                                </div>
                                <div class="col-3 text-right">
                                    <FiTrendingUp style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="element-revenue">
                        <div class="card-block">
                            <div class="rowr align-items-center">
                                <div class="col-9">
                                    <h4 class="text-c-yellow">12</h4>
                                    <h6 class="text-muted m-b-0">
                                        New products
                                    </h6>
                                </div>
                                <div class="col-3 text-right">
                                    <BsDownload style={{ fontSize: "28px" }} />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-c-blue">
                            <div class="rowr">
                                <div class="col-9">
                                    <p class="text-white m-b-0">% change</p>
                                </div>
                                <div class="col-3 text-right">
                                    <FiTrendingUp style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ChartRevenue />
                </div>
            </div>
        </div>
    );
}
export default Revenue;
