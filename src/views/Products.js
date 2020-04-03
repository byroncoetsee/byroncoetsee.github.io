import React, { useState, useEffect } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "react-tabs/style/react-tabs.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import AppLayout from "../components/layouts/app";
import { storePageNumber, setRegistered } from "../state/actions/index";
import { connect } from "react-redux";
import { getProducts, getNewProducts } from "../helpers/api";

let mapStateToProps = (state) => {
    return {
        guid: state.guid,
        pageNumber: state.pageNumber,
        registered: state.registered,
        showModal: state.showModal,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        storePageNumber: (pageNumber) => dispatch(storePageNumber(pageNumber)),
        setRegistered: (data) => dispatch(setRegistered(data)),
    };
}

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNummber] = useState(props.pageNumber);
    const [resultCount, setResultCount] = useState(10);
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("title");
    const [orderBy, setOrderBy] = useState("");
    const [sortBy, setSortBy] = useState("asc");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [route, setRoute] = useState("");
    const [currentPage, setCurrentPage] = useState("");
    const [maxPage, setmaxPage] = useState("");
    const buildQuery = () => {
        let queryString = "";
        if (search.length > 0) {
            queryString += "&search=" + search + "&searchBy=" + searchBy;
        }

        setQuery(queryString);

        return queryString;
    };

    const buildSort = (val) => {
        let sortString = "";
        if (sortBy == "") {
            setSortBy("asc");
            sortString = "&orderBy=" + val + "&sortBy=asc";
        }
        if (sortBy == "asc") {
            setSortBy("desc");
            sortString = "&orderBy=" + val + "&sortBy=desc";
        }

        if (sortBy == "desc") {
            setSortBy("");
            sortString += "";
        }
        setSort(sortString);
        setOrderBy(val);
        console.log(sortString);
        setLoading(true);

        getProducts(props.guid, resultCount, pageNumber, query, sortString)
            .then(function (products) {
                setProducts(products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const clearSearch = () => {
        setQuery("");
        setSearch("");
        setLoading(true);
        getProducts(props.guid, resultCount, pageNumber, "", sort)
            .then(function (products) {
                setProducts(products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        var call;
        if (props.registered === 1) {
            call = getNewProducts(props.guid, resultCount, pageNumber);
            props.setRegistered({
                registered: 0,
                showModal: props.showModal,
            });
        } else {
            call = getProducts(props.guid, resultCount, pageNumber);
        }

        call.then(function (products) {
            setProducts(products);
            setLoading(false);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const refreshResults = () => {
        setLoading(true);

        getNewProducts(props.guid, resultCount, pageNumber, query, sort)
            .then(function (products) {
                setProducts(products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const resultPerPage = (event) => {
        setLoading(true);
        setResultCount(event.target.value);

        getProducts(props.guid, event.target.value, pageNumber, query, sort)
            .then(function (products) {
                setProducts(products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const nextPage = () => {
        setLoading(true);
        let newCount = pageNumber + 1;

        getProducts(props.guid, resultCount, newCount, query, sort).then(function (products) {
            setLoading(false);
            setPageNummber(newCount);
            props.storePageNumber(newCount);
            setProducts(products);
        });
    };

    const previousPage = () => {
        setLoading(true);
        let newCount = pageNumber - 1;
        getProducts(props.guid, resultCount, newCount, query, sort)
            .then(function (products) {
                setLoading(false);
                setPageNummber(newCount);
                props.storePageNumber(newCount);
                setProducts(products);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const searchResults = () => {
        let searchQuery = buildQuery();

        setLoading(true);
        getProducts(props.guid, resultCount, pageNumber, searchQuery, sort)
            .then(function (products) {
                setProducts(products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const redir = (newRoute) => {
        if (window.location.pathname !== newRoute) {
            setRoute(newRoute);
            setRedirect(true);
        }
    };

    if (redirect) return <Redirect to={route} push />;

    return (
        <AppLayout>
            <div className="row justify-content-center" style={{ paddingTop: "30px" }}>
                <div className="col-10 text-left">
                    <div className="">
                        <div className="row">
                            <div className="col-12 text-left">
                                <h4>Products</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 text-left">
                                <a className="btn btn-secondary" onClick={refreshResults} style={{ color: "#fff", marginTop: "30px" }}>
                                    Refresh Results
                                </a>
                            </div>
                            <div className="col-2 text-right">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Results Per Page</label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={(event) => resultPerPage(event)}>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Search:</label>
                                    <input className="form-control" value={search} onChange={(event) => setSearch(event.target.value)} />
                                </div>
                            </div>
                            <div className="col-2">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Search By:</label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={(event) => setSearchBy(event.target.value)}>
                                        <option value="title">Title</option>
                                        <option value="barCode">Bar Code</option>
                                        <option value="gtin">GTIN</option>
                                        <option value="minPrice">Min Price</option>
                                        <option value="maxPrice">Max Price</option>
                                        <option value="price">Price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-1">
                                <a className="btn btn-secondary" style={{ color: "#fff", marginTop: "30px", float: "right" }} onClick={searchResults}>
                                    Search
                                </a>
                            </div>
                            <div className="col-3">
                                {search.length > 0 ? (
                                    <a className="btn btn-outline-secondary" style={{ marginTop: "30px" }} onClick={clearSearch}>
                                        Clear Search
                                    </a>
                                ) : null}
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" onClick={() => buildSort("title")}>
                                        Title
                                        {orderBy == "title" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("mpBarcode")}>
                                        Bar Code
                                        {orderBy == "mpBarcode" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("gtin")}>
                                        GTIN
                                        {orderBy == "gtin" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("minPrice")}>
                                        Minimum Price
                                        {orderBy == "minPrice" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("maxPrice")}>
                                        Preferred Price
                                        {orderBy == "maxPrice" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("currentPrice")}>
                                        Current Price
                                        {orderBy == "currentPrice" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th scope="col" onClick={() => buildSort("buyBox")}>
                                        Buybox
                                        {orderBy == "buyBox" ? (
                                            sortBy == "asc" ? (
                                                <i className="fa fa-chevron-up" style={{ marginLeft: "5px" }}></i>
                                            ) : sortBy == "desc" ? (
                                                <i className="fa fa-chevron-down" style={{ marginLeft: "5px" }}></i>
                                            ) : null
                                        ) : null}
                                    </th>
                                    <th>Takealot Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td className="text-center" colSpan="8">
                                            <i className="fa fa-spinner fa-spin fa-2x"></i>
                                        </td>
                                    </tr>
                                ) : products.length > 0 ? (
                                    products.map((product) => (
                                        <tr>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>{product.title}</td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>{product.barCode}</td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>{product.gtin}</td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>
                                                R {product.minPrice ? product.minPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") : "0.00"}
                                            </td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>
                                                R{" "}
                                                {product.preferredSalePrice
                                                    ? product.preferredSalePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                                                    : "0.00"}
                                            </td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>
                                                {product.currentPrice
                                                    ? "R " + product.currentPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                                                    : "Disabled"}
                                            </td>
                                            <td onClick={() => redir(`/product/${product.offerId}`)}>
                                                <span
                                                    style={
                                                        product.buybox == "Winning"
                                                            ? { color: "#009900" }
                                                            : product.buybox == "n/a"
                                                            ? { color: "#808080" }
                                                            : { color: "#ff0000" }
                                                    }
                                                >
                                                    {product.buybox == "n/a" ? "Disabled" : product.buybox}
                                                </span>
                                            </td>
                                            <td>
                                                <a href={product.url} target="_blank">
                                                    View Offer
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="text-center" colSpan="8">
                                            <label>No offers to display. Please refresh results</label>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="row" style={{ marginBottom: "30px" }}>
                            <div className="col-5">
                                {pageNumber < 2 ? null : (
                                    <button className="btn btn-default" onClick={previousPage}>
                                        {"<<"} Previous
                                    </button>
                                )}
                            </div>
                            <div className="col-2 text-center" style={{ paddingTop: "10px" }}>
                                <span className="count-container" style={{ padding: "3px 10px" }}>
                                    Page {pageNumber}
                                </span>
                            </div>
                            <div className="col-5 text-right">
                                <button className="btn btn-default" onClick={nextPage}>
                                    Next {">>"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "50px" }}></div>
        </AppLayout>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));
